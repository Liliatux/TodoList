$(document).ready(function(){	

	//alert("Bienvenue cher client");
	console.log("Bienvenue dans votre TodoList");

	//Ajout d'une tâche	
	$("form").on("submit", function(event){
		event.preventDefault();
		var input = $('#newlist').val();
		localStorage.setItem("form", input);
		$("ul").append('<li class="unchecked"><input class="check" type="checkbox"><label>'+ input +'</label></li>');
		console.log(localStorage.getItem("form"));
	});

	//Ajout des class Checked et uncheked
	$(".taches").on("change", ".check", function(){
		if($(this).is(":checked")){
			$(this).parent("li").removeClass("unchecked");
			$(this).parent("li").addClass("checked");
		} else{
			$(this).parent("li").addClass("unchecked");
			$(this).parent("li").removeClass("checked");
		}
	});

	//Filtre des tâhes
	$("select").on("change", function(){
		if($(this).val() == "all"){
			$("li").show();
		} else if($(this).val() == "pasFait"){
			$(".unchecked").show();
			$(".checked").hide();	
		} else if($(this).val() == "fait"){
			$(".unchecked").hide();
			$(".checked").show();
		}
	});

	//Ajout d'un paragraphe
	$("footer").append("<p></p>");
});