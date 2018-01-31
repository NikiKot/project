$(document).ready(function()  {

var table = $("#pixelCanvas");
var submitButton = $("#submitButton");


function makeGrid() {

  $("tr").remove();
  $("td").remove();

  var height= $("#inputHeight").val();
  var width = $("#inputWeight").val();



    for (var row=1; row<=height; row++) {

       table.append("<tr></tr>");

        for(var col=1; col<=width; col++){
            $("tr").last().append("<td></td>");
        };
    };

  $("#pixelCanvas").on("mousedown", "td", function ( ) {
    var color = $("#colorPicker").val();
    $(this).css("background-color", color);
    });

  $("#pixelCanvas").on("dblclick", "td", function() {
    $(this).css("background-color", "white");
  });

    return false;
};

submitButton.on("click", function (evt) {

  evt.preventDefault();
  makeGrid();

});
});
