var numSquares = 6;

var color = generateRandomColor(6);
var squares = document.querySelectorAll(".square");
var pickedcolor = pickcolor();

var colordisplay = document.getElementById('colordisplay');
colordisplay.textContent = pickedcolor;

var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	numSquares = 3;
	this.classList.add("selected");
	hardBtn.classList.remove("selected");
	
	
	color = generateRandomColor(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++)
	{
		if(color[i])
			squares[i].style.background = color[i];
		else
			squares[i].style.display = "none";
	}
	h1.style.background = "steelblue";
});

hardBtn.addEventListener("click",function(){
	this.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	color = generateRandomColor(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	
	for(var i=0;i<squares.length;i++)
	{	
		squares[i].style.background = color[i];	
		squares[i].style.display = "block";
	}
	h1.style.background = "steelblue";
});


resetButton.addEventListener("click",function(){
	color = generateRandomColor(numSquares);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	for(var i=0;i<squares.length;i++)
		squares[i].style.background=color[i];
	h1.style.background = "steelblue";
	resetButton.textContent = "New Game";
});

for(var i=0;i<color.length;i++)
{
	squares[i].style.background=color[i];


	squares[i].addEventListener("click",function(){
		var clickedcolor = this.style.background;
		// console.log(clickedcolor);
		// console.log(pickedcolor);
		if(clickedcolor === pickedcolor)
		{
			message.textContent = "correct!";
			changeColor(clickedcolor);
			h1.style.background = clickedcolor;
			resetButton.textContent = "Play Again?";
		}
		else
		{
			this.style.background="#232323";
			message.textContent = "try again!"
		}	
	})
}

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
		squares[i].style.background = color;
}


function pickcolor()
{
	var x = Math.floor(Math.random() * color.length);
	return color[x];
}

function generateRandomColor(num)
{
	var a = [];
	for(var i=0;i<num;i++)
		a.push(randomColor());
	return a;
}

function randomColor()
{
	var r =  Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}