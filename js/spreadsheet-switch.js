// Buttons for toggling between Google Sheets and Microsoft Excel
var sheetsButton = document.getElementById("google-sheets");
var excelButton = document.getElementById("microsoft-excel");
sheetsButton.disabled=true;
excelButton.disabled=false;

var sheets = function() {
    sheetsButton.disabled=true;
    excelButton.disabled=false;
    document.getElementById("sheets-video").style.display = "block";
    document.getElementById("excel-video").style.display = "none";

}

var excel = function() {
    sheetsButton.disabled=false;
    excelButton.disabled=true;
    document.getElementById("sheets-video").style.display = "none";
    document.getElementById("excel-video").style.display = "block";;

}