let catalog = document.querySelector(".catalog__list");
let catalog_open_btn = document.querySelector(".catalog__btn");
let bags_and_backpacks = document.querySelector(".catalog__bags-and-backpacks");
let catalog_sub_list = document.querySelector(".catalog__sub-list");
let catalog_title_main = document.querySelector(".catalog__title--main-title");
let catalog_title_bags_and_backpacks = document.querySelector(".catalog__title--bags-and-backpacks");
let catalog_btn_arrow = document.querySelector(".catalog__btn-arrow");
let catalog__list_link__metal = document.querySelector(".catalog__list-link--metal");
let catalog__sub_list_metal = document.querySelector(".catalog__sub-list--metal");
let catalog__sub_list_link__metal = document.querySelector(".catalog__sub-list-link--metal");
let catalog__super_sub_list_metal = document.querySelector(".catalog__super-sub-list--metal");

catalog_open_btn.addEventListener("click", function (evt) {
	if (!catalog_open_btn.classList.contains("catalog__line--open-catalog")) {
		evt.preventDefault();
		catalog_open_btn.classList.add("catalog__line--open-catalog");
		catalog.classList.add("catalog__list--open");
	} else if (catalog_open_btn.classList.contains("catalog__line--open-catalog")
		 ) {
		catalog_open_btn.classList.remove("catalog__line--open-catalog");
		catalog.classList.remove("catalog__list--open");
		catalog.classList.add("catalog__list--close");

		if (catalog.classList.contains("catalog__list--forward")) {
			catalog.classList.remove("catalog__list--forward")
		}

		if (catalog__sub_list_metal.classList.contains("catalog__sub-list--metal-show")) {
			catalog__sub_list_metal.classList.remove("catalog__sub-list--metal-show")
			catalog__list_link__metal.classList.remove("catalog__list-link--active");
		}

		if (catalog__super_sub_list_metal.classList.contains("catalog__super-sub-list--show")) {
			catalog__super_sub_list_metal.classList.remove("catalog__super-sub-list--show")
			catalog__sub_list_link__metal.classList.remove("catalog__sub-list-link--active");
		}

		setTimeout(function(){
			catalog.classList.remove("catalog__list--close");
				}, 300);
	}
})

bags_and_backpacks.addEventListener("click", function (evt) {
	if (!bags_and_backpacks.classList.contains("catalog__bags-and-backpacks--open") && document.documentElement.clientWidth < 768) {
		evt.preventDefault();
		catalog_sub_list.classList.add("catalog__sub-list--open");
		catalog.classList.remove("catalog__list--open");
		catalog.classList.add("catalog__list--backward");
		catalog_title_main.classList.add("catalog__title--main-title-close");
		catalog_title_bags_and_backpacks.classList.add("catalog__title--bags-and-backpacks-show");
		catalog_open_btn.classList.add("catalog__btn--hide");
		catalog_btn_arrow.classList.add("catalog__btn-arrow--open");

		if (catalog.classList.contains("catalog__list--forward")) {
			catalog.classList.remove("catalog__list--forward")
		}
	}
})

catalog_btn_arrow.addEventListener("click", function (evt) {
		catalog.classList.remove("catalog__list--backward");
		catalog.classList.add("catalog__list--forward");
		catalog_open_btn.classList.remove("catalog__btn--hide");
		catalog_btn_arrow.classList.remove("catalog__btn-arrow--open");
		catalog_title_main.classList.remove("catalog__title--main-title-close");
		catalog_title_bags_and_backpacks.classList.remove("catalog__title--bags-and-backpacks-show");

		setTimeout(function(){
		catalog_sub_list.classList.remove("catalog__sub-list--open");
			}, 300);
})

catalog__list_link__metal.addEventListener("click", function (evt) {
	if (!catalog__list_link__metal.classList.contains("catalog__list-link--active") &&
		document.documentElement.clientWidth > 768) {
		catalog__list_link__metal.classList.add("catalog__list-link--active");
		catalog__sub_list_metal.classList.add("catalog__sub-list--metal-show");
	} else if (catalog__list_link__metal.classList.contains("catalog__list-link--active") &&
		document.documentElement.clientWidth > 768) {
		catalog__list_link__metal.classList.remove("catalog__list-link--active");
		catalog__sub_list_metal.classList.remove("catalog__sub-list--metal-show");

		if (catalog__super_sub_list_metal.classList.contains("catalog__super-sub-list--show")) {
			catalog__super_sub_list_metal.classList.remove("catalog__super-sub-list--show")
			catalog__sub_list_link__metal.classList.remove("catalog__sub-list-link--active");
		}
	}
})

catalog__sub_list_link__metal.addEventListener("click", function (evt) {
	if (!catalog__sub_list_link__metal.classList.contains("catalog__sub-list-link--active") &&
		document.documentElement.clientWidth > 768) {
		catalog__sub_list_link__metal.classList.add("catalog__sub-list-link--active");
		catalog__super_sub_list_metal.classList.add("catalog__super-sub-list--show");
	} else if (catalog__sub_list_link__metal.classList.contains("catalog__sub-list-link--active") &&
		document.documentElement.clientWidth > 768) {
		catalog__sub_list_link__metal.classList.remove("catalog__sub-list-link--active");
		catalog__super_sub_list_metal.classList.remove("catalog__super-sub-list--show");
	}
})