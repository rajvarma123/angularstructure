$(document).ready(function(){

	/* default js*/
	$(document).click( function(){
   		$('.cw-notifications').slideUp();
		$('.cw-setting').slideUp();
  	});

 	$('.cw-notifications, .cw-setting, .cw-main-menu').click( function(e){
		e.stopPropagation();
 	});
 
  	$('.mobileHover').bind('touchstart touchend', function(e) {
        $(this).toggleClass('mHover');
    });
 
	/* end default js */
	/*start main-menu toggle */
	$('.menu-icon').click(function(e){
		e.stopPropagation();
		$('.cw-main-menu').slideToggle();
		$('.cw-setting').slideUp();
		$('.cw-notifications').slideUp();
		$('.cw-submenu').removeClass('cw-sub-menu');
	
	});

   
	$('.cw-main-menu li').click(function(e){
		//alert('hi');
		//
		e.stopPropagation();
		$(this).siblings().children('ul').removeClass('cw-sub-menu');
		$(this).siblings().removeClass('active');
		$(this).children('ul').toggleClass('cw-sub-menu');
		$(this).addClass('active');
		//return false;
		
	});

/*end main-menu toggle */

/*for blog listing filtering */
$('#filters li').click(function(e){
	$('#filters li span').removeClass('active');
  	$(this).children('span').addClass('active');
});
/*end blog listing toggle */

/*profile popup setting */

/*cw-main-menu close when screen resolution above 768px*/
if ($(window).width() > 767) {
$('.cw-profile-setting').click(function(e){
	e.stopPropagation();
  	$('.cw-main-menu').slideUp();
});
$('.cw-noti').click(function(e){
	e.stopPropagation();
  	$('.cw-main-menu').slideUp();
});
}

$('.cw-profile-setting').click(function(e){
	e.stopPropagation();
  	$('.cw-setting').slideToggle();
	$('.cw-main-menu').removeClass('active');
	$('.menu-toggle').removeClass('active');
	$('.cw-main-menu').removeClass('menu-add');
	$('.cw-notifications').slideUp();
});

$('.cw-noti').click(function(e){
	e.stopPropagation();
	$('.cw-notifications').slideToggle();
	$('.cw-main-menu').removeClass('active');
	$('.menu-toggle').removeClass('active');
	$('.cw-main-menu').removeClass('menu-add');
	$('.cw-setting').slideUp();
});

/*login slidetoggle in responsive*/
	$('.login-toggle').click(function(){
		$('.form-group').slideToggle();
		$('.cw-main-menu').removeClass('active');
		$('.menu-toggle').removeClass('active');
		$('.cw-main-menu').removeClass('menu-add');
		$('.cw-setting').slideUp();
		$('.cw-noti').slideUp();
	});
	
	$('.profile-menu').click(function(){
		$('.profile-listing').slideToggle();
	});

/*end login slidetoggle in responsive*/ 
	
/*start responsive menu*/
	(function() {

    "use strict";

    var toggles = document.querySelectorAll(".menu-toggle");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();
        (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
      });
    }

  })();
  
  
   $('.menu-toggle').click(function(){
	 //e.stopPropagation();  
  	$('.cw-main-menu').toggleClass('menu-add');
  	//$('.form-group').slideUp();
	$('.cw-setting').slideUp();
	$('.cw-notifications').slideUp();

	
 });
/*end responsive menu*/


/*form skip option in one form page */
$('.btn-imports').click(function(){
	$('#import-submit').show();
	$('#import-skip').hide();
});

$('.btn-skip').click(function(){
	$('.data-import').hide();
});
/*end form skip option in one form page */

/*open close footer js */
	
		$('.open-close').click(function(){
			$('.footer').toggleClass('footer-open');
            $('.footer').removeClass('footer-close');

		});
		
		$(function(){
          //Keep track of last scroll
          var lastScroll = 0;
          $(window).scroll(function(event){
				//alert($(document).scrollTop());
              //Sets the current scroll position
              var st = $(window).scrollTop();

              //Determines up-or-down scrolling
              if ($(window).scrollTop() + $(window).height() > $(document).height() - 1){
                 $('.footer').addClass('footer-open');
				 $('.footer').removeClass('footer-close');
              } 
			  else
			  {
				$(".footer").addClass('footer-close');
				$(".footer").removeClass('footer-open');
			  }
              if(st == 0){
                $(".footer").addClass('footer-close');
				$(".footer").removeClass('footer-open');
              }
			  
              //Updates scroll position
              lastScroll = st;
          });
        });
/*end footer js*/

/*responsive menu js*/
$('.about-us').click(function(){
		$('#about-us-sub').toggleClass('menu-sub-add');
		$('#about').toggleClass('left-ar-about');
		$('#career-sub').removeClass('menu-sub-add');
		$('#crer').removeClass('left-ar-crer');

});
$('.cw-career').click(function(){
		$('#career-sub').toggleClass('menu-sub-add');
		$('#about-us-sub').removeClass('menu-sub-add');
		$('#about').removeClass('left-ar-about');
		//$('#crer').toggleClass('left-ar-crer');

});

/*end responisve menu js */

/*contact us page address */
$('body').on('change','#office-location',function(){
		//alert($(this).val());
		$('.map-show').html('');
		var add = $(this).val();
		$('.map-show').html($('#'+add).html());

});

/*end contact us page address*/

/*onload popup for profile page */
$('#main-popup').css("display","block");

$('#video-invitation').click(function(){
	$('#video-popup').fadeIn(500);
})

$('.popup-close').click(function(){
	$('#main-popup').hide();
	$('#video-popup').fadeOut(500);
})


/*end onload popup for profile page */

/* css tabbing for about us page */ 
$(".tab-menu a").click(function(event) {
   event.preventDefault();
   
   $(this).parent().addClass("current");
   $(this).parent().siblings().removeClass("current");
   var tab = $(this).attr("href");

   $(".tab-show").not(tab).css("display", "none");
   $(tab).fadeIn();

   var id = tab.split('#');
   $('.tab-show ').removeClass("current-img");
   $('#'+id[1]).addClass("current-img");
	
	
});
/*end css tabing for about us page */

/* css tabbing for fund seeker apply for page */ 
$(".loan-menu a").click(function(event) {
   event.preventDefault();
   
   $(this).parent().addClass("current");
   $(this).parent().siblings().removeClass("current");
   var tab = $(this).attr("href");

   $(".menu-show").not(tab).css("display", "none");
   $(tab).fadeIn();

   var id = tab.split('#');
   //$('.menu-show').removeClass("current-tab");
   $('.listing-show').removeClass("current-list");
   $('#'+id[1]).addClass("current-tab");
   
   /*apply for listing */
   $(".listing-show").not(tab).css("display", "none");
   $(tab).fadeIn();

   var id = tab.split('#');
   $('.listing-show').removeClass("current-list");
   // $('.listing-show').removeClass("current-tab");
   $('#'+id[1]).addClass("current-list");
	
	
});

$(".tab-loans li").click(function(event){
	$(this).siblings().removeClass("tab-selected");
	$(this).addClass("tab-selected");	
})
/*end css tabing for fund seeker apply for page */


/*start btn-add-new js */
$("#retailer").click(function(event){
	 event.preventDefault();
	$("#tab-listing").toggleClass("tab-listing-show");
});

$("#corporate").click(function(event){
	 event.preventDefault();
	$("#tab-listing-corporate").toggleClass("tab-listing-show");
});

/*start custom file upload code */
$('.custom-upload input[type=file]').change(function(){
    $(this).next().find('input').val($(this).val());
});
/*end custom file upload code */

/*start contianer sec*/
function setSizes() {
   var containerHeight = $(".landing-cont").height();
   $(".landing-cont").height(containerHeight - 200);
}		

/*custom code for rating display */
$(':radio').change(
  function(){
    $('.choice').text( this.value + ' stars' );
  } 
)
/*end custom code for rating */

/*latest news js for fund seeker dashboard page */
 $(".owl-carousel").each(function() {
   var $this = $(this);
   $this.owlCarousel({
  items :1, //10 items above 1000px browser width
  itemsDesktopSmall : [1024,1], // betweem 900px and 601px
  itemsDesktop:[1366,1],
  itemsTablet: [767,1], //2 items between 600 and 0
  itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
  
  });

   // Custom Navigation Events
   $this.parent().find(".next").click(function(){
  $this.trigger('owl.next');
   });
   $this.parent().find(".prev").click(function(){
  $this.trigger('owl.prev');
   });
 });

/*end carosuel slide for fund seekr profile page for latest news*/

/*owl-carousel two use only about us page */
 
 $(".owl-carousel-two").each(function() {
   var $this = $(this);
   $this.owlCarousel({
  items :7, //10 items above 1000px browser width
  itemsDesktopSmall : [1024,4], // betweem 900px and 601px
  itemsDesktop:[1366,7],
  itemsTablet: [767,3], //2 items between 600 and 0
  itemsMobile : [480,2], // itemsMobile disabled - inherit from itemsTablet option
  
  });
   // Custom Navigation Events
   $this.parent().find(".next").click(function(){
  $this.trigger('owl.next');
   });
   $this.parent().find(".prev").click(function(){
  $this.trigger('owl.prev');
   });
 });
/*end carsousel slider js */

/* start post remarks in fund provider self proposal page */
//$('.post-remarks').click(function(){
//		
//		var d = new Date();
//		var curr_date = document.getElementById("date-remarks").innerHTML = d;
//		
//		var txt = $(".profile-remarks .form-group input").val();
//		$(".comments-remarks p").html(txt);
//		$(".comments-remarks span").html(curr_date);
//		
//	})


/*fund profile provider menu*/
$('.cw-provider-home-res-left h4').click(function(){
	$('.cw-provider-home-left').toggleClass('menu-res-prov');
	$('.res-overlay').fadeToggle();
	});
/* end post remarks in fund provider self proposal page */

/* start seetings editable js */
$('.edit-details').click(function(){
		 
		 $('.edit-details').fadeOut();
		 $(this).parent().siblings('.setting-editable').hide();
		 
		 $(this).parent().siblings('.frm-setting-show').fadeIn();
		 
		 var text = $('.editable').text();
		 var input = $('<input id="attribute" type="text" value="' + text + '" />')
		 
		 $('.editable').parent().next('.frm-setting-show').children('.setting-editable').append(input);
		 
		 var text = $('.number').text();
		 var input = $('<input id="attribute" type="text" value="' + text + '" />')
		 
		 $('.number').parent().next('.frm-setting-show').children('.setting-editable').append(input);
		 
		 
		/* $(this).parent().parent().parent().parent().addClass('edit-hide');
	     $(this).parent().parent().parent().parent().siblings().removeClass('edit-hide');*/
});

/* end seetings editable js */

});

/*start custom file uploaded on image show in browser in one-form-income/html page */
	/*for salary slip */
     function salaryUrl(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#salary')
                        .attr('src', e.target.result)
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
	
	/*for pan card */
     function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                };
                reader.readAsDataURL(input.files[0]);
            }
        }
/*end custom file uploaded on image show in browser in one-form-income/html page */

/*start fund provider details collpase expand code */
$(function(){
	  $(".cw-desc p").each(function(i){
		  
		  
		value=$(".cw-desc p").text();
		len=$(this).text().length;
		
		if(len>10)
		{
		  $(this).text($(this).text().substr(0,332)+'...').append("<a href='javascript:void(0)' id='expand'>Expand</a>");
		}
		
		$(document).on("click","#expand",function(){
			$('.cw-desc p').html(value).append("<a href='javascript:void(0)' id='collapse'>&nbsp; Collapse</a>")
 		
		});
		
		$(document).on("click","#collapse",function(){
			$('.cw-desc p').text($('.cw-desc p').text().substr(0,332)+'...').append("<a href='javascript:void(0)' id='expand'>Expand</a>");
		});
		
	  });
	});
/*end fund provider details collpase expand code */	

