function SetPage(){
	$("#menuBar .menu a").click(function(){
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
