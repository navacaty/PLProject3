$(document).ready(function()  {
	$("#image_list a").each(function()  {
		//Variable creation
		var imageUrl = $(this).attr("href");
		var caption = $(this).attr("title");
	
		var swappedImage = new Image();
		swappedImage.src = imageUrl;
		//alert(swappedImage.src);		

//Event handler for the links 
	$("this").click(function(evt)  {
	
		$("#image").attr("src",imageUrl);
		$("#caption").text(caption);
	
		evt.preventDefault();
		});
	});
	("li:first-child a").focus();
});