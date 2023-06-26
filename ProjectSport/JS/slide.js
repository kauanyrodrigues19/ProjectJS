// Discentes: Ana Beatriz e Kauany

const next = document.querySelector(".next-btn");
const slides = document.querySelectorAll(".slide");
const nSlides = slides.length;
var index = 0;
		
// Play manual do Slide
	next.addEventListener ("click", () => {
		slides.forEach((slides) =>{
				slides.classList.remove("active");
		});
		index++;
			
		if(index > (nSlides - 1)){
			index = 0; 
		}
        slides[index].classList.add("active");
			
		});

// Autoplay 
	var playSlider;
	var repeater = () => {
		playSlider = setInterval(function(){
			slides.forEach((slides) =>{
			slides.classList.remove("active");
		});
		index++;
			
		if(index > (nSlides - 1)){
			index = 0; 
		}
        slides[index].classList.add("active");
		}, 5000);
		}
		repeater();

