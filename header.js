function parallax_height() {
    var scroll_top = $(this).scrollTop();
   // var sample_section_top = $(".grid").offset().top;
    var header_height = $(".sample-header").outerHeight();
    $(".grid").css({ margin_top: header_height }); //sets the grid startpoint to the header_height
    $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function () {
    parallax_height();
});
$(window).resize(function () {
    parallax_height();
});