

  
$(".next-1").click(function () {
    $(".indic-1").removeClass("active-indicator");
    $(".indic-2").addClass("active-indicator");
    $(".indic-3").removeClass("active-indicator");

   
    $(".form-1").fadeOut("fast");
    $(".form-2").fadeIn("fast");
    $(".form-3").fadeOut("fast");
});



$(".next-2").click(function () {
    $(".indic-1").removeClass("active-indicator");
    $(".indic-3").addClass("active-indicator");
    $(".indic-2").removeClass("active-indicator");

   
    $(".form-1").fadeOut("fast");
    $(".form-2").fadeOut("fast");
    $(".form-3").fadeIn("fast");
});


$(".indic-1").click(function () {
    $(".indic-2").removeClass("active-indicator");
    $(".indic-1").addClass("active-indicator");
    $(".indic-3").removeClass("active-indicator");

   
    $(".form-2").fadeOut("fast");
    $(".form-1").fadeIn("fast");
    $(".form-3").fadeOut("fast");
});

$(".indic-2").click(function () {
    $(".indic-1").removeClass("active-indicator");
    $(".indic-2").addClass("active-indicator");
    $(".indic-3").removeClass("active-indicator");

   
    $(".form-1").fadeOut("fast");
    $(".form-2").fadeIn("fast");
    $(".form-3").fadeOut("fast");
});


$(".indic-3").click(function () {
    $(".indic-1").removeClass("active-indicator");
    $(".indic-3").addClass("active-indicator");
    $(".indic-2").removeClass("active-indicator");

   
    $(".form-1").fadeOut("fast");
    $(".form-3").fadeIn("fast");
    $(".form-2").fadeOut("fast");
});



$(".male").click(function () {
    $(".female").removeClass("active-gender");
    $(".male").addClass("active-gender");
});




$(".female").click(function () {
    $(".male").removeClass("active-gender");
    $(".female").addClass("active-gender");
});



$(".single").click(function () {
    $(".single").addClass("active-pick");
    $(".married").removeClass("active-pick");
    $(".others").removeClass("active-pick");
});



$(".married").click(function () {
    $(".single").removeClass("active-pick");
    $(".married").addClass("active-pick");
    $(".others").removeClass("active-pick");
});


$(".others").click(function () {
    $(".single").removeClass("active-pick");
    $(".married").removeClass("active-pick");
    $(".others").addClass("active-pick");
});



$(".monthly").click(function () {
    $(".monthly").addClass("active-pick");
    $(".weekly").removeClass("active-pick");
    $(".daily").removeClass("active-pick");
});


$(".weekly").click(function () {
    $(".monthly").removeClass("active-pick");
    $(".weekly").addClass("active-pick");
    $(".daily").removeClass("active-pick");
});


$(".daily").click(function () {
    $(".monthly").removeClass("active-pick");
    $(".weekly").removeClass("active-pick");
    $(".daily").addClass("active-pick");
});



$(".employed").click(function () {
    $(".employed").addClass("active-pick");
    $(".self-employed").removeClass("active-pick");
    $(".others2").removeClass("active-pick");
});


$(".self-employed").click(function () {
    $(".employed").removeClass("active-pick");
    $(".self-employed").addClass("active-pick");
    $(".others2").removeClass("active-pick");
});



$(".others2").click(function () {
    $(".employed").removeClass("active-pick");
    $(".self-employed").removeClass("active-pick");
    $(".others2").addClass("active-pick");
});


var up = document.getElementById('GFG_UP');
var down = document.getElementById('GFG_DOWN');
  
up.innerHTML = "Click on the button to see"
            + " if any file is selected";
  
function GFG_Fun() {
    if ($('#file')[0].files.length === 0) {
        down.innerHTML = "No files selected";
    } else {
        down.innerHTML = "file is selected";
    }
}