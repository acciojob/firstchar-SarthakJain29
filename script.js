function firstChar(text) {
   let res = " ";	
   for(let i=0; i<text.length; i++){
	   if(text[i] !== " ") res = text[i];
	   break;
   }
   return res
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
