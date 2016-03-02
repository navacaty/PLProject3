$(document).ready(function()  {
	$("#image_list a").each(function()  {
		//Variable creation
		
	
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
		//alert(swappedImage.src);		
	});
//Event handler for the links 
	$("#image_list a").click(function(evt)  {

		
		var imageUrl = $(this).attr("href");
		var caption = $(this).attr("title");
	
		$("#image").attr("src",imageUrl);
		$("#caption").text(caption);
	
		evt.preventDefault();
		
	});
	$("li:first-child a").focus();
});