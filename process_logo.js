const sharp = require('c:/projects/AarixaInsurance/mjv/node_modules/sharp');
const fs = require('fs');
const path = require('path');

async function processLogo() {
  const inputPath = 'c:/projects/AarixaInsurance/finvestments/source_assets/logo_raw.jpeg';
  const outDir = 'c:/projects/AarixaInsurance/finvestments/public';
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const { data, info } = await sharp(inputPath)
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const outBuf = Buffer.alloc(width * height * 4);

  // We want to detect the white background and smoothly isolate the foreground
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const srcIdx = (y * width + x) * channels;
      const dstIdx = (y * width + x) * 4;

      let r = data[srcIdx];
      let g = data[srcIdx + 1];
      let b = data[srcIdx + 2];

      // Whiteness indicator: when all 3 channels are very high
      const minVal = Math.min(r, g, b);
      const maxVal = Math.max(r, g, b);
      const diff = maxVal - minVal;

      let alpha = 255;

      // Pure background threshold
      if (minVal >= 250 && diff < 8) {
        alpha = 0;
      } else if (minVal > 220 && diff < 15) {
        // Anti-aliasing transition region
        // smooth transition from 220 to 250
        const factor = (250 - minVal) / (250 - 220);
        alpha = Math.round(Math.min(255, Math.max(0, factor * 255)));
      } else if (minVal > 230) {
        // slightly tinted edge
        const factor = (255 - minVal) / 25;
        alpha = Math.round(Math.min(255, Math.max(0, factor * 255)));
      }

      if (alpha > 0) {
        // De-contaminate white from edges: C_fg = (C_obs - (1 - a/255)*255) / (a/255)
        const aNorm = alpha / 255;
        if (aNorm < 1 && aNorm > 0.05) {
          r = Math.min(255, Math.max(0, Math.round((r - 255 * (1 - aNorm)) / aNorm)));
          g = Math.min(255, Math.max(0, Math.round((g - 255 * (1 - aNorm)) / aNorm)));
          b = Math.min(255, Math.max(0, Math.round((b - 255 * (1 - aNorm)) / aNorm)));
        }

        // Slight vibrancy boost for the rich royal blues and golds
        outBuf[dstIdx] = r;
        outBuf[dstIdx + 1] = g;
        outBuf[dstIdx + 2] = b;
        outBuf[dstIdx + 3] = alpha;
      } else {
        outBuf[dstIdx] = 0;
        outBuf[dstIdx + 1] = 0;
        outBuf[dstIdx + 2] = 0;
        outBuf[dstIdx + 3] = 0;
      }
    }
  }

  // 1. Save transparent trimmed logo
  const transparentTrimmed = await sharp(outBuf, { raw: { width, height, channels: 4 } })
    .trim({ threshold: 5 })
    .png({ quality: 100, compressionLevel: 9 })
    .toBuffer();

  const logoTransparentPath = path.join(outDir, 'finvestments-logo.png');
  fs.writeFileSync(logoTransparentPath, transparentTrimmed);
  console.log('Saved finvestments-logo.png');

  // Let's get metadata of trimmed logo to find mark bounding box
  const trimmedMeta = await sharp(transparentTrimmed).metadata();
  console.log('Trimmed logo size:', trimmedMeta.width, 'x', trimmedMeta.height);

  // 2. Also create a mark-only icon (just the circular emblem on the left)
  // In the original 1600x675 image, the emblem is in roughly x: 50 to 350, y: 150 to 500
  // Let's extract the emblem cleanly
  const markBuffer = await sharp(outBuf, { raw: { width, height, channels: 4 } })
    .extract({ left: 50, top: 150, width: 330, height: 350 })
    .trim({ threshold: 5 })
    .png({ quality: 100 })
    .toBuffer();

  const markPath = path.join(outDir, 'finvestments-mark.png');
  fs.writeFileSync(markPath, markBuffer);
  console.log('Saved finvestments-mark.png');

  // 3. Create a luxury high-res banner with subtle background for rich display
  // Also copy original source images to public/assets
  fs.copyFileSync(
    'c:/projects/AarixaInsurance/finvestments/source_assets/theme_image_1.jpeg',
    path.join(outDir, 'finvestments-amfi-banner.jpg')
  );
  fs.copyFileSync(
    'c:/projects/AarixaInsurance/finvestments/source_assets/theme_image_2.jpeg',
    path.join(outDir, 'finvestments-global-presence.jpg')
  );
  console.log('Copied theme images to public assets');
}

processLogo().catch(console.error);
