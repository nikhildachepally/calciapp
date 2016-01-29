var output= "0";
//var k=false;

 function display1(a){
	 if(output==0 )
		output = a;
 	else
 		output += a;
	document.calculator.display.value = output;

	
}



function operatorAdd(){
	if(output !== "0" && output.indexOf("+")== -1 && output.indexOf("-")== -1 && output.indexOf("*")== -1 && output.indexOf("/")== -1  )
				
				 
			      display1('+');
}

function operatorSub(){
	if(output !== "0" && output.indexOf("-")== -1 && output.indexOf("*")== -1 && output.indexOf("/")== -1 && output.indexOf("+")== -1 )
				
				 
			      display1('-');
}
function operatorMult(){
	if(output !== "0" && output.indexOf("*")== -1 && output.indexOf("/")== -1 && output.indexOf("+")== -1 && output.indexOf("-")== -1)
				
				 
			      display1('*');
}
function operatorDiv(){
	if(output !== "0" && output.indexOf("/")== -1 && output.indexOf("+")== -1 && output.indexOf("-")== -1 && output.indexOf("*")== -1)
				
				 
			      display1('/');
}



	
function result(){
	var a = output;
	output = eval(output);

	
	document.calculator.display.value = output;
	

	
	
	output = "0";
	
}	
function erase(){
	
	output = "";
	document.calculator.display.value = output;
}




	function dot(){
		var k = false;
	if( k == false){
		if(output == 0 || output.indexOf(".") == -1){
		display1('.');
		k = true;
		}

		else {
			k=false;
		}
	}


}





