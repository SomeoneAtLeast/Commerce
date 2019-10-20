let search = document.querySelector(".search");
let search_big = document.querySelector(".search-big");

search.addEventListener("click", function (evt) {
	if (!search_big.classList.contains("search-open")) {
		evt.preventDefault();
		search_big.classList.add("search-open");
	} else if (search_big.classList.contains("search-open")
		 ) {
		search_big.classList.remove("search-open");
		search_big.classList.add("search-close");

		setTimeout(function(){
		search_big.classList.remove("search-close");
			}, 300);
	}
})