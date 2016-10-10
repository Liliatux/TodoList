$(document).ready(function(){
	"use strict";

	function newlist(a){
		$("ul").append('<div id="list"><li><input id="check" type="checkbox"><label>'+a+'</label></li></div>');		
	}

	function newtache(){
		var input = $('#newlist').val();
		newlist(input);	

		function tachefaite(){
			var tache = $("#check").is(":checked");
			if(tache){
				$("#list").css("background", "green");
			} else{
				$("#list").css("background", "white");
			}
		}

		$("#check").click(tachefaite);

	}

	$('#addList').click(newtache);
});