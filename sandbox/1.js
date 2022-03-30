$('.back').show();
$(".fnote" ).each(function( index ) {
  $(this).attr('id','fnote' + index).attr('href','#fn' + index);
});
$("#footnotes li" ).each(function( index ) {
 var $this = $(this);
 $this.attr('id','fn' + index);
 $('.back',$this).attr('href','#fnote' + index);
});
