$(document).ready(function(){
/*for preview screen */
//$(window).load(function(){
//	$('body').addClass('on-load-gray-cycle');
//});
/*code for demo*/
$('.on-load-gray-cycle .cw-setting-submenu.no-gutter.preview-srn > li').mouseover(function(){
	$(this).addClass('active');
})
$('.on-load-gray-cycle .top-form-text > li').mouseover(function(){
	$('.on-load-gray-cycle .top-form-text > li.active').removeClass('active');
})
$('.on-load-gray-cycle .hover-graph').mouseover(function(){
	$('.on-load-gray-cycle .top-form-text > li.active').removeClass('active');
})
$('.on-load-gray-cycle .recent-viewre-list').mouseover(function(){
	$('.on-load-gray-cycle .service-ps .profile-listing > li').removeClass('active');
})
$('.on-load-gray-cycle .service-ps .profile-listing > li').mouseover(function(){
	$(this).removeClass('active');
})
$('.on-load-gray-cycle .cw-gutter .profile-about.preview-screen-title').mouseover(function(){
	$('.on-load-gray-cycle .service-ps .profile-listing > li').removeClass('active');
})
$('.on-load-gray-cycle .cw-setting-submenu.no-gutter.preview-srn > li').mouseout(function(){
	$(this).removeClass('active');
})
$('.on-load-gray-cycle .recent-viewre-list').mouseover(function(){
	$('.on-load-gray-cycle .cw-setting-submenu.no-gutter.preview-srn > li').removeClass('active');
})
$('.on-load-gray-cycle .cw-setting-submenu > li:first-child').mouseover(function(){
	$('.on-load-gray-cycle .cw-setting-submenu.no-gutter.preview-srn > li').removeClass('active');
})
$('.profile-right.loan-news.preview-news').mouseover(function(){
	$('.on-load-gray-cycle .cw-setting-submenu.no-gutter.preview-srn > li').removeClass('active');
})

$('#isLeftAdd').click(function(){
		$('#itsLeftAlign li.active').prependTo('#itsRightAlign').removeClass('active');
 });

$('#isRightAdd').click(function(){
		$('#itsRightAlign li.active').prependTo('#itsLeftAlign').removeClass('active');
	
	});
$('#isLeftAdd-Sec').click(function(){
		$('#itsLeftAlign-sec li.active').prependTo('#itsRightAlign-sec').removeClass('active');
	});

$('#isRightAdd-Sec').click(function(){
		$('#itsRightAlign-sec li.active').prependTo('#itsLeftAlign-sec').removeClass('active');
	});

$('#isLeftAdd-Search').click(function(){
		$('#itsLeftAlign-search li.active').prependTo('#itsRightAlign-search').removeClass('active');
	});

$('#isRightAdd-Search').click(function(){
		$('#itsRightAlign-search li.active').prependTo('#itsLeftAlign-search').removeClass('active');
	});


$('#isLeftAdd-Country').click(function(){
		$('#itsLeftAlign-Country li.active').prependTo('#itsRightAlign-Country').removeClass('active');
 });

$('#isRightAdd-Country').click(function(){
		$('#itsRightAlign-Country li.active').prependTo('#itsLeftAlign-Country').removeClass('active');
	
	});
$('#isLeftAdd-State').click(function(){
		$('#itsLeftAlign-State li.active').prependTo('#itsRightAlign-State').removeClass('active');
	});

$('#isRightAdd-State').click(function(){
		$('#itsRightAlign-State li.active').prependTo('#itsLeftAlign-State').removeClass('active');
	});

$('.left-align li').click(function(){
	$(this).toggleClass('active');	
	})

$('.right-align li').click(function(){
	$(this).toggleClass('active');	
	})
	
//$(document).on('dblclick','#itsLeftAlign li',function(){
//	$(this).prependTo('#itsRightAlign');
//	});
//
//$(document).on('dblclick','#itsRightAlign li',function(){
//	$(this).prependTo('#itsLeftAlign');
//	});
//
//$(document).on('dblclick','#itsLeftAlign-sec li',function(){
//	$(this).prependTo('#itsRightAlign-sec');
//	});
//
//$(document).on('dblclick','#itsRightAlign-sec li',function(){
//	$(this).prependTo('#itsLeftAlign-sec');
//	});
/*code for custom js*/
	
/*start one form section */	
$('#next-btn').click(function(){

	if ($('#bio-data').val().length === 0)
	{
		$('#bio-data').addClass('required');
		//return false; 
	}
	
	if ($('#email').val().length === 0)
	{
		$('#email').addClass('required');
		//return false; 
	}
	
	else
	{
		if ($('#email').val().length >= 1)
		{
			$('#email').removeClass('required');
			//return false; 
		}
		if ($('#bio-data').val().length >= 1)
		{
			$('#bio-data').removeClass('required');
			//return false; 
		}
	}
	
})

/*end one-form section */
/*start landing form */
$('#login-here').fadeOut(5);

$('#fg-password').click(function(){
	$('#cw-login').css('display','none');
	$('.landing-right.cw-landing-form > a').css('display','none')
	$('#forgot-password').fadeIn(500);
	$('#login-here').fadeIn(10);

});

$('#login-here').click(function(){
	$('#forgot-password').css('display','none');
	$('.landing-right.cw-landing-form > a').css('display','block')
	$('#cw-login').fadeIn(500);
	$('#login-here').fadeOut(10);

});
//  $('#prof-tab').scrollTabs();
	/* default js*/
	$(document).click( function(){
   		$('#notification').slideUp();
		$('.cw-setting').slideUp();
		$('#total-request').slideUp();
  	});

 	$('#notification, #total-request, .cw-setting, .cw-main-menu').click( function(e){
		e.stopPropagation();
 	});
 
  	$('.mobileHover').bind('touchstart touchend', function(e) {
        $(this).toggleClass('mHover');
    });
 
	/* end default js */
	/*start main-menu toggle */
	$('.menu-icon').click(function(e){
		e.stopPropagation();
		$('.menu-arrow').toggle(500);
		$('.cw-main-menu').slideToggle();
		$('.cw-setting').slideUp();
		$('#notification').slideUp();
		$('#total-request').slideUp();
		$('.cw-submenu').removeClass('cw-sub-menu');
	
	});

   
	$('.cw-main-menu li').click(function(e){
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

$('ul.left-side-search > li').on('mouseover mouseout', function () {
        $('.gray-overlay').toggleClass('gray-cycle');
    });
/*end blog listing toggle */

/*profile popup setting */

/* fund provider self search screen open in tablet device to mobile*/
if ($(window).width() < 1025) {

$('.cw-search-left ul > li').click(function(e){
	e.stopPropagation();
	$(this).siblings().find('.common-hover').fadeOut();	
	$(this).children('.common-hover').fadeIn();
	
	$(this).siblings().find('.optionsform').fadeOut();	
	$(this).children('.optionsform').fadeIn();	
});

$('.cw-search-left ul > li').bind( "touchstart", function(e){
	e.stopPropagation();
	$(this).siblings().find('.common-hover').fadeOut();	
	$(this).children('.common-hover').fadeIn();
	
	$(this).siblings().find('.optionsform').fadeOut();	
	$(this).children('.optionsform').fadeIn();	
});

$(document).bind( "touchstart",function(e){
	e.stopPropagation();
	$('.cw-search-left ul > li').children('.common-hover').fadeOut();
	$('.cw-search-left ul > li').children('.optionsform').fadeOut();
});


$(document).click(function(e){
	e.stopPropagation();
	$('.cw-search-left ul > li').children('.common-hover').fadeOut();
	$('.cw-search-left ul > li').children('.optionsform').fadeOut();
});

}

/*cw-main-menu close when screen resolution above 768px*/
if ($(window).width() < 767) {


$('.about-profile .cw-desc h4').click(function(){
   $(this).next().slideToggle();
   
});

//$('.cw-search-left ul > li').click(function(e){
//	e.stopPropagation();
//	$(this).siblings().find('.common-hover').fadeOut();	
//	$(this).children('.common-hover').fadeIn();
//	
//	$(this).siblings().find('.optionsform').fadeOut();	
//	$(this).children('.optionsform').fadeIn();	
//});
//
//$('.cw-search-left ul > li').bind( "touchstart", function(e){
//	e.stopPropagation();
//	$(this).siblings().find('.common-hover').fadeOut();	
//	$(this).children('.common-hover').fadeIn();
//	
//	$(this).siblings().find('.optionsform').fadeOut();	
//	$(this).children('.optionsform').fadeIn();	
//});
//
//$(document).bind( "touchstart",function(e){
//	e.stopPropagation();
//	$('.cw-search-left ul > li').children('.common-hover').fadeOut();
//	$('.cw-search-left ul > li').children('.optionsform').fadeOut();
//});
//
//
//$(document).click(function(e){
//	e.stopPropagation();
//	$('.cw-search-left ul > li').children('.common-hover').fadeOut();
//	$('.cw-search-left ul > li').children('.optionsform').fadeOut();
//});

}

if ($(window).width() > 767) {

$(document).click( function(e){
	e.stopPropagation();
   $('.cw-main-menu').slideUp();		
});
	
$('.cw-profile-setting').click(function(e){
	e.stopPropagation();
  	$('.cw-main-menu').slideUp();
});
$('.cw-noti').click(function(e){
	e.stopPropagation();
  	$('.cw-main-menu').slideUp();
});
$('.user-frnd-request').click(function(e){
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
	$('#notification').slideUp();
    $('#total-request').slideUp();
});

$('.cw-noti').click(function(e){
	e.stopPropagation();
	$('#notification').slideToggle();
	$('.cw-main-menu').removeClass('active');
	$('.menu-toggle').removeClass('active');
	$('.cw-main-menu').removeClass('menu-add');
	$('.cw-setting').slideUp();
	$('#total-request').slideUp();
});
$('.user-frnd-request').click(function(e){
	e.stopPropagation();
	$('#notification').slideUp();
	$('#total-request').slideToggle();
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
	$('#notification').slideUp();
    $('#total-request').slideUp();


	
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

$('#video-invitations').click(function(){
	$('#video-popup').fadeIn(500);
})

$('.popup-close').click(function(){
//	alert("sadsad");
	$('#main-popup').hide();
	$('#video-popup').fadeOut(500);
	$('#img-popup').fadeOut(500);
	$('#table-popup-toggle').fadeOut();
	$('#import-data-popup').fadeOut();
	$('body').removeClass('overflow');
	
	$('#yes-popup').fadeOut(500);
	$('#gotit').fadeOut(500);
	$('#whyrejected').fadeOut(500);
	$('#done-status-popup').fadeOut(500);
	$('#report-fund').fadeOut(500);
	$('#table-popup-toggle-connected').fadeOut(500);
	$('#filter-data-popup').fadeOut(500);
	$('#table-acheivement-popup').fadeOut(500);
	$('#congratulations-popup').fadeOut(500);
	$('body').removeClass('on-load-gray-cycle');
	$('#load-popup-toggle').fadeOut();
	$('#nav_up').fadeOut();
	$('#nav_down').fadeOut();

});

$('#load-popup-toggle').click(function(){
		$('body').removeClass('on-load-gray-cycle'); 
		$(this).fadeOut();
		$('#nav_up').fadeOut();
		$('#nav_down').fadeOut();
		
})

$('.inner-common-table .btn-anchors.btn-req').click(function(){
	$('#table-popup-toggle').fadeIn();
});

$('.btn-add-self').click(function(){
	$('#table-popup-toggle').fadeIn();
	$('body').addClass('overflow');
});
$('.feature_retails').click(function(){
	$('#table-popup-toggle').fadeIn();
	$('body').addClass('overflow');
});
/* start import data popup*/
$('.download-source').click(function(){
		$('#import-data-popup').fadeIn();
	});
$('#filter-icon').click(function(){
	$('body').addClass('overflow')
	$('#filter-data-popup').fadeIn(500);	
})	
/*end import data popup */
/*end onload popup for profile page */
/* css tabbing for about us page */ 
$(".tab-menu a").click(function(event) {
   event.preventDefault();

   if($(window).width() < 767){
   $('#profile-popup-details').animate({scrollTop:$('#popup-view-details').offset().top}, 'slow');}

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

/* css tabbing for fund-provider search page */ 
$(".cw-search-left ul a").click(function(event) {
   event.preventDefault();
   
   $(this).parent().addClass("current");
   $(this).parent().siblings().removeClass("current");
   var tab = $(this).attr("href");

   $(".search-tab-show").not(tab).css("display", "none");
   $(tab).fadeIn();

   var id = tab.split('#');
   $('.search-tab-show').removeClass("current-search");
   $('#'+id[1]).addClass("current-search");
	
	
});
/*end css tabing for fund provider search page */

/* css tabbing for fund seeker apply for page */ 
$(".inner-sub-title a").click(function(event) {
   event.preventDefault();
   
   $(this).parent().addClass("current");
   $(this).parent().siblings().removeClass("current");
   var tab = $(this).attr("href");

   $('.tab-loans').children(".menu-show").not(tab).css("display", "none");
   $(tab).fadeIn();
   
    var id = tab.split('#');
   //$('.menu-show').removeClass("current-tab");
   $('.listing-show').removeClass("current-list");
   $('#'+id[1]).addClass("current-tab");
   
   $('.tab-loans').children(".listing-show").not(tab).css("display", "none");
   $(tab).fadeIn();

   var id = tab.split('#');
   $('.listing-show').removeClass("current-list");
   // $('.listing-show').removeClass("current-tab");
   $('#'+id[1]).addClass("current-list");
	


});

$(".tab-loans li").click(function(event){
	$('.tab-loans li').removeClass("tab-selected");
	$(this).addClass("tab-selected");	
})

$('.tab-loans ul li').click(function(event){
	$('.tab-loans ul li').siblings().removeClass("tab-selected");
	$(this).addClass("tab-selected");	
})

$(".tab-sub-title a").click(function(event) {
   event.preventDefault();
   
   $(this).parent().addClass("current");
   $(this).parent().siblings().removeClass("current");
   var tab = $(this).attr("href");

   $('.tab.loan-tab').children(".menu-show").not(tab).css("display", "none");
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

/*end css tabing for fund seeker apply for page */

/*start fund provider self matches page for phase2*/
$(".phase-menu a").click(function(event) {
	
   event.preventDefault();

   if($(window).width() < 767)
   {
	   $('html, body').animate({scrollTop:$('#phase2-div').offset().top}, 'slow');
   }
   $(this).parent().addClass("current");
   $(this).parent().siblings().removeClass("current");
   var tab = $(this).attr("href");

   $("#popup-view-more .tab-show-more").not(tab).css("display", "none");
   $(tab).fadeIn();
   
   
	
});
/*end fund provider seld matches page for phase2 */


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
    /*for input */
	$(this).next().find('input').val($(this).val());
	
	$(this).next().find('.disabled').addClass('enabled');
	$('.enabled').parent().parent().children('.uf').addClass('tops-18');
	
	/*for span tag */
	$(this).next().find('.doc-filename').attr('href', $(this).val());
	$(this).next().find('.doc-filename').text($(this).val());
});

$('.our-module .custom-upload input[type=file]').change(function(){
    /*for input */
	var filePath = $(this)[0].files[0].name;
	$(this).next().find('input').val($(this).val());
	
	$(this).next().find('.file-name').attr('href',filePath);
	
	$(this).next().find('.disabled').addClass('enabled');
	$('.enabled').parent().parent().children('.uf').addClass('tops-18');               
	
//	$(this).next('.fake-file').find('p').hide();
	$(this).next('.fake-file').find('span').hide();
	$(this).next().find('.file-upload-input').show();
	
});

$('.file-upload-new .our-module .custom-upload input[type=file]').change(function(){
    /*for input */
	var name = $(this)[0].files[0].name;
	//alert(name);
	//var filePath = $(this).val();
	//alert(filePath);
	var ab = $(this).parent().parent().find('input.disabled').val($(this).val());
	
	//console.log(ab);
	$(this).parent().parent().find('.file-name').attr('href',name);
	
	$(this).parent().parent().find('.disabled').addClass('enabled');
	$('.enabled').parent().parent().children('.uf').addClass('tops-18');               
	
	$(this).next('.fake-file').find('span').show();
	$(this).parent().parent().find('.file-upload-input').show();
	$(this).parent().parent().find('.new-file-upload').hide();
	
});

$('.file-upload-input a.cancel-file').click(function(){
	$(this).parent().parent().find('p').show();
	$(this).parent().parent().find('span').show();
	$(this).parent().hide();
	$('.custom-upload input[type=file]').show();
	$(this).parent().parent().parent().find('.new-file-upload').show();
});

$('ul.file-upload-input a.cancel-file').click(function(){
	$(this).parent().show();
	$(this).parent().parent().hide();
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
   // navigation:true,
  });

   // Custom Navigation Events
   $this.parent().find(".next").click(function(){
  $this.trigger('owl.next');
   });
   $this.parent().find(".prev").click(function(){
  $this.trigger('owl.prev');
   });
 });

 $(".owl-carousel-four").each(function() {
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
 
/*main about us page sldier */
 $(".owl-carousel-three").each(function() {
   var $this = $(this);
   $this.owlCarousel({
  items :3, //10 items above 1000px browser width
  itemsDesktopSmall : [1024,3], // betweem 900px and 601px
  itemsDesktop:[1366,3],
  itemsTablet: [767,2], //2 items between 600 and 0
  itemsMobile : [480,1], // itemsMobile disabled - inherit from itemsTablet option
   //autoPlay: 3000,
 
  
  });
   // Custom Navigation Events
   $this.parent().find(".next").click(function(){
  $this.trigger('owl.next');
   });
   $this.parent().find(".prev").click(function(){
  $this.trigger('owl.prev');
   });
 }); 
 
/* end about us page slider */

/*end carsousel slider js */

 //start post remarks in fund provider self proposal page 
$('.post-remarks').click(function(){
		
		var d = new Date();
		var curr_date = document.getElementById("date-remarks").innerHTML = d;
		
		var txt = $(".profile-remarks .form-group input").val();
		$(".comments-remarks p").html(txt);
		$(".comments-remarks span").html(curr_date);
		
	})


/*fund profile provider menu*/
$('.cw-provider-home-res-left h4').click(function(){
	$('.cw-provider-home-left').toggleClass('menu-res-prov');
	$('.res-overlay').fadeToggle();
	});
$('.res-overlay').click(function(){
		$('.cw-provider-home-left').removeClass('menu-res-prov');
		$('.inner-menu').removeClass('inner-menu-open');
		$('.res-overlay').fadeOut();
})
/* end post remarks in fund provider self proposal page */

/*start one-form js */
$('.res-title').click(function(){
	$('.inner-menu').toggleClass('inner-menu-open');
	$('.res-overlay').fadeToggle();
});
/*end one-form js */

/* start seetings editable js */
$('.edit-details').click(function(){
		 
		 $('.edit-details').fadeOut();
		 $(this).parent().siblings('.setting-editable').hide();
		 
		 $(this).parent().siblings('.frm-setting-show').fadeIn();
		 
});

/* end seetings editable js */

/*start select box moving code */
var $opts = $(".excluded-option");

		$("#filter-specs-text").keyup(function () {
			var searchString = $(this).val().toLowerCase();
			$("#excluded-select").empty().append($opts);

			$opts.each(function () {
				var text = $(this).text().toLowerCase();

				//found a match - show this entry
				if (text.indexOf(searchString) > -1) {
					$(this).prop("disabled", false);
				}

				//no match - hide this entry
				else {
				   $(this).prop("disabled", true).detach();
				}
			});

		});
		
<!-- select box jquery -->
//select box jquery function
//FILTER LIST ON THE LEFT
//MOVE SPECS BETWEEN BOXES
		function moveListItems(sourceID, destinationID) {
			var whatToMove = $("#"+sourceID+"  option:selected");
 
            if(sourceID == "excluded-select") $opts = $opts.not(whatToMove);
           else $opts = $opts.add(whatToMove);
			whatToMove.remove().appendTo("#"+destinationID);
			return false;
		}

		$("#move-right-btn").click(function(){
			moveListItems("excluded-select", "included-select");
			return false;
		});

		$("#move-left-btn").click(function(){
			moveListItems("included-select", "excluded-select");
			return false;
		});
/*end select box moving code */

/*start onload js */
window.onload = function(){
 setTimeout(function(){
	 $('.css-loader').css('display','none')
	 }, 3000);

 	load_contact_details();
};

/*end onload js */

$('.deal-title').click(function(){
	
	$('.list-of-deal').animate({
	
		right: "0px",
		opacity: 1,
		
		}, 800);
		
	 $(this).animate({
		 
		 right:'-400px',
		 opacity: 0,
		 }, 100);	
	});
	
$('.close-deal').click(function(){
	
	$('.list-of-deal').animate({
	
		right: "-354px",
		opacity: 0,
		
		}, 800);
		
	 $('.deal-title').animate({
		 
		 right:'-67px',
		 opacity: 1,
		 }, 100);
	});
	
	
/* profile all popup */

/*sorting jquery */
var $divs = $(".provider-matches > li");

$('#alphBnt').click(function () {
//alert("hello");
    var alphabeticallyOrderedDivs = $divs.sort(function (a, b) {
//		alert("hello in");
        return $(a).find("h5 > a").text() > $(b).find("h5 > a").text();
    });

    $(".provider-matches").html(alphabeticallyOrderedDivs);
});

$('#numBnt').on('click', function () {
    
	var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find(".cw-inr-ruppee").text() < $(b).find(".cw-inr-ruppee").text();
    });
    
	$(".provider-matches").html(numericallyOrderedDivs);
});

$('#ratBnt').on('click', function () {
	
	var numericallyOrderedDivs = $divs.sort(function (a, b) {
        return $(a).find("span.stars span").width() < $(b).find("span.stars span").width() ? 1 : -1;
    });
    
	$(".provider-matches").html(numericallyOrderedDivs);
});

/*end sorting jquery */

$('#phase1').show();
$('#phase1 #main-profile-popup').fadeIn();
$('body.phase-one').addClass('overflow');	

$('body').on('click','.matches-all .provider-matches li .cw-matches-profile',function(){

//$('.matches-all .provider-matches li .cw-matches-profile').click(function(){
		//alert("hello");
		
		//$('html, body').animate({scrollTop : 0},800);
		$('body').addClass('overflow');
		$('.profile-popup').show();
		//$.scrollTo($('.profile-popup').fadeIn(), 1000);
		$('#main-profile-popup').fadeIn();
		
		
		//$('.profile-popup').animate({scrollTop : 0},800);
		$('#phase2 .pop-up-details').addClass('ad-view-more');
		$('#phase2 #popup-view-more').show();
		$('#phase2 .view-more-box').fadeIn();
		$('#phase2 #popup-view-more .tabbing-inner').fadeOut();
		$('#phase2 .profile-popup').addClass('posfixed');
		$('#phase2 #popup-view-details').fadeIn();
		$('#phase2 #personal-details-popup').fadeIn();

		
	});

$('.profile-close')	.click(function(){
		$('.profile-popup').hide();
		$('#popup-view-details').fadeOut();
		$('#personal-details-popup').fadeOut();
		$('.pop-up-details').removeClass('ad-view-more');
		$('#popup-view-more').fadeOut();
		$('.view-more-box').fadeOut();
		$('#popup-view-more .tabbing-inner').fadeOut();
		$('.profile-popup').removeClass('posfixed');
		$('body').removeClass('overflow');


	});

$('.profile-popup .notify-btn.accept').click(function(){
		
		$('#yes-popup').fadeIn();
    });

$('.sub-popup-close').click(function(){
 		$('#yes-popup').fadeOut();
	});

$('.view-details').click(function(){
		$('.profile-popup').animate({scrollTop : 0},800);
		$('#popup-view-details').fadeIn();
		$('#main-profile-popup').fadeOut();
		$('#personal-details-popup').fadeIn();
		
		if($(window).width() < 767)
		{
			var stickyOffset = $('#abc').offset().top;
	
			  $(".profile-popup").scroll(function(){
	
				  var sticky = $('#abc'),
				  scroll = $(".profile-popup").scrollTop();
				  if (scroll >= 540) sticky.addClass('posFixed');
				  else sticky.removeClass('posFixed');
				  
			});
		}

});

$('.view-more-details a').click(function(){
    	$('.profile-popup').animate({scrollTop : 0},800);
		$('.pop-up-details').addClass('ad-view-more');
		$('#popup-view-more').show();
		$('.view-more-box').fadeIn();
		$('#popup-view-more .tabbing-inner').fadeOut();
		$('.profile-popup').addClass('posfixed');
});

$('.back-details a').click(function(){
    	$('.profile-popup').animate({scrollTop : 0},800);
		$('.pop-up-details').removeClass('ad-view-more');
		$('#popup-view-more').fadeOut();
		//$('.profile-popup').removeClass('posfixed');
});

$('#cw-view-pdr').click(function(){
   	$('.profile-popup').animate({scrollTop : 0},800);
	$('.view-more-box').fadeOut();
	$('#popup-view-more .tabbing-inner').show();
	//$('.profile-popup').removeClass('posfixed');
});
  
$('.cw-show-more-less ul a').click(function(){
   $(this).parent().addClass("current").fadeIn();
   $('.current .more-details-text').slideDown();
		  
});
  
$('.cw-show-more-less ul a.hide').click(function(){

   $(this).parent().removeClass("current");
   $(this).parent().children('.more-details-text').slideUp();
   

})  ;
 

/* end profile all popup*/ 




/*start checkbox checked or unchechecked jquery for fund provider self search page */
$('.cw-cb-checkbox').change(function(){
		
		$('.current .counter').text($('.cw-cb-checkbox:checked'));
		$(this).parent().parent().parent().parent().parent().parent().addClass('demo123');
		
		if($('.cw-cb-checkbox:checked').length < 1)
		{
			$(this).parent().parent().parent().parent().parent().parent().removeClass('demo123');
		}
	
	});
	
$('.debt-equity').change(function(){
		
		if($('.debt-equity:checked').length < 1)
		{
			$(this).parent().parent().parent().parent().parent().parent().removeClass('demo123');
		}
		if($('.debt-equity:checked').length >= 1)
		{
			$(this).parent().parent().parent().parent().parent().parent().addClass('demo123');
		}
	
	});	
	
$('#cri6').change(function(){
		if($('#cri6:checked'))
		{
			$('.remarking ul').slideToggle();
		}
	});
	
/*end start checkbox checked or unchechecked jquery for fund provider self search page */
	
// Configure/customize these variables.
    var showChar = 220; // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "Show more";
    var lesstext = "Show less";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
	
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
	

/*show more and less industry section toggle class*/
$('body').on('click','#expand-details',function(){
	$('.more-industry').addClass("expandDetails");
});

$('body').on('click','#collapse-details',function(){
	$('.more-industry').removeClass("expandDetails");
});

/*custom js for counter*/
var sec = -1;
var start;
function pad(val) { return val > 9 ? val + "" : "0" + val; }
function sttt(){
 start =  setInterval(function () {
    //$("#seconds").html(pad(++sec % 60));
    var second = pad(++sec % 60).split('');
    var minuts = pad(parseInt(sec / 60, 10) % 60).split('');
    var hours = pad(parseInt(sec / 3600, 10)).split('');
    
    var timer = $("#timer")
    var span = timer.find('span');

    $(span[4]).text(second[0]);
    $(span[5]).text(second[1]);
    $(span[2]).text(minuts[0]);
    $(span[3]).text(minuts[1]);
    $(span[0]).text(hours[0]);
    $(span[1]).text(hours[1]);
}, 1000);
}

$('.stop').click(function(){
clearInterval(start);
$('.start').addClass('play');
$(this).addClass('pause');
})
$('.start').click(function(){
sttt();
$('.stop').removeClass('pause');
$(this).removeClass('play');

})
sttt();



/*start arcodian code for one form */


$(".accordiaon-top").click(function(){
  $curr = $(this);
  if($(this).hasClass("active")){ 
   $(this).removeClass("active");
   $(this).next().slideUp(500);
  	/*$('html, body').animate({
        scrollTop: $('.form-details').offset().top
    }, 500);*/
  }
  else 
  {
   $(".accordiaon-top").each(function(index){ 
       $(this).removeClass("active");
       $(this).next().slideUp(500);
	   /*$('html, body').animate({
        scrollTop: $('.form-details').offset().top
    }, 500);*/
  });
  $(this).addClass("active");
  $(this).next().slideDown(500);
  }
});
/*end arocidan code for one form */

/*start select all js*/
$("#checkAll").change(function () {
    $("input:checkbox").prop('checked', $(this).prop("checked"));
})
/*end select all js */

/* start js fot chatted*/

$('.chatlist-header').click(function(){
	$(this).parent().toggleClass('chat-hideshow');	
})
$('.close-chat').click(function(){
	$(this).parent().parent().parent().parent('.chatt-demo').addClass('hide-show-chatted');
	//$(this).parent().parent().parent().addClass('demos');
});
$('.chat-list li').click(function(){
	$('.chatt-demo').removeClass('hide-show-chatted');
});
$('.minimized-chat').click(function(){
	$(this).parent().parent().parent().parent().toggleClass('smallchatt-hideshow');
});

/*end js for chatted */

/* start view detailed list for one form file uploaded*/
 $('#hide-show-upload-list p label').click(function(){
	
	$('#hide-show-upload-list p').append("<a href='javascript:void(0)' id='hide-list'>Hide List</a>");
	$('#hide-show-upload-list p label').hide();  
	$('.view-detailed-list').slideToggle();
	});
$('body').on('click','#hide-list', function(){
	$(this).hide();
	$('#hide-show-upload-list p label').show();  
	$('.view-detailed-list').slideToggle();
	});
/* end view detailed list for one form file uploaded*/ 

	
});




/* end all jquery*/

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
		
		/*for profile-pic one-form-new */
     function profileURL(input) {
		 	
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#profile-pic')
                        .attr('src', e.target.result),
					 $('#profile-pic-two')
                        .attr('src', e.target.result)	
				 	
                };
				
                reader.readAsDataURL(input.files[0]);
            }
        }
/*end custom file uploaded on image show in browser in one-form-income/html page */


$(function(){
	  $(".more-industry").each(function(i){

		value=$(".more-industry").text();
		len=$(this).text().length;
		
		if(len>10)
		{
		  $(this).text($(this).text().substr(0,10)+'...').append("<a href='javascript:void(0)' id='expand-details'>Expand</a>");
		}
		
		$(document).on("click","#expand-details",function(){
			$('.more-industry').html(value).append("<a href='javascript:void(0)' id='collapse-details'>&nbsp; Collapse</a>")
		});
		
		$(document).on("click","#collapse-details",function(){
			$('.more-industry').text($('.more-industry').text().substr(0,10)+'...').append("<a href='javascript:void(0)' id='expand-details'>Expand</a>");
		});
		
	  });
	});
/*end fund provider self matches project details collpased code*/

$(function(){
	  $(".inbox-matches > li .cw-desig").each(function(i){
		  
		  
		value=$(".inbox-matches > li .cw-desig").text();
		len=$(this).text().length;
		
		if($(window).width() > 767)
		{
			if(len>70)
			{
			  $(this).text($(this).text().substr(0,60)).append("...");
			}
		}
		
	  });
	});
	
/*end fund provider project details collpased code*/

$(function() {
    // run the currently selected effect
    function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 0 };
      } else if ( selectedEffect === "transfer" ) {
        options = { to: "#button", className: "ui-effects-transfer" };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // run the effect
      $( "#effect" ).effect( selectedEffect, options, 500, callback );
    };
 
    // callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // set effect from select menu value
    $( "#button" ).click(function() {
      runEffect();
      return false;
    });
  });
  
  // script for the select box in fund provider self search page //
	$(function () {
            $("#left").bind("click", function () {
                var options = $("[id*=lstRight] option:selected");
                for (var i = 0; i < options.length; i++) {
                    var opt = $(options[i]).clone();
                    $(options[i]).remove();
                    $("[id*=lstLeft]").append(opt);
                }
				
				var left_length =  $("[id*=lstRight] option");
				$('.cw-search-left li.current .counter').fadeIn();
				$('.current .counter').text((left_length.length));
				if(left_length.length < 1)
				{
					$('.cw-search-left li.current .counter').fadeOut();
				}
				
            });
            $("#right").bind("click", function () {
                var options = $("[id*=lstLeft] option:selected");
                for (var i = 0; i < options.length; i++) {
                    var opt = $(options[i]).clone();
                    $(options[i]).remove();
                    $("[id*=lstRight]").append(opt);
                }
				
				var right_length =  $("[id*=lstRight] option");
				$('.cw-search-left li.current .counter').fadeIn();
				$('.current .counter').text((right_length.length));
				if(right_length.length < 1)
				{
					$('.cw-search-left li.current .counter').fadeOut();
				}
				
            });
			
			
        });

  $(function () {
            $("#location_add").bind("click", function () {
                var options = $("#location_select option:selected");
                for (var i = 0; i < options.length; i++) {
                    var opt = $(options[i]).clone();
                    $(options[i]).remove();
                    $("#location_contain").append(opt);
                }
				
				var left_loc =  $("#location_contain option");
				$('.cw-search-left li.current .counter').fadeIn();
				$('.current .counter').text((left_loc.length));
				if(left_loc.length < 1)
				{
					$('.cw-search-left li.current .counter').fadeOut();
				}
				
            });
            $("#location_remove").bind("click", function () {
                var options = $("#location_contain option:selected");
                for (var i = 0; i < options.length; i++) {
                    var opt = $(options[i]).clone();
                    $(options[i]).remove();
                    $("#location_select").append(opt);
                }
				
				var right_loc =  $("#location_contain option");
				$('.cw-search-left li.current .counter').fadeIn();
				$('.current .counter').text((right_loc.length));
				if(right_loc.length < 1)
				{
					$('.cw-search-left li.current .counter').fadeOut();
				}
            });

        });
		
		
$(function () {
            $("#left_sector").bind("click", function () {
                var options = $("[id*=sector_container] option:selected");
                for (var i = 0; i < options.length; i++) {
                    var opt = $(options[i]).clone();
                    $(options[i]).remove();
                    $("[id*=lstLeft_sector]").append(opt);
                }
				
				var left_length =  $("[id*=sector_container] option");
				
            });
            $("#right_sector").bind("click", function () {
                var options = $("[id*=lstLeft_sector] option:selected");
                for (var i = 0; i < options.length; i++) {
                    var opt = $(options[i]).clone();
                    $(options[i]).remove();
                    $("[id*=sector_container]").append(opt);
                }
				
				var right_length =  $("[id*=sector_container] option");
				
            });
			
			
        });		
  


 $(function () {
    //Loop through all Labels with class 'editable'.
    $(".editable").each(function () {
        //Reference the Label.
        var label = $(this);
 
        //Add a TextBox next to the Label.
        label.after("<input type = 'text' style = 'display:none' />");
 
        //Reference the TextBox.
        var textbox = $(this).next();
 
        //Set the name attribute of the TextBox.
        textbox[0].name = this.id.replace("lbl", "txt");
 
        //Assign the value of Label to TextBox.
        textbox.val(label.html());
 
        //When Label is clicked, hide Label and show TextBox.
        label.click(function () {
            $(this).hide();
            $(this).next().show();
        });
 
        //When focus is lost from TextBox, hide TextBox and show Label.
        textbox.focusout(function () {
            $(this).hide();
            $(this).prev().html($(this).val());
            $(this).prev().show();
        });
    });
});

$(function() {
    $(".on-load-gray-cycle .hover-graph").addClass("active");
    $(".on-load-gray-cycle .hover-graph.active").mouseover(function() {
      $(this).removeClass("active");
    });
});

$(function(){
	$(".on-load-gray-cycle .top-form-text > li").mouseover(function(){
		$(".on-load-gray-cycle .hover-graph.active").removeClass("active");
	});
});

//$(function () {
//    $("#paper-types").accordion({
//        heightStyle: "content",
//        collapsible: true,
//        active: false,
//        activate: function (event, ui) {
//            var scrollTop = $(".accordion").scrollTop();
//            var top = $(ui.newHeader).offset().top;
//            $("html,body").animate({
//                scrollTop: scrollTop + top - 125
//            }, "fast");
//        }
//   
//   });
//});
$(function() {
				var $elem = $('.landing-cont.profile-overflow');
				
				$('#nav_up').fadeOut('slow');
				$('#nav_down').fadeIn('slow');
				  
				
				$(window).bind('scrollstart', function(){
					$('#nav_up,#nav_down').stop().animate({'opacity':'0.2'});
				});
				$(window).bind('scrollstop', function(){
					$('#nav_up,#nav_down').stop().animate({'opacity':'1'});
				});
				
				$('#nav_down').click(

					function (e) {
						$('html, body').animate({scrollTop: $elem.height()}, 800);
						$(this).fadeOut();
						$('#nav_up').fadeIn();
					}
					
				);
				$('#nav_up').click(
					function (e) {
						$('html, body').animate({scrollTop: '0px'}, 800);
						$(this).fadeOut();
						$('#nav_down').fadeIn();
					}
					
				);
            });
