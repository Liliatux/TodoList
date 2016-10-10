$(document).ready(function(){
	"use strict";

	function newlist(a){
		$("ul").append('<li><input id="fait" type="checkbox"><span>'+a+'</span></li>');		
	}

	function newtache(){
		var input = $('#newlist').val();
		newlist(input);	

		function tachefaite(){
			var tache = $("#fait").is(":checked");
			if(tache){
				$("span").css("color", "green");
			} else{
				$("span").css("color", "black");
			}
		}
	}


	$('#addList').click(newtache);
});