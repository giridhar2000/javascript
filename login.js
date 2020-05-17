var objPeople = [
	{
		username: "sam",
		password: "codify"
	},
	{ 
		username: "matt",
		password: "academy"
	},
	{ 
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert("login successful");
			break;
        }
        if(username != objPeople[i].username && password != objPeople[i].password){
            alert("check your username and password")
            break;
        }
        
	}
	var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
}
	});
}
}

