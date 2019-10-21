let menu = document.querySelector(".menu");
let menu_open_btn = document.querySelector(".menu__btn");
let menu_list = document.querySelector(".menu__list");

menu_open_btn.addEventListener("click", function (evt) {
	if (!menu.classList.contains("menu-open") &&
	 document.documentElement.clientWidth < 768) {
		menu.classList.add("menu-open");
		menu_list.classList.add("menu__list--open");
	} else if (menu.classList.contains("menu-open") &&
		document.documentElement.clientWidth < 768)
		 {
		menu.classList.remove("menu-open");
		menu_list.classList.remove("menu__list--open");
		menu_list.classList.add("menu__list--close");

		setTimeout(function(){
		menu_list.classList.remove("menu__list--close");
			}, 300);
	}
})