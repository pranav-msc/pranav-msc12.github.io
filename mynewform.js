// JavaScript source code
$("input").on("focus", function () {
    $("img").css("filter", "blur(5px)");
   
});
$("input").on("blur", function () {
    $("img").css("filter", "blur(0)");

});
