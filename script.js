const images = document.querySelectorAll('#slider img'); // Select all the images in the slider
    let currentIndex = 0;  // Index to track the current image being shown

    // Function to show the image based on the currentIndex
    function showImage(index) {
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = 'none';  // Hide all images
        }
          images[index].style.display = 'block';  // Display the current image
    }

    // Initialize by showing the first image
    showImage(currentIndex);

    prevBtn.addEventListener('click', function() {
      let prevBtn= document.getElementById("prevBtn");
        currentIndex = (currentIndex - 1 + images.length) % images.length;  // Decrement index and loop
        showImage(currentIndex);  // Update the slider
    });

    // Event listener for the "Next" button
    nextBtn.addEventListener('click', function() {
      let nextBtn= document.getElementById("nextBtn");
        currentIndex = (currentIndex + 1) % images.length;  // Increment index and loop
        showImage(currentIndex);  // Update the slider
    });