// document.getElementById('arwL').onclick = sliderLeft;
// var left = 0;
// function sliderLeft() {
// 	var team-box = document.getElementById('team-box');
// 	left = left - 337;
// 	if(left<-1229){
// 		left=0;
// 	}
// team-box.style.left=left+'px';
// }


// document.getElementById('arwR').onclick = sliderRight;
// var right = 0;
// function sliderRight() {
// 	var team-box = document.getElementById('team-box');
// 	right = right - 337;
// 	if(right<-1229){
// 		right=0;
// 	}
// team-box.style.right=right+'px';
// }


let swiper = new Swiper('.swiper-container', {
    allowTouchMove: false,
    navigation: {
        nextEl: '#arwL',
        prevEl: '#arwR',
    }
});
