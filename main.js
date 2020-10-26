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


//DROPDOWN MENU

//Toggle on user click between open and close content
function dropDown () {
    document.getElementById("dropDown").classList.toggle("open");
}

//Close dropdown if use clicks outside of target
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let dropDown = document.getElementById("dropDown");
            if (dropDown.classList.contains('open')) {
                dropDown.classList.remove('open');
            }
    }
}