/* =============================================================================
  GENERAL
  ========================================================================== */

$(document).ready(function() {
	initNavi();
});



/* =============================================================================
  NAVIGATION
  ========================================================================== */
 
 
function initNavi() {
	var canvas_box = $("#canvas_content"),
		section_title = $("#section_title"),
		work_title = $("#work_title");
		
	
	$('nav a').click(function(e) {
		e.preventDefault();
	
		//Vars
		var navi_url = $(this).attr("href"),
			work_section_title = $(this).data("section"),
			work_work_title = $(this).data("title");
		
		//Title
		section_title.html(work_section_title);
		work_title.html(work_work_title);
		
		
		//Ajax call
		$.ajax({
		  	url: navi_url,
		 	type: 'GET',
		  	dataType: 'html',
		  	cache: false
		}).done(function( html ) {
		  	canvas_box.html(html);
		}).fail(function() { 
			canvas_box.html("I Broke The Dam!");
		});
	});
}







/* =============================================================================
  COVERS
  ========================================================================== */
  
//// Dillinger Escape Plan ////

function drawDEP() {  
	
	//// Vars ////
	var canvas_dep = document.getElementById("dep");  
	  
	  
	  
	  
	//// Triangle LEFT ////
	var tr_left = canvas_dep.getContext("2d");
	
	//Draw
	tr_left.beginPath();
	tr_left.moveTo(270, 10);
	tr_left.lineTo(270, 280);
	tr_left.lineTo(60, 440);
	tr_left.lineTo(270, 10);
	tr_left.closePath();
	
	//Fill (grad)
	var grd1 = tr_left.createLinearGradient(0, 0, 0, 500);
	grd1.addColorStop(0, "rgba(114, 128, 93, .5)");
	grd1.addColorStop(1, "rgba(224, 242, 200, .5)");
	tr_left.fillStyle = grd1;
	tr_left.fill();
	





	//// Triangle RIGHT ////
	var tr_right = canvas_dep.getContext("2d");
	
	//Draw
	tr_right.beginPath();
	tr_right.moveTo(330, 10);
	tr_right.lineTo(330, 280);
	tr_right.lineTo(540, 440);
	tr_right.lineTo(330, 10);
	tr_right.closePath();
	
	//Fill (grad)
	var grd2 = tr_left.createLinearGradient(0, 0, 0, 500);
	grd2.addColorStop(0, "rgba(105, 120, 139, .5)");
	grd2.addColorStop(1, "rgba(207, 216, 245, .5)");
	tr_left.fillStyle = grd2;
	tr_left.fill();
	





	//// Triangle BOTTOM ////
	var tr_bottom = canvas_dep.getContext("2d");
	
	//Draw
	tr_bottom.beginPath();
	tr_bottom.moveTo(80, 490);
	tr_bottom.lineTo(510, 490);
	tr_bottom.lineTo(300, 340);
	tr_bottom.lineTo(80, 490);
	tr_bottom.closePath();
	
	//Fill (grad)
	var grd3 = tr_bottom.createLinearGradient(0, 0, 0, 500);
	grd3.addColorStop(0, "rgba(255, 255, 255, .5)");
	grd3.addColorStop(1, "rgba(76, 123, 151, .5)");
	tr_bottom.fillStyle = grd3;
	tr_bottom.fill();



	//// Triangle TOP ////
	var tr_top = canvas_dep.getContext("2d");
	
	//Draw
	tr_top.beginPath();
	tr_top.moveTo(300, 50);
	tr_top.lineTo(500, 450);
	tr_top.lineTo(100, 450);
	tr_top.lineTo(300, 50);
	tr_top.closePath();
	
	//DropShadow
	tr_top.shadowOffsetX = 0;
	tr_top.shadowOffsetY = 0;
	tr_top.shadowBlur = 50;
	tr_top.shadowColor = "#000";
	
	//Fill (grad)
	var grd4 = tr_top.createLinearGradient(0, 0, 0, 500);
	grd4.addColorStop(0, "#5892A0");
	grd4.addColorStop(1, "#E7F4FA");
	tr_top.fillStyle = grd4;
	tr_top.fill();




	
	//// TEXT 1 ////
	var txt = canvas_dep.getContext("2d");
	
	//Write
	txt.fillStyle = "rgba(175, 198, 212, .8)";
	txt.font="1.5em Helvetica";
	txt.fillText("Dillinger Escape Plan", 80, 530);
	
	//DropShadow
	txt.shadowOffsetX = 0;
	txt.shadowOffsetY = 0;
	txt.shadowBlur = 50;
	txt.shadowColor = "#000";


	
	
	//// TEXT 2 ////
	var txt = canvas_dep.getContext("2d");
	
	//Write
	txt.fillStyle = "rgba(225, 246, 251, .3)";
	txt.font="1.5em Helvetica";
	txt.fillText("Ire Works", 80, 552);
	
	//DropShadow
	txt.shadowOffsetX = 0;
	txt.shadowOffsetY = 0;
	txt.shadowBlur = 50;
	txt.shadowColor = "#000";
	
	
}





//// Oh Sleeper ////

function drawOSL() {  

	//// Vars ////
	var canvas_osl = document.getElementById("osl"),  
		centerX = canvas_osl.width / 2,
	    centerY = canvas_osl.height / 2,
	    radius = 200; 
	  
	  
	  
	//// Outer circle ////
	var outer_circle = canvas_osl.getContext("2d");

	//Draw
    outer_circle.beginPath();
    outer_circle.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    outer_circle.closePath();
    
    //Style
    outer_circle.lineWidth = 15;
    outer_circle.strokeStyle = "rgb(172, 176, 161)";
    outer_circle.stroke();





	//// Triangle ////
	var tr = canvas_osl.getContext("2d");

	//Draw
	tr.beginPath();
	tr.moveTo(centerX, 220);
	tr.lineTo(475, 350);
	tr.lineTo(125, 350);
	tr.lineTo(centerX, 220);
	tr.closePath();

	//Style
	tr.lineWidth = 15;
	tr.strokeStyle = "rgb(172, 176, 161)";
	tr.stroke();

	
	
	
	//// Line ////
	var line = canvas_osl.getContext("2d");

	//Draw
	line.beginPath();
	line.moveTo(370, 270);
	line.lineTo(centerX, 480);
	line.lineTo(230, 270);
	
	//Style
	line.lineWidth = 15;
	line.strokeStyle = "rgb(172, 176, 161)";
	line.stroke();


}






//// TessaracT ////

function drawTES() {  

	//// Vars ////
	var canvas_tes = document.getElementById("tes"),  
		centerX = canvas_tes.width / 2,
	    centerY = canvas_tes.height / 2;
	  
	
	  
	//// Outer Square Top ////
	var os_top = canvas_tes.getContext("2d");
	
	
	//Draw
	os_top.beginPath();
	os_top.moveTo(centerX, 100);
	os_top.lineTo(500, 150);
	os_top.lineTo(centerX, 200);
	os_top.lineTo(100, 150);
	os_top.lineTo(centerX, 100);
	os_top.closePath();
	
	//Style
	os_top.lineWidth = 6;
	os_top.strokeStyle = "rgb(49, 52, 57)";
	os_top.stroke();
	
	
	
	
	
	//// Outer Square Bottom ////
	var os_bottom = canvas_tes.getContext("2d");
	
	
	//Draw
	os_bottom.beginPath();
	os_bottom.moveTo(centerX, 400);
	os_bottom.lineTo(500, 450);
	os_bottom.lineTo(centerX, 500);
	os_bottom.lineTo(100, 450);
	os_bottom.lineTo(centerX, 400);
	os_bottom.closePath();
	
	//Style
	os_bottom.lineWidth = 6;
	os_bottom.strokeStyle = "rgb(49, 52, 57)";
	os_bottom.stroke();
	
	
	
	
	
	
	//// Close Outer Square ////
	
	//// Line 1
	var os_line1 = canvas_tes.getContext("2d");
	
	//Draw
	os_line1.beginPath();
	os_line1.moveTo(centerX, 100);
	os_line1.lineTo(centerX, 500);
	os_line1.closePath();
	
	//Style
	os_line1.lineWidth = 6;
	os_line1.strokeStyle = "rgb(49, 52, 57)";
	os_line1.stroke();
	
	
	//// Line 2
	var os_line2 = canvas_tes.getContext("2d");
	
	//Draw
	os_line2.beginPath();
	os_line2.moveTo(100, 148);
	os_line2.lineTo(100, 452);
	os_line2.closePath();
	
	//Style
	os_line2.lineWidth = 6;
	os_line2.strokeStyle = "rgb(49, 52, 57)";
	os_line2.stroke();
	
	
	//// Line 3
	var os_line3 = canvas_tes.getContext("2d");
	
	//Draw
	os_line3.beginPath();
	os_line3.moveTo(500, 148);
	os_line3.lineTo(500, 452);
	os_line3.closePath();
	
	//Style
	os_line3.lineWidth = 6;
	os_line3.strokeStyle = "rgb(49, 52, 57)";
	os_line3.stroke();
	
	
	
	
	
	
	
	//// Inner square bottom ////
	
	//// Line 1
	var is_bottom = canvas_tes.getContext("2d");
	
	//Draw
	is_bottom.beginPath();
	is_bottom.moveTo(350, 460);
	is_bottom.lineTo(470, 305);
	is_bottom.lineTo(325, 270);
	is_bottom.lineTo(210, 420);
	is_bottom.lineTo(350, 460);
	is_bottom.closePath();
	
	//Style
	is_bottom.lineWidth = 5;
	is_bottom.strokeStyle = "rgb(49, 52, 57)";
	is_bottom.stroke();
	
	
	
	
	//// Inner square top ////
	
	//// Line 1
	var is_top = canvas_tes.getContext("2d");
	
	//Draw
	is_top.beginPath();
	is_top.moveTo(272, 338);
	is_top.lineTo(392, 183);
	is_top.lineTo(247, 148);
	is_top.lineTo(132, 298);
	is_top.lineTo(272, 338);
	is_top.closePath();
	
	//Style
	is_top.lineWidth = 5;
	is_top.strokeStyle = "rgb(49, 52, 57)";
	is_top.stroke();
	
	
	
	//// Close inner square ////
	
	//// Line 1
	var is_line1 = canvas_tes.getContext("2d");
	
	//Draw
	is_line1.beginPath();
	is_line1.moveTo(350, 460);
	is_line1.lineTo(272, 338);
	is_line1.closePath();
	
	//Style
	is_line1.lineWidth = 5;
	is_line1.strokeStyle = "rgb(49, 52, 57)";
	is_line1.stroke();
	
	
	
	//// Line 2
	var is_line2 = canvas_tes.getContext("2d");
	
	//Draw
	is_line2.beginPath();
	is_line2.moveTo(472, 305);
	is_line2.lineTo(393, 182);
	is_line2.closePath();
	
	//Style
	is_line2.lineWidth = 5;
	is_line2.strokeStyle = "rgb(49, 52, 57)";
	is_line2.stroke();
	
	
	
	
	//// Line 3
	var is_line3 = canvas_tes.getContext("2d");
	
	//Draw
	is_line3.beginPath();
	is_line3.moveTo(325, 270);
	is_line3.lineTo(247, 148);
	is_line3.closePath();
	
	//Style
	is_line3.lineWidth = 5;
	is_line3.strokeStyle = "rgb(49, 52, 57)";
	is_line3.stroke();
	
	
	
	
	
	//// Line 4
	var is_line4 = canvas_tes.getContext("2d");
	
	//Draw
	is_line4.beginPath();
	is_line4.moveTo(210, 420);
	is_line4.lineTo(132, 298);
	is_line4.closePath();
	
	//Style
	is_line4.lineWidth = 5;
	is_line4.strokeStyle = "rgb(49, 52, 57)";
	is_line4.stroke();
	
	
	
	
	
	//// Connect Squares ////
	
	//// Line 1
	var c_line1 = canvas_tes.getContext("2d");
	
	//Draw
	c_line1.beginPath();
	c_line1.moveTo(350, 460);
	c_line1.lineTo(500, 449);
	c_line1.closePath();
	
	//Style
	c_line1.lineWidth = 5;
	c_line1.strokeStyle = "rgb(49, 52, 57)";
	c_line1.stroke();
	
	
	
	
	
	//// Line 2
	var c_line2 = canvas_tes.getContext("2d");
	
	//Draw
	c_line2.beginPath();
	c_line2.moveTo(471, 305);
	c_line2.lineTo(496, 150);
	c_line2.closePath();
	
	//Style
	c_line2.lineWidth = 5;
	c_line2.strokeStyle = "rgb(49, 52, 57)";
	c_line2.stroke();
	
	
	
	
	
	//// Line 3
	var c_line3 = canvas_tes.getContext("2d");
	
	//Draw
	c_line3.beginPath();
	c_line3.moveTo(392, 183);
	c_line3.lineTo(centerX, 100);
	c_line3.closePath();
	
	//Style
	c_line3.lineWidth = 5;
	c_line3.strokeStyle = "rgb(49, 52, 57)";
	c_line3.stroke();
	
	
	
	
	
	
	//// Line 4
	var c_line4 = canvas_tes.getContext("2d");
	
	//Draw
	c_line4.beginPath();
	c_line4.moveTo(247, 148);
	c_line4.lineTo(100, 150);
	c_line4.closePath();
	
	//Style
	c_line4.lineWidth = 5;
	c_line4.strokeStyle = "rgb(49, 52, 57)";
	c_line4.stroke();
	
	
	
	
	//// Line 5
	var c_line5 = canvas_tes.getContext("2d");
	
	//Draw
	c_line5.beginPath();
	c_line5.moveTo(131, 298);
	c_line5.lineTo(104, 450);
	c_line5.closePath();
	
	//Style
	c_line5.lineWidth = 5;
	c_line5.strokeStyle = "rgb(49, 52, 57)";
	c_line5.stroke();
	
	
	
	//// Line 6
	var c_line6 = canvas_tes.getContext("2d");
	
	//Draw
	c_line6.beginPath();
	c_line6.moveTo(210, 420);
	c_line6.lineTo(centerX, 500);
	c_line6.closePath();
	
	//Style
	c_line6.lineWidth = 5;
	c_line6.strokeStyle = "rgb(49, 52, 57)";
	c_line6.stroke();
	
	
	
	//// Helpers ////
	/*
	//// Line 1
	var h1 = canvas_tes.getContext("2d");
	
	//Draw
	h1.beginPath();
	h1.moveTo(0, 100);
	h1.lineTo(600, 100);
	h1.closePath();
	
	//Style
	h1.lineWidth = 1;
	h1.strokeStyle = "rgba(0, 255, 255, .2)";
	h1.stroke();
	
	
	
	//// Line 2
	var h2 = canvas_tes.getContext("2d");
	
	//Draw
	h2.beginPath();
	h2.moveTo(0, 500);
	h2.lineTo(600, 500);
	h2.closePath();
	
	//Style
	h2.lineWidth = 1;
	h2.strokeStyle = "rgba(0, 255, 255, .2)";
	h2.stroke();
	
	
	//// Line 3
	var h3 = canvas_tes.getContext("2d");
	
	//Draw
	h3.beginPath();
	h3.moveTo(0, 150);
	h3.lineTo(600, 150);
	h3.closePath();
	
	//Style
	h3.lineWidth = 1;
	h3.strokeStyle = "rgba(0, 255, 255, .2)";
	h3.stroke();
	
	
	//// Line 4
	var h4 = canvas_tes.getContext("2d");
	
	//Draw
	h4.beginPath();
	h4.moveTo(0, 200);
	h4.lineTo(600, 200);
	h4.closePath();
	
	//Style
	h4.lineWidth = 1;
	h4.strokeStyle = "rgba(0, 255, 255, .2)";
	h4.stroke();
	
	
	
	
	//// Line 5
	var h5 = canvas_tes.getContext("2d");
	
	//Draw
	h5.beginPath();
	h5.moveTo(0, 300);
	h5.lineTo(600, 300);
	h5.closePath();
	
	//Style
	h5.lineWidth = 1;
	h5.strokeStyle = "rgba(0, 255, 255, .2)";
	h5.stroke();
	
	
	//// Line 6
	var h6 = canvas_tes.getContext("2d");
	
	//Draw
	h6.beginPath();
	h6.moveTo(0, 400);
	h6.lineTo(600, 400);
	h6.closePath();
	
	//Style
	h6.lineWidth = 1;
	h6.strokeStyle = "rgba(0, 255, 255, .2)";
	h6.stroke();
	
	
	//// Line 7
	var h7 = canvas_tes.getContext("2d");
	
	//Draw
	h7.beginPath();
	h7.moveTo(0, 450);
	h7.lineTo(600, 450);
	h7.closePath();
	
	//Style
	h7.lineWidth = 1;
	h7.strokeStyle = "rgba(0, 255, 255, .2)";
	h7.stroke();
	
	
	
	//// Line 8
	var h8 = canvas_tes.getContext("2d");
	
	//Draw
	h8.beginPath();
	h8.moveTo(100, 0);
	h8.lineTo(100, 600);
	h8.closePath();
	
	//Style
	h8.lineWidth = 1;
	h8.strokeStyle = "rgba(0, 255, 255, .2)";
	h8.stroke();
	
	
	//// Line 9
	var h9 = canvas_tes.getContext("2d");
	
	//Draw
	h9.beginPath();
	h9.moveTo(300, 0);
	h9.lineTo(300, 600);
	h9.closePath();
	
	//Style
	h9.lineWidth = 1;
	h9.strokeStyle = "rgba(0, 255, 255, .2)";
	h9.stroke();
	
	
	
	//// Line 10
	var h10 = canvas_tes.getContext("2d");
	
	//Draw
	h10.beginPath();
	h10.moveTo(500, 0);
	h10.lineTo(500, 600);
	h10.closePath();
	
	//Style
	h10.lineWidth = 1;
	h10.strokeStyle = "rgba(0, 255, 255, .2)";
	h10.stroke();
	
	
	
	
	//// Line 11
	var h11 = canvas_tes.getContext("2d");
	
	//Draw
	h11.beginPath();
	h11.moveTo(200, 0);
	h11.lineTo(200, 600);
	h11.closePath();
	
	//Style
	h11.lineWidth = 1;
	h11.strokeStyle = "rgba(0, 255, 255, .2)";
	h11.stroke();
	
	
	
	//// Line 12
	var h12 = canvas_tes.getContext("2d");
	
	//Draw
	h12.beginPath();
	h12.moveTo(400, 0);
	h12.lineTo(400, 600);
	h12.closePath();
	
	//Style
	h12.lineWidth = 1;
	h12.strokeStyle = "rgba(0, 255, 255, .2)";
	h12.stroke();
	*/
	
}

