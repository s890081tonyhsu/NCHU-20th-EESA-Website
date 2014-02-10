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
		$("#Inner").load("views/"+Detail+".html").queue(function(){$(this).slideDown().dequeue();});;
	});
}
$(document).ready(SetPage);

function InitPage(){
	$("#menuBar .menu a").each(function(){
		$(this).removeClass("active");
	});
	$("body").removeClass();
	$("#Inner").slideUp("fast").queue(function(){$(this).text("").dequeue();});
	$("#cover").fadeIn();
}
