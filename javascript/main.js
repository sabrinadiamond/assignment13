$(document).ready(function(){
	$("#input").keypress(function(event){
		var x = event.keyCode;
		if(x == 13){
			var searchTerm = $("#input").val();
			$.ajax({
				'url': "https://api.adviceslip.com/advice",
				'type': "GET",
				'dataType': "JSON",
				'data': {
					'api-key': "10b590732f184c9190f0df6e468f7e8d",
					'q': searchTerm
				},
				success: function(data){
					$("#response").html(data.slip.advice);

				},
				error: function(data, textStatus, errorThrown) {
		        	console.log("oh no!")
		            console.log(errorThrown);
		        }
			});
		}
	

	
});


});