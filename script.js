function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
  }
}

let boxes = document.querySelector(".togg");

let BOX = document.querySelectorAll(".box");
let Button = document.querySelector(".pbtn");

Button.addEventListener("click", () => {
  console.log("Working");
  boxes.classList.toggle("hide");
});


// slider
let slideIndex = 0;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slide');
    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
}

// Initial display of the first slide
showSlides(slideIndex);



// customize
function updateText() {
  const text = document.getElementById('text').value;
  document.getElementById('text-preview').textContent = text;
}

function updateFont() {
  const font = document.getElementById('font').value;
  document.getElementById('text-preview').style.fontFamily = font;
}

function updateColor() {
  const color = document.getElementById('color').value;
  document.getElementById('text-preview').style.color = color;
}

function updateFontSize() {
  const fontSize = document.getElementById('font-size').value;
  document.getElementById('text-preview').style.fontSize = fontSize + 'px';
}

function updateAlignment() {
  const alignment = document.getElementById('alignment').value;
  document.getElementById('text-preview').style.textAlign = alignment;
}

function updateLetterSpacing() {
  const spacing = document.getElementById('letter-spacing').value;
  document.getElementById('text-preview').style.letterSpacing = spacing + 'px';
}

function updateLineSpacing() {
  const spacing = document.getElementById('line-spacing').value;
  document.getElementById('text-preview').style.lineHeight = spacing + 'px';
}
