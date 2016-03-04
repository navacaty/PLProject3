$(document).ready(function()  {
	$("#employee").click(function() {

		$(this).next().toggleClass("employee");
		if ($(this).next().attr("class") == "employee") {
			$("div.employee").show();



		}


	});
		$("#customer").click(function() {

			$(this).next().toggleClass("customer");
			if ($(this).next().attr("class") == "customer") {
				$("div.customer").show();

			}
		});
	$("#submit").click(function() {
		//var fn = $("fn").val();
		//$(this).text(fn);
		alert("alert");
	});

});
