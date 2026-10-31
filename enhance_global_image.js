const sharp = require('c:/projects/AarixaInsurance/mjv/node_modules/sharp');
const path = require('path');
const fs = require('fs');

async function enhanceGlobalImage() {
  const inputPath = 'c:/projects/AarixaInsurance/finvestments/source_assets/theme_image_2.jpeg';
  const outDir = 'c:/projects/AarixaInsurance/finvestments/public';

  console.log('Reading input image...');
  const meta = await sharp(inputPath).metadata();
  console.log('Original size:', meta.width, 'x', meta.height);

  // Upscale 2x to 3200x1600 with high-quality lanczos3, mild unsharp mask, and slight saturation boost
  const enhanced = await sharp(inputPath)
    .resize(3200, 1600, {
      kernel: sharp.kernel.lanczos3,
      fit: 'fill'
    })
    .sharpen({
      sigma: 1.1,
      m1: 1.0,
      m2: 2.5,
      x1: 2.0,
      y2: 10.0,
      y3: 20.0
    })
    .modulate({
      brightness: 1.02,
      saturation: 1.08
    })
    .toBuffer();

  // Save both high-res PNG and ultra-quality JPG
  fs.writeFileSync(path.join(outDir, 'finvestments-global-presence.png'), enhanced);
  console.log('Saved 3200x1600 finvestments-global-presence.png');

  await sharp(enhanced)
    .jpeg({ quality: 98, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(path.join(outDir, 'finvestments-global-presence.jpg'));
  console.log('Saved high-definition finvestments-global-presence.jpg (chroma 4:4:4)');
}

enhanceGlobalImage().catch(console.error);
