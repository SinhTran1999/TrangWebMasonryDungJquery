 $(function(){
 	//viet cho nut
 	$("nav ul li a").click(function(event) {
 		// phat hien data class cua nut duoc click
 		var danhmuc = $(this).data("class");
 		var ten = $(this).text();// $(this).text() la lay noi dung text ben trong mot the

 		$("section h1").text(ten);//text(ten) la dat ten,abc,..., vao trong mot the nao do

 		$(".content ul li").each(function() {
 			if($(this).hasClass(danhmuc))
 			{
 				$(this).show(300);
 			}
 			else
 			{
 				$(this).hide(300);
 			}
 		});
 		return false;
 	});
})  
 