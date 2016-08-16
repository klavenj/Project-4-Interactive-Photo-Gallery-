// JavaScript Document\
var $lg = $('.contentBox');



$('#image-gallery').lightGallery({
    thumbnail:false,
    
});

 
 
 //This will test for the functions
 
$('#search-picture').keyup(function(){
	//Get Value of search box
	var query = $('#search-picture').val();
	
	//Compare query to image
	
	//if the query is not blank hide the images then cycle through each image and match the search value with the alt value of the image.
	if( query !== "")
	{
		//Hide all the images
		$('.image img').hide();	
		
		//Then cycle through each image to find a match
		$('.image img').each(function(){
				//alt value
				var alt = $(this).attr('alt').toLowerCase();
				
				//compare the alt to the query
				if(alt.indexOf(query)>=0){
					$(this).show();	
				}
				
		});
		
	}
	
	else
	{
		$('.image img').show();
						
	}
	
	
});