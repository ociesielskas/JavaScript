window.addEventListener('DOMContentLoaded', function () {
    //When the page structure is loaded...
	

});
function validate(){
	var x = document.getElementsByName('oddnumber')[0].value;
	var y = document.getElementsByName('evennumber')[0].value;
	var result = oddnumber(x);
	var result2 = evennumber(y);
	if(result){
		document.getElementsByName('oddnumber')[0].setAttribute("style", "border:2px solid blue;");
	}else{
		document.getElementsByName('oddnumber')[0].setAttribute("style", "border:2px solid red;");
	}
	if(result2){
		document.getElementsByName('evennumber')[0].setAttribute("style", "border:2px solid red;");
	}else{
		document.getElementsByName('evennumber')[0].setAttribute("style", "border:2px solid blue;");
	}
	
}

function oddnumber(number){
	if(number %2 === 1){
		return true;
	}else{
		return false;
	}
}
function evennumber(number){
	if(number %2 === 0){
		return true;
	}else{
		return false;
	}
}