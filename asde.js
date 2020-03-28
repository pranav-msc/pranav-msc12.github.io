
$("button").on("mouseenter", function () {
	$(".img1").css("filter", "blur(5px)");
});

$("button").on("mouseleave", function () {
	$(".img1").css("filter", "blur(0)");
});
