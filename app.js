$(document).ready(function(){
	"use strict";

	var compteur = 0;

	function newlist(a){
		compteur++;
		$("ul").append('<li><div id="list'+compteur +'"><input class="check" data-box="list'+compteur +'" type="checkbox"><label>'+ a +'</label></div></li>');	
	}

	function newtache(){
		var input = $('#newlist').val();
		newlist(input);	

		function tachefaite(){
			var idCheck = $(this).data('box');
			var tache = $(this).is(":checked");
			if(tache){
				$('#'+idCheck).css("background", "green");
				
			} if(!tache){
				$('#'+idCheck).css("background", "white");
		
			}
			function filtre(){
				var all = $("#all").is(":checked");
				var fait = $('#fait').is(":checked");
				var pasFait = $('#pasFait').is(':checked');
				
				if(all){
				   ('li').show();
				} if(fait){
					$('#'+idCheck).parent('li').show();
					$('#'+idCheck).parent('li').hide();
				} if(pasFait){
					$('#'+idCheck).parent('li').hide();
				}
				console.log("coucou");
			}
				$('#all').click(filtre);
				$('#fait').click(filtre);
				$("#pasFait").click(filtre);
		}

		$(".check").click(tachefaite);
	}

	$('#addList').click(newtache);
});