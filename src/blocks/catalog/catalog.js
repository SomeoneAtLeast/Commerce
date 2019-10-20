let catalog = document.querySelector(".catalog__list");
let catalog_open_btn = document.querySelector(".catalog__btn");

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

		setTimeout(function(){
			catalog.classList.remove("catalog__list--close");
				}, 300);
	}
})