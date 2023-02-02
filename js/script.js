const navbar = document.querySelector(".navbar-nav");

navbar.addEventListener("click", function (e) {
	const targetNav = e.target;

	if (targetNav.classList.contains("nav-link")) {
		const menuLinkActive = document.querySelector("ul li a.active");
		if (menuLinkActive !== null && targetNav.getAttribute("href") !== menuLinkActive.getAttribute("href")) {
			menuLinkActive.classList.remove("active");
		}
		targetNav.classList.add("active");
	}
});

$(document).ready(function () {
	$('section').css('display', 'none');
	$('section').fadeIn(1000);
});

$(document).ready(function () {
	$(window).scroll(function () { 
		$('#img-abt').each(function () { 
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1'},1000);
			}		 
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () { 
		$('.box').each(function () { 
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1'},1000);
			}		 
		});
	});
});

$(document).ready(function () {
	$(window).scroll(function () { 
		$('#sertif').each(function () { 
			var bottom_of_element = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			if (bottom_of_window > bottom_of_element){
				$(this).animate({'opacity':'1'},1000);
			}		 
		});
	});
});