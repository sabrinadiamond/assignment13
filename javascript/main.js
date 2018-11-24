$(document).ready(function(){
	var x = event.keyCode;
	$("#response").keypress(function(event){
		if(x == 13){
			var searchTerm = $("#input").val();
			$("<p>").append();
			$.ajax({
				'url': "https://api.adviceslip.com/advice/search/{query}",
				'type': "GET",
				'dataType': "JSON",
				'data': {
					'api-key': "10b590732f184c9190f0df6e468f7e8d",
					'q': searchTerm
				},
				success: function(data){
					console.log(data);
					var advice = "" ;
					for(var i=0; i<advice.length; i++){
						if(data.response.docs[i].headline.main != searchTerm) {
							var newHeader = $("<h1>" + data.response.docs[i].headline.main + "</h1>");
							$('body').append(newHeader);
						}
					}

				},
				error: function(data, textStatus, errorThrown) {
		        	console.log("oh no!")
		            console.log(errorThrown);
		        }
			});
		}
	

	
});


});