function SetPage(){
	$("#menuBar .menu a").click(function(){
		 $("#cover").fadeOut(); 
		$("#menuBar .menu a").each(function(){
			$(this).removeClass("active");
		});
		$("body").removeClass();
		$(this).addClass("active");
		var Detail = $(this).attr("page");
		$("body").addClass(Detail);
		$("#Inner").text("");
		$("#Inner").load("views/"+Detail+".html");
	});
}
$(document).ready(SetPage);

function InitPage(){
	$("#menuBar .menu a").each(function(){
		$(this).removeClass("active");
	});
	$("body").removeClass();
	$("#Inner").text("");
	$("#cover").fadeIn();
}
