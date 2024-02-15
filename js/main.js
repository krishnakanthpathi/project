
// 
//  welcome photo changer
// 
document.addEventListener('DOMContentLoaded', function() {
    const images = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg']; // List of images
    const contents = [
      "Where your memories come to life through the art of personalized photo albums. At Albumize, we believe that every moment is worth treasuring, and what better way to cherish your memories than by creating custom photo albums that tell your unique story?",
      "Whether it's reliving the magic of your wedding day, celebrating family milestones, or capturing the adventure of your travels, Albumize offers you the tools to transform your favorite moments into beautifully crafted keepsakes.",
      "With our easy-to-use platform, you have the freedom to design your own photo albums, selecting from a range of cover materials, sizes, and layouts to suit your style and preferences. Our commitment to quality ensures that each album is meticulously crafted with the utmost care and attention to detail. Join us on this journey of preserving your memories, one page at a time. Start creating your personalized photo album today and let Albumize help you turn your cherished moments into timeless treasures."
    ]; // List of corresponding content

    let index = 0; // Initialize index

    function changeWelcomeContent() {
      // Change image
      const welcomeImage = document.querySelector('.welcome-image');
      welcomeImage.src = images[index];
      
      // Change content
      const welcomeContent = document.getElementById('welcome-content');
      welcomeContent.textContent = contents[index];

      // Increment index and loop back to 0 if reached the end
      index = (index + 1) % images.length;
    }

    // Initial call
    changeWelcomeContent();

    // Set interval to change content every 2 seconds
    setInterval(changeWelcomeContent,5000);
  });
// 
// preview 
// 

function previewImage(event) {
    const reader = new FileReader();
    reader.onload = function() {
      const imagePreview = document.getElementById('imagePreview');
      imagePreview.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  function resizeImage() {
    // Add functionality for resizing image here
    console.log('Resizing image...');
  }

  function changeOrientation() {
    // Add functionality for changing orientation here
    console.log('Changing orientation...');
  }



