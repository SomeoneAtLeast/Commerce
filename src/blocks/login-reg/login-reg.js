let login_reg_checkbox = document.querySelector(".login-reg__checkbox");
let login_reg_tick = document.querySelector(".login-reg__tick");
let login_btn = document.querySelector(".menu__login");
let login_reg = document.querySelector(".login-reg");

login_reg_checkbox.addEventListener("click", function (evt) {
	if (!login_reg_tick.classList.contains("login-reg__tick--show")) {
		login_reg_tick.classList.add("login-reg__tick--show");
	} else if (login_reg_tick.classList.contains("login-reg__tick--show")) {
		login_reg_tick.classList.remove("login-reg__tick--show");
	}
})

login_btn.addEventListener("click", function (evt) {
	if (!login_reg.classList.contains("login-reg--show")) {
		login_reg.classList.add("login-reg--show");
	} else if (login_reg.classList.contains("login-reg--show")) {
		login_reg.classList.remove("login-reg--show");
	}
})
