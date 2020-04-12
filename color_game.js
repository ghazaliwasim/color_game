var numSq=6;
var colors= generateRandomColors(numSq);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var reset=document.querySelector("#reset");
var h1=document.querySelector("h1");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var message=document.querySelector("#message");
var colorDisplay= document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
reset.addEventListener("click", function(){
	//generate all new colors
	colors=generateRandomColors(numSq);

	//pick a new random color from arr
	pickedColor=pickColor();
	//chmage colors of squares
	colorDisplay.textContent= pickedColor;
	this.textContent="new colors";
	message.textContent="";
	for(var i=0;i< squares.length;i++){
	//add initial colors
	squares[i].style.backgroundColor= colors[i];

	

	}
	h1.style.backgroundColor="steelblue";
});
easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.add("selected");
	numSq=3;
	colors=generateRandomColors(numSq);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i< squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor=colors[i];
		}
		else
		{
			squares[i].style.display="none";
		}
	}
});
hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.add("selected");
	numSq=6;
	colors=generateRandomColors(numSq);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i< squares.length;i++)
	{
			squares[i].style.backgroundColor=colors[i];
	        squares[i].style.display="block";	
		
	}
});
for(var i=0;i< squares.length;i++){
	//add initial colors
	squares[i].style.backgroundColor= colors[i];
	//add final colors
	squares[i].addEventListener("click",function(){
		//grab a color of clicked square
		var clickedColor= this.style.backgroundColor;
		//compare color to pickedcolor

		if(clickedColor === pickedColor)
		{
			message.textContent="correct";
			reset.textContent="play again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;

		}
		else
		{
			this.style.backgroundColor ="#232323";
			message.textContent="try again!";
		}
	});
}
function changeColors(color)
{
	//loop through all squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
	//change each color to match given color

}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	//make an array
	var arr=[]
	//add num random colors to an array
	for(var i=0;i<num;i++)
	{
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	//pickk a red from o -255
	var r= Math.floor(Math.random() * 256);
	//pick a green
	var g= Math.floor(Math.random() * 256);
	//pick a b lue
	var b= Math.floor(Math.random() * 256);
	return "rgb("+ r + ", " + g +", " + b + ")";
}