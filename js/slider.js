(function () {
	"use strict";

	const navigationList = document.getElementById("navigation"),
	  	  linksList      = navigationList.getElementsByTagName("a"),
	  	  sliderElement  = document.getElementById("slider"),
		  slidesImages   = ["img/slide1.jpg",
		  				    "img/slide2.jpg",
		  				    "img/slide1.jpg",
		  				    "img/slide2.jpg"];
		  				    
	setSliderImage(0);
	setOnClickHundlers();

	function setOnClickHundlers() {
		for (let item of linksList) {
			item.addEventListener("click", setSlide);
		}		
	}

	function setSlide(event) {
		const numberSlide = this.innerHTML - 1;

		deleteActiveClass();
		setSliderImage(numberSlide);
		linksList[numberSlide].classList.add("active");
	}

	function setSliderImage(index) {
		sliderElement.style.backgroundImage = `url(${slidesImages[index]})`;
	}

	function deleteActiveClass() {
		for (let item of linksList) {
			item.classList.remove("active");
		}
	}
})();