(function () {
	"use strict";

	const navigationList = document.getElementById("navigation"),
	  	  linksList      = navigationList.getElementsByTagName("a"),
	  	  sliderElement  = document.getElementById("slider"),
	  	  photographImg  = document.getElementById("photo"),
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
		event.preventDefault();
		
		const numberSlide = this.innerHTML - 1;

		deleteActiveClass();
		setPhotographImg(numberSlide);
		setSliderImage(numberSlide);
		linksList[numberSlide].classList.add("active");
	}

	function setSliderImage(index) {
		sliderElement.style.backgroundImage = `url(${slidesImages[index]})`;
	}

	function setPhotographImg(index) {
		if ((index + 1) % 2 === 0) {
			photographImg.src = "img/photo2.png";
		}
		else {
			photographImg.src = "img/photo1.png";
		}
	}

	function deleteActiveClass() {
		for (let item of linksList) {
			item.classList.remove("active");
		}
	}
})();