var myButton = document.getElementById("btn")
var myTitle = document.getElementById("title")
var counter = 5

myButton.addEventListener("click", function(){

    counter += 7

    myButton.textContent = counter
})