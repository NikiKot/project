// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$(document).ready(function()  {

const table = $("#pixelCanvas");
const submitButton = $("#submitButton");


  function makeGrid() {

const heighting= $("#inputHeight").val();
const widthing = $("#inputWeight").val();



    for (var row=0; row<=heighting; row++) {
       $(table).append("<tr></tr>");
        for(var col=0; col<=widthing; col++){
            $(table).children().last().append("<td></td>");
        }
    }
    console.log(table);
};

submitButton.on("click", function (evt) {

    evt.preventDefault();
    makeGrid();
});
});
