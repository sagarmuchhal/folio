		
	
	function scrollWin() {
  		window.scrollTo(0, 10900);
	}

		 var header = document.getElementById("myDIV");
   var btns = header.getElementsByClassName("activehover");
   for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName(" activemain");
   current[0].className = current[0].className.replace(" activemain", "");
   this.className += " activemain";
   });
}


		 var header = document.getElementById("myDIV1");
   var btns = header.getElementsByClassName("activehover1");
   for (var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", function() {
   var current = document.getElementsByClassName(" activemain1");
   current[0].className = current[0].className.replace(" activemain1", "");
   this.className += " activemain1";
   });
}

	let slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	  
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
 	 	let i;
 	 	let slides = document.getElementsByClassName("mySlides");
  		let dots = document.getElementsByClassName("demo");
  		let captionText = document.getElementById("caption");
  		if(n > slides.length-1)
  		{
  			document.getElementById("p2").style.opacity = "0.1";
  		}
  		else {
  			document.getElementById("p2").style.opacity = "1";
  		}
  		if(n <= 1)
  		{
  			document.getElementById("p1").style.opacity = "0.1";	
  		}
  		else {
  			document.getElementById("p1").style.opacity = "1";
  		}
  		if (n > slides.length) {
  			// slideIndex = 1
  			
  			return;

  		}
  		if (n < 1) {
  			return;
			// slideIndex = slides.length
  		}
  		
  		for (i = 0; i < slides.length; i++) {
  		  slides[i].style.display = "none";
  		   
  		}
  		for (i = 0; i < dots.length; i++) {
    		dots[i].className = dots[i].className.replace(" active", "");
  		}
  		slides[slideIndex-1].style.display = "block";
  		// dots[slideIndex-1].className += " active";
  		// captionText.innerHTML = dots[slideIndex-1].alt;
	}

	