(function () {
	"use strict";

	const groupsList   = document.querySelectorAll(".tours-groups__group"),
		  controlsList = document.querySelectorAll(".tours-groups__link");

	setMaxColumnHeight(getMaxColumnHeight(0), 0);
	setOnClickHundlers();

	function setOnClickHundlers() {
		for (let item of controlsList) {
			item.addEventListener("click", selectTab);
		}
	}

	function selectTab(event) {
		event.preventDefault();

		const index = this.getAttribute("data-index");

		deleteActiveClassInGroups();
		deleteActiveClassInControls();

		groupsList[index].classList.add("tours-groups__group--active");
		controlsList[index].classList.add("tours-groups__link--active");
		controlsList[index].parentNode.classList.add("tours-groups__item--active");

		setMaxColumnHeight(getMaxColumnHeight(index), index);
	}

	function deleteActiveClassInGroups() {
		for (let item of groupsList) {
			item.classList.remove("tours-groups__group--active");
		}
	}

	function deleteActiveClassInControls(argument) {
		for (let item of controlsList) {
			item.classList.remove("tours-groups__link--active");
			item.parentNode.classList.remove("tours-groups__item--active");
		}
	}

	function getMaxColumnHeight(index) {
		let maxHeight = 0,
			toursList = groupsList[index].querySelectorAll(".tours-groups__tour");

		for (let item of toursList) {
			if(maxHeight < item.offsetHeight) {
				maxHeight = item.offsetHeight;
			}
		}

		return maxHeight;
	}

	function setMaxColumnHeight(maxHeight, index) {
		const toursList = groupsList[index].querySelectorAll(".tours-groups__tour");

		for (let item of toursList) {
			item.style.height = `${maxHeight}px`;
		}
	}

})();