$(function(){
  $('.bk-list > li').each(function(){
    li = $(this);
    image = $(li.find('.bk-cover > img:first')[0]);

    var width, height;
    $("<img/>") // Make in memory copy of image to avoid css issues
      .attr("src", $(image).attr("src"))
      .load(function() {
          width = this.width;   // Note: $(this).width() will not
          height = this.height; // work for in memory images.

          li.css('width', width);

          li.find('.bk-book').css('width', width);
          li.find('.bk-book').css('height', height);

          li.find('.bk-left').css('height', height);
          li.find('.bk-left h2').css('width', width);

          li.find('.bk-right').css('height', height-5);
          li.find('.bk-right').css('-webkit-transform', 'rotate3d(0,1,0,90deg) translate3d(0,0,'+(width-5)+'px)');
          li.find('.bk-right').css('-moz-transform', 'rotate3d(0,1,0,90deg) translate3d(0,0,'+(width-5)+'px)');
          li.find('.bk-right').css('transform', 'rotate3d(0,1,0,90deg) translate3d(0,0,'+(width-5)+'px)');
      });
  })
})