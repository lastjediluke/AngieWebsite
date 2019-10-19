var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) 
{
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) 
{
  showSlides(slideIndex = n);
}


function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
isOpen = 0;
function myFunction() {
  if (!isOpen)
  {
    document.getElementById("myDropdown").classList.add("show");
    isOpen = 1;
    console.log("Open!");
  }
  
  else
  {
    document.getElementById("myDropdown").classList.remove("show");
    isOpen = 0;
    console.log("Closed!");
  }
  
}

// Close the dropdown menu if the user clicks outside of it

window.onclick = function(event) 
{
  if (!event.target.matches('.dropbtn')) 
  {
    if(isOpen)
    {
      document.getElementById("myDropdown").classList.remove("show");
      isOpen = 0;
      console.log("Closed!");
    }
    
  }
}