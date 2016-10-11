$(document).ready(function(){

	//alert("Bienvenue");
	console.log("Bienvenue chez client");

	var compteur = 0;

	function newlist(a){
		compteur++;
		$("ul").append('<li><div id="list'+compteur +'"><input class="check" data-box="list'+compteur +'" type="checkbox"><label>'+ a +'</label></div></li>');	
	}

	function newtache(){
		var input = $('#newlist').val();
		newlist(input);	

		function tachefaite(){
			var checked = $(this).is(":checked");
			var idCheck = $(this).data('box');

			if(checked){
				$('#'+idCheck).css("background", "green");			
			} else if(!checked){
				$('#'+idCheck).css("background", "red");
			}

			$('#all').click(function(){
				$('#'+idCheck).parent('li').show();
			});

			$("#pasFait").click(function(){
				if(checked){
					$('#'+idCheck).parent("li").hide();
				}
			});

			$('#fait').click(function(){
				if(!checked){
					$('#'+idCheck).parent('li').hide();
				}
			});
		}

		$(".check").click(tachefaite);
	}

	$('#addList').click(newtache);

});