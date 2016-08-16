// JavaScript Document
var $overlay = $('<div id="overlay"></div>');
var $imageDiv = $('<div class="column"></div>');
var $figure = $('<figure class="fixedratio"></figure>');
var $caption = $('<figcaption class="caption"></figcaption>');

//Arrows
var $left = $('<div class="arrow-left"></div>');
var $right = $('<div class="arrow-right"></div>');

var imageArray = new Array ();
var totalImages = document.images.length;
var currentIndex; 
var currentImageIndex = 0;



for(var i = 0; i < totalImages; i++){
	currentIndex = i;
	imageArray[i] = document.images[currentIndex].src;
	
}

	// Previous and next buttons
	function prev() {
		
		if(currentImageIndex === 0){
			
			currentImageIndex = totalImages - 1;
		}
		else
		{
			
			currentImageIndex =	currentImageIndex - 1;
		}
		

		updateImage();
		
	}
	
	
	function next() {
		
		if(currentImageIndex === (totalImages-1)){
			
			currentImageIndex = 0;
		}
		else
		{
			
			currentImageIndex =	totalImages + 1;
		}
		
		updateImage();
		
		
	}
 

	function updateImage(){
			
		imageLocale	= '../Images/' + images[currentImageIndex];
		
	}



		//append overlay to body
	$("body").append($overlay);
		//append image DIV
	$overlay.append($imageDiv);	
	
	//append arrows to overlay
	$overlay.append($left);
	$overlay.append($right);
	
	
		//append figure to image div
	$imageDiv.append($figure);		
		
		
		//append caption to figure
	$figure.append($caption);	
	


	
	 $(".contentBox a").click(function( event ){
			
			event.preventDefault();
			
			//This will find the href link of a specific image. This will correspond with any link pressed
			var imageLocale = $(this).attr("href");
			
			//Selects the figure class
			var figureClass = document.querySelector('figure.fixedratio');
			
			//this will update the CSS attribute background image
			//$image.attr("src", imageLocale);
			
			figureClass.style.backgroundImage = "url('" + imageLocale + "')"  ;
			
			//show overlay
			$overlay.show(500);
			
			var captionText = $(this).children("img").attr("alt");	
			$caption.text(captionText);
			

			
			
			
			
			
	});
		
	
	
  
	
		
		
		//Hide Overlay after clicking
		$overlay.click(function(){
			
			$overlay.hide(500);
			
		});
			
	//Previous and Next functions

