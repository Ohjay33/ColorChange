function colorchange() {
    var action = document.querySelector("body")
    action.style.backgroundColor = "green"
    console.log("you did it!");
}


// function randomColor() {
//     return '#' + Math.random().toString(16).slice(2, 8);
// };

// $("#button").on("click", function () {
//     $('body').css('background', randomColor());
// });


 
function setBg () {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    console.log("Done! You did it!!!");
    // color.innerHTML = "#" + randomColor;
}









