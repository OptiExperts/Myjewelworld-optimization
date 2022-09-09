/*
* Broadcast Theme
* Use this file to add custom Javascript to Broadcast.  Keeping your custom
* Javascript in this fill will make it easier to update Broadcast. In order
* to use this file you will need to open layout/theme.liquid and uncomment
* the custom.js script import line near the bottom of the file.
*/

(function() {
// Add custom code below this line
  
  
//----sticky category click mobile menu js----//
 $( ".mb-category a" ).on( "click", function(e) {
   e.preventDefault();
   $(".header__mobile__hamburger").trigger("click");
 });

  $('.mb-search').click(function(e){
    e.preventDefault();
  $('#search-popdown').toggleClass('is-visible');
  });
//-----custom Engraving option js-----//
  
  $( "body" ).on( "click",'#custom-engraving-checkbox', function() {
//    $("#Engraving Text-0-1").trigger("click");
    
    $('input[name="properties[Engraving]"]').trigger('click');
    $('input[name="properties[Engraving]"]').toggleClass('checked');
    $('input[name="properties[Engraving]"]').prop('checked','checked');
    
 });
  
//-----product specifications accordian align js-----//
  $(document).ready(function(){
    $('.product-desc-acc').click(function(){
    	$(this).parent().find('.accordion-content').slideToggle('slow');
    });
    
 //------Mobile menu accordian js----//
    $('.mobile-menu-acc').click(function(){
      $(this).next().toggleClass('is-visible_menu');
      $(this).toggleClass('active_menu');
    });
    
  }); 
  
///Sticky Header js-------------//  
  $(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 24) {
    $('.homepage-header-bottom-border .header-bottom-border').addClass('remove-border');
  } else {
    $('.homepage-header-bottom-border .header-bottom-border').removeClass('remove-border');
  }
});
//------Sticky ring size popout & sticky add to cart js----//  
//   $( ".sticky-add-to-cart" ).on( "click", function(e) {
//      e.preventDefault();
//    $(".product__wrapper .product-form-atc").trigger("click");
//  });
  
  // ^^ Keep your scripts inside this IIFE function call to 
  // avoid leaking your variables into the global scope.
//   $('.cart-drawer-recommended').slick({  
//     	speed: 900,
//     	arrows: true,
//    		slidesToScroll: 1,
//   		slidesToShow: 2,
//      	infinite: true,
//    		prevArrow: '<button class="cstm-slick-prev"><i class="fa fa-angle-left"></i></button>',
//    		nextArrow: '<button class="cstm-slick-next"><i class="fa fa-angle-right"></i></button>'
// });
})();




