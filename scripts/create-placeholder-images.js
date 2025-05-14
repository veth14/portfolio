const fs = require('fs');
const path = require('path');

// Define the directory where certificate images should be stored
const certificatesDir = path.join(__dirname, '../public/images/certificates');

// Create the directory structure if it doesn't exist
if (!fs.existsSync(certificatesDir)) {
  console.log('Creating certificates directory...');
  fs.mkdirSync(certificatesDir, { recursive: true });
}

// List of certificate image filenames we need
const requiredImages = [
  'web-dev.jpg',
  'react.jpg',
  'design.jpg',
  'javascript.jpg',
  'career.jpg',
  'tailwind.jpg',
  'react-native.jpg',
  'security.jpg',
  'ai-ml.jpg',
  'mongodb.jpg',
  'devops.jpg',
  'blockchain.jpg',
  'ux-research.jpg',
  'sustainable-tech.jpg',
  'typescript.jpg'
];

// Check each required image and create a placeholder if it doesn't exist
requiredImages.forEach(imageName => {
  const imagePath = path.join(certificatesDir, imageName);
  
  if (!fs.existsSync(imagePath)) {
    console.log(`Creating placeholder for ${imageName}...`);
    
    // Create a simple HTML with the image name that we'll convert to an image
    // For simplicity, we'll just create a text file with instructions
    const placeholderPath = path.join(certificatesDir, imageName);
    
    // Create an empty file as a placeholder
    fs.writeFileSync(placeholderPath, '');
    
    console.log(`Created placeholder for ${imageName} at ${placeholderPath}`);
    console.log(`NOTE: Replace this with a real image of size 800x600 pixels`);
  } else {
    console.log(`Image ${imageName} already exists.`);
  }
});

console.log('\nPlaceholder creation complete!');
console.log('Please replace the placeholder files with actual certificate/seminar images.');
console.log('Recommended image size: 800x600 pixels');
