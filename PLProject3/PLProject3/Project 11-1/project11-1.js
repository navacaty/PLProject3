$(document).ready(function()  {
	$("#customer").click(function() {
		$(this).next().toggleClass("customer");
		if ($(this).next().attr("class") == "customer") {
			$("div.customer").show();
		}
	});
	$("#employee").click(function() {
		$(this).next().toggleClass("employee");
		if ($(this).next().attr("class") == "employee") {
			$("div.employee").show();

		}


	});
	$("#submit_e").click(function() {
		var fn = $("#e_fn").val();
		var ln = $("#e_ln").val();
		var ea = $("#e_email").val();
		var ssn = $("#ssn").val();
		document.writeln("First name: " + fn + "<BR>");
		document.writeln("Last name: " + ln + "<BR>");
		document.writeln("Email address: " + ea + "<BR>");
		document.writeln("SSN: " + ssn + "<BR>");
		document.writeln("<a href = \"./index.html\">GO BACK NOW </a>");
		});
	$("#submit_c").click(function() {
		var fn = $("#c_fn").val();
		var ln = $("#c_ln").val();
		var ea = $("#c_email").val();
		var cn = $("#cn").val();
		document.writeln("First name: " + fn + "<BR>");
		document.writeln("Last name: " + ln + "<BR>");
		document.writeln("Email address: " + ea + "<BR>");
		document.writeln("Customer number: " + cn + "<BR>");
		document.writeln("<a href = \"./index.html\">GO BACK NOW </a>");
	});

});
