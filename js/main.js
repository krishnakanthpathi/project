
// 
//  welcome photo changer
// 
document.addEventListener('DOMContentLoaded', function() {
    const images = ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg']; // List of images
    var contents = [
      "At Sproprise Services, we are committed to providing top-notch cleaning and facilities management solutions tailored to meet the unique needs of our clients.",
      "With a focus on safety, quality, and customer satisfaction, we deploy trained and groomed janitors equipped with the latest tools and technologies.",
      "Our goal is to create clean and inviting spaces that promote productivity and well-being for businesses, organizations, and residential communities alike.",
      "With years of experience and a dedication to excellence, we strive to be the preferred choice for all your cleaning and maintenance needs."
    ];

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
    setInterval(changeWelcomeContent,3000);
  });
