//code to run when document is ready
$(document).ready(function()  {

/*declaring variables
table:accessing DOM element #pixelCanvas
submitButton:accessing DOM element #submitButton
*/
var table = $("#pixelCanvas");
var submitButton = $("#submitButton");

//function
function makeGrid() {

  $("tr").remove(); //remove if there are already tr tags in table
  $("td").remove(); //remove if there are already td tags in table

  var height = $("#inputHeight").val(); //get table height by user input
  var width = $("#inputWeight").val(); //get table width by user input


    //for loop to get table rows
    for (var row=1; row<=height; row++) {
      
       table.append("<tr></tr>");//append <tr> tags to table
       //for loop to get table columns
        for(var col=1; col<=width; col++) {
            $("tr").last().append("<td></td>"); //append <td> tags to table
        };
    };
//start drawing when mousedown event is triggered
  $("#pixelCanvas").on("mousedown", "td", function ( ) {
    var color = $("#colorPicker").val(); //get color value bu user input
    $(this).css("background-color", color); //color current table cell
    });
//erase the color of the cell
  $("#pixelCanvas").on("dblclick", "td", function() {
    $(this).css("background-color", "white"); //make the color of the cell white again
  });

    return false;//if error
};
//call function when submitButton is clicked
submitButton.on("click", function (evt) {

  evt.preventDefault();
  makeGrid(); //call makeGrid

});
});
