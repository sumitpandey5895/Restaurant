var h =function(){

$(".buy_now").click(function() {
    $('html,body').animate({
        scrollTop: $(".footer-top-area").offset().top},
        'slow');
});




$(".lunch").click(function(){
			
			var l = document.getElementById("ele").childElementCount;
			console.log(l);
			for(var i=0;i<l;i++){
				var p = document.getElementById(i);
			while (p.firstChild) {
    			p.removeChild(p.firstChild);
}	}

	$.ajax({url:'https://acadstaging.com/py/udaan/project?meal=lunch&project_name=restaurant',type:'GET',success:function(result){
		var g = (result["lunch"]);
		console.log(g);
		for (var i=0;i<g.length;i++){
			 var atag = document.createElement('a');
			 atag.setAttribute('href',"#");
			 atag.setAttribute('color',"#555");
			 atag.innerHTML = (g[i]['name']);


			var img = document.createElement("img");
			img.setAttribute('src',g[i]["image"]);
			console.log(img);
			var price = document.createElement('p');
			var node2 = document.createTextNode(g[i]["price"]+" Rs");
			price.appendChild(node2);

			document.getElementById(i).appendChild(img);
			document.getElementById(i).appendChild(atag);
			document.getElementById(i).appendChild(price);		
		};}});
});





$(".dinner").click(function(){
			
			var l = document.getElementById("ele").childElementCount;
			console.log(l);
			for(var i=0;i<l;i++){
				var p = document.getElementById(i);
			while (p.firstChild) {
    			p.removeChild(p.firstChild);
}	}

	$.ajax({url:'https://acadstaging.com/py/udaan/project?meal=breakfast&project_name=restaurant',type:'GET',success:function(result){
		var g = (result["breakfast"]);
		for (var i=0;i<g.length;i++){

		var atag = document.createElement('a');
			 atag.setAttribute('href',"#");
			 atag.innerHTML = (g[i]['name'])


		var img = document.createElement("img");
		img.setAttribute('src',g[i]["image"]);
		console.log(img);
		var price = document.createElement('p');
		var node2 = document.createTextNode(g[i]["price"]+" Rs");
		price.appendChild(node2);

		document.getElementById(i).appendChild(img);
		document.getElementById(i).appendChild(atag);
		document.getElementById(i).appendChild(price);		
		};}});
});





	$("#sub").click(function(){
		var a = $('#name').val();
 		var b = $('#email').val();
 		var c = $('#phone').val();
 		var d = $('#guest').val();
 		var e = $('#datepicker').val();
 		var f = $('#time').val();
 		var g = $('#message').val();

 		console.log(a);
 		console.log(b);
 		console.log(c);
 		console.log(d);
 		console.log(e);
 		console.log(f);
 		console.log(g);
		
		$.ajax({
			url:"https://acadstaging.com/py/udaan/project",
	        type: "POST",
	        data: {"name":a,"email_id":b,"contact_number":c,"message":g,"date":e,"guests":d} ,
	        success:function(result){ 
	        	console.log(result); 
	        } 
		});
	});
}



