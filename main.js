let i = 0; //start point
let images = [];
let time = 5000;

//Image List
images[0] = 'img/book-covers/main/book1.jpg';
images[1] = 'img/book-covers/main/book2.jpg';
images[2] = 'img/book-covers/main/book3.jpg';
images[3] = 'img/book-covers/main/book4.jpg';

//Change Image

function changeImg() {
    document.slide.src = images[i];

    if(i < images.length - 1) {
        i++;
    } else {
        i = 0
    }

    setTimeout("changeImg()", time);

}

window.onload = changeImg;