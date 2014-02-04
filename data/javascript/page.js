function SetPage(){
	$("#menuBar .menu a").click(function(){
		$("#menuBar .menu a").each(function(){
			$(this).removeClass("active");
		});
		$(this).addClass("active");
		var Detail = $(this).attr("page");
		$("#Inner").text("");
		$("#Inner").load("views/"+Detail+".html");
	});
}
$(document).ready(SetPage);
