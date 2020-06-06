const container = document.querySelector(".header-burger");
container.onclick = function(){
	container.classList.toggle("active");
}

const chekedLi = document.querySelectorAll(".header-content-nav_item")
for(let item of chekedLi) {
	item.onclick = function() {
		const removeClass = document.querySelector(".header-content-nav_item-active")
		removeClass.classList.remove("header-content-nav_item-active")
		item.classList.add("header-content-nav_item-active")
	}
}