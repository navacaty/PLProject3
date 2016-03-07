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
		$().text("<table border = \"0\"> <tr> <td> first name: </td>
		<td> <input type = \"text"\ id= \"e_fn\" size = \"20\" /> </td>
			</tr>

			<tr>
			<td> last name:  </td>
		<td> <input type = \"text"\ id = \"e_ln\" size = "20" /> </td>
			</tr>

			<tr>
			<td> email address: </td>
		<td> <input type = \"text"\ id = "e_email" size = "20" /> </td>
			</tr>

			<tr>
			<td> Social security number: </td>
		<td> <input type = \"text"\ id = "ssn" size = "20" /> </td>
			</tr>
			</table>");
	});

});
