var nextButton = document.getElementById('next_button');
var backButton = document.getElementById('back_button');
var aboutSlider = document.getElementById('about_slider');

function moveLeft_Slide_1() {
    aboutSlider.style.transform = "translateX(-700px)";
    console.log('1st Slide');
    aboutSlider.style.transition = "0.5s";
}

function moveLeft_Slide_2() {
    aboutSlider.style.transform = "translateX(-1400px)";
    console.log('2nd Slide');
    aboutSlider.style.transition = "0.5s";
}

function slide() {
  let count = 0
  if (count == 0) {
    moveLeft_Slide_1()
    count++
    console.log(count);
  } else if (count == 1) {
    moveLeft_Slide_2()
    count++
    console.log(count);
  }


}


function moveRight() {
  aboutSlider.style.transform = "translateX(0px)";
  aboutSlider.style.transition = "0.5s";
}
