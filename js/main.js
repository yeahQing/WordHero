function clickOptions(index){
        var answer = document.getElementsByName("answer");
        var question_word = document.getElementById("question_word").innerText;
        var score = document.getElementById("score").innerHTML;
        
        for (i = 0; i < answer.length; i++) {
            if(index == i+1){
                var str = answer[i].innerText;
                var opt = str.split(":");
                checkCorrectOption(question_word,opt[1],answer[i]);
            }
        }
}

function checkCorrectOption(question,answer,current_option){
    var url = "http://localhost:8080/Web_001/CheckCorrectOption?question="+question+"&answer="+answer;
    var xmlhttp = new XMLHttpRequest();
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {	
        	if(xmlhttp.status == 200){
        		getUserScore();
        		current_option.setAttribute("style","background-color: #C9F4EC;");
        		setTimeout(restart_Animation,1000);
        		
        	}else if(xmlhttp.status == 201){
        		current_option.setAttribute("style","background-color: #FFCCCC;");
        		setTimeout(restart_Animation,1000);
        	}

        }
    }
    
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}


function restart_Animation(){
	location.reload();
}

function onSubmit_forLogin(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "http://localhost:8080/Web_001/loginServlet";
    var data = "username="+username+"&"+"password="+password;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
        	if(xmlhttp.status == 200){
        		window.location.href="index.html";
        	} else if(xmlhttp.status == 201){
        		var welcome = document.getElementById("welcome");
        		welcome.setAttribute("style","color:#EF5350");
                welcome.innerHTML =  xmlhttp.responseText;
        	}

        }
    }
    
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
}

function onSubmit_forRegister(){
	 	var username = document.getElementById("r_username").value;
	    var password = document.getElementById("r_password").value;

	    var url = "http://localhost:8080/Web_001/Register";
	    var data = "username="+username+"&"+"password="+password;
	    var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange=function()
	    {
	        if (xmlhttp.readyState==4)
	        {
	        	if(xmlhttp.status == 200){
	        		window.location.href="login.html";
	        	} else if(xmlhttp.status == 201){
	        		var welcome = document.getElementById("welcome");
	        		welcome.setAttribute("style","color:#EF5350");
	                welcome.innerHTML =  xmlhttp.responseText;
	        	}

	        }
	    }
	    
	    xmlhttp.open("POST",url,true);
	    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	    xmlhttp.send(data);
}

function onSubmit_forUpdate(){
 	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var mobile = document.getElementById("mobile").value;
    
    var url = "http://localhost:8080/Web_001/UpdateUser";
    var data = "username="+username+"&"+"password="+password+"&"+"mobile="+mobile;
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
        	if(xmlhttp.status == 200){
        		window.location.href="index.html";
        	} else if(xmlhttp.status == 201){
        		var welcome = document.getElementById("welcome");
        		welcome.setAttribute("style","color:#EF5350");
                welcome.innerHTML =  xmlhttp.responseText;
        	}

        }
    }
    
    xmlhttp.open("POST",url,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
}

function loadUserData(){
	  var url = "http://localhost:8080/Web_001/UpdateUser?action=getUserData";
	    var xmlhttp = new XMLHttpRequest();

	    xmlhttp.onreadystatechange=function()
	    {
	        if (xmlhttp.readyState==4)
	        {
	        	if(xmlhttp.status == 200){
	        		var responseText = xmlhttp.responseText.split(";");
	        		document.getElementById("username").value = responseText[0];
	        		document.getElementById("password").value = responseText[1];
	        		document.getElementById("mobile").value = responseText[2];
	        	} 
	        }
	    }
	    
	    xmlhttp.open("GET",url,true);
	    xmlhttp.send(null);
}

function getUserName(){
    var url = "http://localhost:8080/Web_001/GetUserData";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
        	if(xmlhttp.status == 200){
        		var responseText = xmlhttp.responseText.split(";");
        		document.getElementById("username").innerHTML = responseText[0];
        		document.getElementById("score").innerHTML = responseText[1];
        	} 
        }
    }
    
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}

function getUserScore(){
	var url = "http://localhost:8080/Web_001/GetUserData";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
        	if(xmlhttp.status == 200){
        		var responseText = xmlhttp.responseText.split(";");
        		document.getElementById("score").innerHTML = responseText[1];
        	} 
        }
    }
    
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}

function getQuestionLib(){
    var url = "http://localhost:8080/Web_001/GetQuestionLibs";
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4)
        {
        	if(xmlhttp.status == 200){
        		var responseText = xmlhttp.responseText.split(";");
        		document.getElementById("question_word").innerHTML = responseText[0];
        		for(var i = 1;i < responseText.length;i++){
        			var option = "option_"+i;
        			document.getElementById(option).innerHTML = responseText[i];
        		}
        		
        	} 

        }
    }
    
    xmlhttp.open("GET",url,true);
    xmlhttp.send(null);
}
