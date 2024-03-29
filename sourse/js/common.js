"use strict";
const JSCCommon = {
	modalCall() {
		const link = '[data-fancybox="modal"], .link-modal-js';

		Fancybox.bind(link, {
			arrows: false,
			// infobar: false,
			touch: false,
			trapFocus: false,
			placeFocusBack: false,
			infinite: false,
			dragToClose: false,
			type: 'inline',
			autoFocus: false,
			groupAll: false,
			groupAttr: false,
			// showClass: "fancybox-throwOutUp",
			// hideClass: "fancybox-throwOutDown",
			l10n: {
				CLOSE: "Закрыть",
				Escape: "Закрыть",
				NEXT: "Вперед",
				PREV: "Назад",
				MODAL: "Вы можете закрыть это модальное окно с помощью клавиши ESC.",
				ERROR: "Что-то пошло не так. Пожалуйста, повторите попытку позже",
				IMAGE_ERROR: "Изображение не найдено",
				ELEMENT_NOT_FOUND: "HTML-элемент не найден",
				AJAX_NOT_FOUND: "Ошибка при загрузке AJAX: не найдено",
				AJAX_FORBIDDEN: "Ошибка при загрузке AJAX: запрещено",
				IFRAME_ERROR: "Ошибка загрузки iframe",
			},
		});
		document.querySelectorAll(".modal-close-js").forEach(el=>{
			el.addEventListener("click", ()=>{
				Fancybox.close();
			})
		})
		Fancybox.bind('[data-fancybox]', {
			placeFocusBack: false,
		});
		document.addEventListener('click', (event) => {
			let element = event.target.closest(link)
			if(!element) return;
			let modal = document.querySelector("#" + element.dataset.src);
			const data = element.dataset;

			function setValue(val, elem) {
				if (elem && val) {
					const el = modal.querySelector(elem)
					el.tagName == "INPUT"
						? el.value = val
						: el.innerHTML = val;
					// console.log(modal.querySelector(elem).tagName)
				}
			}
			setValue(data.title, '.ttu');
			setValue(data.text, '.after-headline');
			setValue(data.btn, '.btn');
			setValue(data.order, '.order');
		})
	},
	// /modalCall
	toggleMenu() {
    const toggle = document.querySelectorAll('.toggle-menu-mobile--js');
    const menu = document.querySelector('.menu-mobile--js');
    toggle.forEach((el) => el.classList.toggle('on'));
    menu.classList.toggle('active');
    [document.body, document.querySelector('html')].forEach((el) => el.classList.toggle('fixed'));
  },
  closeMenu() {
    const toggle = document.querySelectorAll('.toggle-menu-mobile--js');
    const menu = document.querySelector('.menu-mobile--js');
    toggle.forEach((element) => element.classList.remove('on'));
    if (menu) {
      menu.classList.remove('active');
      [document.body, document.querySelector('html')].forEach((el) => el.classList.remove('fixed'));
    }
  },
  mobileMenu() {
    document.addEventListener('click', (event) => {
        let container = event.target.closest('.menu-mobile--js'); // (1)
        let li = event.target.closest('.menu-mobile--js li a'); // (1)
        let toggle = event.target.closest('.toggle-menu-mobile--js'); // (1)
        if (toggle) this.toggleMenu();
			if (!container && !toggle || li) {
					this.closeMenu()
				};
				let touchStart, touchEnd;
				document.querySelector('.menu-mobile--js').addEventListener('touchstart', e => (touchStart = e.targetTouches[0].clientX));
				document.querySelector('.menu-mobile--js').addEventListener('touchmove',e => (touchEnd = e.targetTouches[0].clientX));
				document.querySelector('.menu-mobile--js').addEventListener('touchend', e => {
					if (touchEnd - touchStart > 45) {
						this.closeMenu();
						touchStart = 0;
						touchEnd = 0;
					}
				});
      },
      { passive: true },
		);

    // window.addEventListener('resize', () => {
    //     if (window.matchMedia('(min-width: 992px)').matches) this.closeMenu();
    //   },
    //   { passive: true },
    // );
  },

	// tabs  .
	tabscostume(tab) {
		// const tabs = document.querySelectorAll(tab);
		// const indexOf = element => Array.from(element.parentNode.children).indexOf(element);
		// tabs.forEach(element => {
		// 	let tabs = element;
		// 	const tabsCaption = tabs.querySelector(".tabs__caption");
		// 	const tabsBtn = tabsCaption.querySelectorAll(".tabs__btn");
		// 	const tabsWrap = tabs.querySelector(".tabs__wrap");
		// 	const tabsContent = tabsWrap.querySelectorAll(".tabs__content");
		// 	const random = Math.trunc(Math.random() * 1000);
		// 	tabsBtn.forEach((el, index) => {
		// 		const data = `tab-content-${random}-${index}`;
		// 		el.dataset.tabBtn = data;
		// 		const content = tabsContent[index];
		// 		content.dataset.tabContent = data;
		// 		if (!content.dataset.tabContent == data) return;

		// 		const active = content.classList.contains('active') ? 'active' : '';
		// 		// console.log(el.innerHTML);
		// 		content.insertAdjacentHTML("beforebegin", `<div class="tabs__btn-accordion  btn btn-primary  mb-1 ${active}" data-tab-btn="${data}">${el.innerHTML}</div>`)
		// 	})


		// 	tabs.addEventListener('click', function (element) {
		// 		const btn = element.target.closest(`[data-tab-btn]:not(.active)`);
		// 		if (!btn) return;
		// 		const data = btn.dataset.tabBtn;
		// 		const tabsAllBtn = this.querySelectorAll(`[data-tab-btn`);
		// 		const content = this.querySelectorAll(`[data-tab-content]`);
		// 		tabsAllBtn.forEach(element => {
		// 			element.dataset.tabBtn == data
		// 				? element.classList.add('active')
		// 				: element.classList.remove('active')
		// 		});
		// 		content.forEach(element => {
		// 			element.dataset.tabContent == data
		// 				? (element.classList.add('active'), element.previousSibling.classList.add('active'))
		// 				: element.classList.remove('active')
		// 		});
		// 	})
		// })

		// document.addEventListener('click', function(e) {
		// 	if(e.target.closest('.' + tab + '__btn')) {
		// 		// console.log(e.target.closest(tab));
		// 		// console.log(e.target.closest('.' + tab + '__btn'));
		// 		$('.' + tab + '__content')
		// 			.addClass('active').siblings().removeClass('active')
		// 			.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
		// 			.eq($(this).index()).fadeIn().addClass('active');
		// 	}
		// })
		$(document).on('click', '.' + tab + '__btn:not(.active):not(.disabled)', function (e) {
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');
		});

	},
	// /tabs

	inputMask() {
		// mask for input
		let InputTel = [].slice.call(document.querySelectorAll('input[type="tel"]'));
		InputTel.forEach(element => element.setAttribute("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}"));
		Inputmask({"mask":"+9(999)999-99-99", showMaskOnHover: false}).mask(InputTel);
	},
	heightwindow() {
		// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
		let vh = window.innerHeight * 0.01;
		// Then we set the value in the --vh custom property to the root of the document
		document.documentElement.style.setProperty('--vh', `${vh}px`);

		// We listen to the resize event
		window.addEventListener('resize', () => {
			// We execute the same script as before
			let vh = window.innerHeight * 0.01;
			document.documentElement.style.setProperty('--vh', `${vh}px`);
		}, { passive: true });
	},
	animateScroll() {
		$(document).on('click', " nav li a,.scroll-link ", function () {
			const elementClick = this.hash;
			if($(this).attr("href") == '/') return;
			if (document.querySelector(elementClick)) {
				let destination = $(elementClick).offset().top;
				$('html, body').animate({ scrollTop: destination - 160 }, 0);
				window.history.pushState('1', 'Title', `${elementClick}`);
				return false;
			}
		});

	},
	getCurrentYear(el) {
		let now = new Date();
		let currentYear = document.querySelector(el);
		if (currentYear) currentYear.innerText = now.getFullYear();
	},
	toggleShow(toggle, drop) {

		let catalogDrop = drop;
		let catalogToggle = toggle;

		$(document).on('click', catalogToggle, function () {
			$(this).toggleClass('active').next().fadeToggle('fast', function () {
				$(this).toggleClass("active")
			});
		})

		document.addEventListener('mouseup', (event) => {
			let container = event.target.closest(catalogDrop + ".active"); // (1)
			let link = event.target.closest(catalogToggle); // (1)
			if (!container || !catalogToggle) {
				$(catalogDrop).removeClass('active').fadeOut();
				$(catalogToggle).removeClass('active');
			};
		}, { passive: true });
	},
	makeDDGroup() {
		$(document).on('click', '.dd-head-js', function () {
      let clickedHead = this;
      $(this).parent().toggleClass('active');
      $(this)
        .next()
        .slideToggle(function () {
          $(this).toggleClass('active');
        });
    });
	},
	imgToSVG() {
    const convertImages = (query, callback) => {
			const images = document.querySelectorAll(query);

			images.forEach(image => {
				fetch(image.src)
					.then(res => res.text())
					.then(data => {
						const parser = new DOMParser();
						const svg = parser.parseFromString(data, 'image/svg+xml').querySelector('svg');

						if (image.id) svg.id = image.id;
						if (image.className) svg.classList = image.classList;

						image.parentNode.replaceChild(svg, image);
					})
					.then(callback)
					.catch(error => console.error(error))
			});
		};

		convertImages('.img-svg-js');
  },
};


function eventHandler() {
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	// document.addEventListener('click', function(event) {
	// 	if(event.target.closest('.tabs')) {
	// 	}
	// })
	JSCCommon.tabscostume('innerTabs');
	JSCCommon.tabscostume('personalRating');
	JSCCommon.mobileMenu();
	JSCCommon.inputMask();
	JSCCommon.imgToSVG();
	// JSCCommon.sendForm();
	JSCCommon.heightwindow();
	JSCCommon.makeDDGroup();
	// JSCCommon.toggleShow(".catalog-block__toggle--desctop", '.catalog-block__dropdown');
	JSCCommon.animateScroll();

	// JSCCommon.CustomInputFile();
	var x = window.location.host;
	let screenName;
	screenName = 'screen/'+document.body.dataset.bg;
	if (screenName && x.includes("localhost:30")) {
		document.body.insertAdjacentHTML("beforeend", `<div class="pixel-perfect" style="background-image: url(${screenName});"></div>`);
	}


	function setFixedNav() {
		let topNav = document.querySelector('.header');
		if (!topNav) return;
		var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		// console.log(scrollTop);

		scrollTop > 160 ? topNav.classList.add('fixed') : topNav.classList.remove('fixed');
		scrollTop > 250 ? topNav.classList.add('fixed-animate') : topNav.classList.remove('fixed-animate');
		scrollTop > 400 ? topNav.classList.add('fixed-show') : topNav.classList.remove('fixed-show');
	}

	function whenResize() {
		setFixedNav();
	}

	window.addEventListener('scroll', () => {
		setFixedNav();

	}, { passive: true })
	window.addEventListener('resize', () => {
		whenResize();
	}, { passive: true });

	whenResize();


	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: ' .swiper-pagination',
			type: 'bullets',
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	}

	// const swiperbreadcrumb = new Swiper('.breadcrumb-slider--js', {
	// 	slidesPerView: 'auto',
	// 	freeMode: true,
	// 	watchOverflow: true
	// });

	const tagsSlider = new Swiper('.sFaqBlock__tags-slider--js', {
		slidesPerView: 'auto',
		freeMode: true,
		watchOverflow: true,
		spaceBetween: 8,
	});

	const sResumeSwiper = new Swiper('.sResume__slider--js', {
		slidesPerView: 1,
		navigation: {
			nextEl: '.sResume__arrow-wrap .swiper-button-next',
			prevEl: '.sResume__arrow-wrap .swiper-button-prev',
		},
		pagination: {
			el: '.sResume__arrow-wrap .swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});
	// modal window

	let defaultSliders = document.querySelectorAll('.default-slider');
	if(defaultSliders.length > 0) {
		for (const defaultSlider of defaultSliders) {
			const defaultSwiper = new Swiper(defaultSlider.querySelector('.default-slider__slider--js'), {
				slidesPerView: 'auto',
				navigation: {
					nextEl: defaultSlider.querySelector('.default-slider__arrow-wrap .swiper-button-next'),
					prevEl: defaultSlider.querySelector('.default-slider__arrow-wrap .swiper-button-prev'),
				},
				pagination: {
					el: defaultSlider.querySelector('.default-slider__arrow-wrap .swiper-pagination'),
					type: 'bullets',
					clickable: true,
				},
			});
		}
	}


	let animateBlocks = document.querySelectorAll('[data-json]');
  if (animateBlocks) {
    for (const animateBlock of animateBlocks) {
      lottie.loadAnimation({
        container: animateBlock, // the dom element that will contain the animation
        renderer: 'canvas',
        loop: true,
        autoplay: true,
        path: animateBlock.dataset.json, // the path to the animation json
      });
    }
  };
	// setTimeout(() => {
	// 	document.body.classList.remove('loaded_hiding');
	// },1200);

	var Sticky = new hcSticky('.sContent__hc-sticky--js', {
    stickTo: '.sContent',
		mobileFirst: true,
		disable: true,
		top: '50%',
		responsive: {
			998: {
				disable: false
			}
		}
  });

	document.addEventListener('scroll', function() {
		if(window.scrollY >= 180) {
			$('.scroll-top').addClass('active');
		} else {
			$('.scroll-top').removeClass('active');
		}
	});
	$('.scroll-top').on('click', function() {
		window.scrollTo(0,0);
	});


	if (getCookie('userAgree') !== 'true') {

		let cookies = `<div class="cookie-block ">
			<div class="container">
				<div class="row">
					<div class="col">Для того, чтобы ты&nbsp;мог удобнее пользоваться сайтом, мы&nbsp;используем cookies, которые сохраняются на&nbsp;твоем компьютере. Нажимая СОГЛАСЕН, ты&nbsp;подтверждаешь, что ты&nbsp;знаешь об&nbsp;использовании cookies на&nbsp;нашем сайте. Если захочешь, то&nbsp;отключить cookies ты&nbsp;можешь в&nbsp;настройках своего браузера</div>
					<div class="col-auto">
						<button class="btn btn-primary" type="button"> Согласен</button>
					</div>
				</div>
			</div>
		</div>`
		document.querySelector(".after-c").insertAdjacentHTML("afterend", cookies);
		document.querySelector('.cookie-block .btn').addEventListener("click", function() {
			setCookie('userAgree', 'true');
			$(".cookie-block").remove();
		})
	}
	// Пример использования:

	// deleteCookie('userAgree')

	new isvek.Bvi({
    target: '.my-class',
    fontSize: 32,
    theme: 'black',
		speech: false,
});

};

function loadingContent () {
	eventHandler();
	// if (document.readyState !== 'loading') {
	// } else {
	// }
	// document.addEventListener('DOMContentLoaded', eventHandler);
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.querySelector(".loader-wrap").classList.add('loaded');
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
		AOS.init({
			offset: 160
		});
	}, 600);
	window.setTimeout(function () {
		let scrolToHash  = window.location.hash;
		if(scrolToHash) {
			let destination = $(scrolToHash).offset().top;
			// $('html, body').animate({ scrollTop: destination - 160 }, 0);

			window.scrollTo({
				top: destination - 160,
				left: 0,
				behavior: "smooth",
			});
		}

	}, 1000)

}


function setCookie(name, value, options = {}) {

	options = {
		path: '/',
		// при необходимости добавьте другие значения по умолчанию
		...options
	};

	if (options.expires instanceof Date) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}



function getCookie(name) {
	let matches = document.cookie.match(new RegExp(
		"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


function deleteCookie(name) {
	setCookie(name, "", {
		'max-age': -1
	})
}

