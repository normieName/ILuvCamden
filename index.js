
/*
function funcClick() {
    let x = document.getElementById("p1");
    // x.innerHTML = "Hello World";
    // x.innerHTML = Date();

    let array = [1,2,3,4,5,6];
    let text = "";
    for (let i = 0; i < array.length; i++) {
        text += array[i] + "<br>";
    }
    x.innerHTML = text;
}
*/

function yesClick() {
    let x = document.getElementById("p1");
    x.innerHTML = "Yippie!!!!! I love you! I love you! I love you! I love you! I love you! ";
    let img = document.getElementById("image");
    img.src = "happy.jpg";
}

function noClick() {
    let x = document.getElementById("p1");
    x.innerHTML = "wow...";
    let img = document.getElementById("image");
    img.src = "sad.jpg";
}