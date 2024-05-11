$(document).ready(function(){

  $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){

      $('#menu').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(window).scrollTop() > 60){
          $('header').addClass('header-active');
      }else{
          $('header').removeClass('header-active');
      }
      
  });

});


let span = document.getElementsByTagName('span');
	let product = document.getElementsByClassName('product')
	let product_page = Math.ceil(product.length/4);
	let l = 0;
	let movePer = 25.34;
	let maxMove = 101;
	// mobile_view	
	let mob_view = window.matchMedia("(max-width: 768px)");
	if (mob_view.matches)
	 {
	 	movePer = 50.36;
	 	maxMove = 101;
	 }

	let right_mover = ()=>{
		l = l + movePer;
		if (product == 1){l = 0; }
		for(const i of product)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.left = '-' + l + '%';
		}

	}
	let left_mover = ()=>{
		l = l - movePer;
		if (l<=0){l = 0;}
		for(const i of product){
			if (product_page>1){
				i.style.left = '-' + l + '%';
			}
		}
	}
	span[1].onclick = ()=>{right_mover();}
	span[0].onclick = ()=>{left_mover();}

	document.addEventListener('DOMContentLoaded', function() {
		const slider = document.querySelector('.item');
		const slides = document.querySelectorAll('.product');
		const slideWidth = slides[0].clientWidth;
		let counter = 1;

		function slide() {
			slider.style.transition = 'transform 0.5s ease-in-out';
			slider.style.transform = `translateX(${-slideWidth * counter}px)`;
			counter++;

			if (counter === slides.length) {
				setTimeout(() => {
					slider.style.transition = 'none';
					slider.style.transform = 'translateX(0)';
					counter = 1;
				}, 500);
			}
		}

		setInterval(slide, 3000); // Change image every 3 seconds (3000ms)
	});

    