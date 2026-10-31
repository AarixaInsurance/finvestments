const sharp = require('c:/projects/AarixaInsurance/mjv/node_modules/sharp');
const fs = require('fs');
const path = require('path');

async function extractMark() {
  const outDir = 'c:/projects/AarixaInsurance/finvestments/public';
  const logoPath = path.join(outDir, 'finvestments-logo.png');

  // Extract the circular emblem from the left side of trimmed logo
  // Logo is 1388 x 224
  const mark = await sharp(logoPath)
    .extract({ left: 0, top: 0, width: 230, height: 224 })
    .trim({ threshold: 5 })
    .png({ quality: 100 })
    .toBuffer();

  fs.writeFileSync(path.join(outDir, 'finvestments-mark.png'), mark);
  console.log('Saved finvestments-mark.png');

  // Also create a high-res favicon/icon (e.g. 64x64 and 192x192)
  await sharp(mark)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'icon-192.png'));

  await sharp(mark)
    .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(outDir, 'favicon.png'));

  // Copy theme images
  fs.copyFileSync(
    'c:/projects/AarixaInsurance/finvestments/source_assets/theme_image_1.jpeg',
    path.join(outDir, 'finvestments-amfi-banner.jpg')
  );
  fs.copyFileSync(
    'c:/projects/AarixaInsurance/finvestments/source_assets/theme_image_2.jpeg',
    path.join(outDir, 'finvestments-global-presence.jpg')
  );

  console.log('Successfully prepared mark, icons, and theme assets!');
}

extractMark().catch(console.error);
