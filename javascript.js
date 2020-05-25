// count = 0;
// startPos = 0;
// direction = 1;
// clicked = false;

// square = document.getElementById('square');


// function getMouseCoords(e, elementId) {
//     var e = e || window.evenet;
//     document.getElementById(elementId).innerHTML = e.clientX + ", " + e.clientY;
// }

// $(document).mousedown(function(e){
//     clicked = true;
//     target = e.clientX;
//     function horizontal() {
//         curr = square.getBoundingClientRect().x;
//         square.style.left = curr + 5 + "px";
//         if (curr >= target) {
//             clearInterval(id);
//             clicked = false;
//         }
//     }
//     id = setInterval(horizontal, 0.1);
//     // $("#square").css({left:(e.curr.top + 5), top:(curr.top)});
// });

// window.onload = function() {
//     count = 0
//     function callback() {
//             square.style.top = startPos + (5 * direction) + "px";
//             startPos += (5 * direction);
//             if (startPos >= $(window).height() - 45) {
//                 direction = -1
//             }
//             if (startPos < 0) {
//                 direction = 1
//             }

//     }
//     setInterval(callback, 0.001)
// }