$(document).ready(function()  {
	$("headlines c_e").change(function()  {
		alert("hello");

		*/$(this).prev().toggleClass("hide");
			if($(this).prev().attr("class") != "hide"){
				//$("div.hide").show();
				//$(this).prev().show();
				//$(this).replaceWith( "<a href=\"#\">Show Less</a>" );
				//$( "a").text( "<a href="#">Show Less</a>" );
				$(this).text( "Show Less" );
			}
			else{
				//$(this).prev().hide();
				//$(this).replaceWith( "<a href=\"#\">Show More</a>" );
				$(this).text( "Show More" );

			}/*

	});
});