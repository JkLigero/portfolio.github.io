var typed = new Typed(".auto_type", {
    strings: ["John Kenneth", "Ligero"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
})


let boxes = document.querySelectorAll(".box");

    window.onload = function(){
        setTimeout(() => {
            load_bars();
        }, 1000);
    }

    function load_bars(){
        boxes.forEach(box => {
            let line = box.querySelector(".line");
            let increasing_percentage = box.querySelector(".increasing_percentage");
            let total_percentage = box.querySelector(".total_percentage");
            
            let p = 0;
            let my_interval = setInterval(() => {
                p++;
                line.style.width = p + "%";
                increasing_percentage.innerHTML = p + "%";
                if(increasing_percentage.innerHTML == total_percentage.innerHTML){
                    clearInterval(my_interval);
                }
            }, 80);
        });
    }


    
    //carousel function
// Get the DOM elements for the image carousel
const wrapper = document.querySelector(".wrapper"),
  carousel = document.querySelector(".carousel"),
  images = document.querySelectorAll("img"),
  buttons = document.querySelectorAll(".button");

let imageIndex = 1,
  intervalId;

// Define function to start automatic image slider
const autoSlide = () => {
  // Start the slideshow by calling slideImage() every 2 seconds
  intervalId = setInterval(() => slideImage(++imageIndex), 3000);
};
// Call autoSlide function on page load
autoSlide();

// A function that updates the carousel display to show the specified image
const slideImage = () => {
  // Calculate the updated image index
  imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
  // Update the carousel display to show the specified image
  carousel.style.transform = `translate(-${imageIndex * 100}%)`;
};

// A function that updates the carousel display to show the next or previous image
const updateClick = (e) => {
  // Stop the automatic slideshow
  clearInterval(intervalId);
  // Calculate the updated image index based on the button clicked
  imageIndex += e.target.id === "next" ? 1 : -1;
  slideImage(imageIndex);
  // Restart the automatic slideshow
  autoSlide();
};

// Add event listeners to the navigation buttons
buttons.forEach((button) => button.addEventListener("click", updateClick));

// Add mouseover event listener to wrapper element to stop auto sliding
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));
// Add mouseleave event listener to wrapper element to start auto sliding again
wrapper.addEventListener("mouseleave", autoSlide);