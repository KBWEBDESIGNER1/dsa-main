const fs = require('fs');
const { createCanvas } = require('canvas');

// List of icon sizes to generate
const sizes = [72, 96, 128, 144, 152, 192, 384, 512];

// Function to create a simple DSA icon
function createIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Fill background
    ctx.fillStyle = '#3498db';
    ctx.fillRect(0, 0, size, size);

    // Draw text
    const fontSize = Math.floor(size / 4);
    ctx.font = `bold ${fontSize}px Arial`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('DSA', size / 2, size / 2);

    // Save image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(`public/icons/icon-${size}x${size}.png`, buffer);
    console.log(`Created icon-${size}x${size}.png`);
}

// Create the icons directory if it doesn't exist
if (!fs.existsSync('public/icons')) {
    fs.mkdirSync('public/icons', { recursive: true });
}

// Generate all icons
sizes.forEach(size => createIcon(size));

console.log('All icons created successfully!'); 