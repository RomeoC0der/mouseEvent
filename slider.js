
/*let palindrom = str =>
{
	
	str = str.toLowerCase();
	return str == str.split('').reverse().join('');
}



console.log(palindrom("lol"));

*/
let redBox = document.querySelector('.box');
let coord = redBox.getBoundingClientRect();
let text = document.querySelector('.text');
let count   = 0;
let body = document.getElementsByTagName('body');
let windWidth = window.innerWidth;
let windHeight = window.innerWHeight;
let h2 = document.getElementById('h2');

let resize  = e =>
{
coord = redBox.getBoundingClientRect();
 windWidth = window.innerWidth;
 windHeight = window.innerHeight;
redBox.style.width = windWidth/2 + 'px';
redBox.style.height = windHeight/2 + 'px';
redBox.style.margin = '0 auto';
text.style.fontSize = (windWidth/2)/10 + 'px';
}

let step = 250;


text.style.fontSize = (windWidth/2)/10 + 'px';
redBox.style.width = windWidth/2 + 'px';
redBox.style.height = windHeight/2 + 'px';




let move = e =>
{
	
	if(coord.x + coord.width - e.clientX > 0 && e.clientX >= coord.x && coord.y + coord.height - e.clientY > 0 && e.clientY >= coord.y)
	{
		if(count < 250)
		{
		redBox.style.backgroundColor = "blue";
		text.innerHTML = "CHANGED ON \n" + redBox.style.backgroundColor;
		step = 250;
		}
		if(count < 500 && count > 250)
		{
		redBox.style.backgroundColor = "yellow";
		text.innerHTML = "CHANGED ON \n" + redBox.style.backgroundColor;
	step = 500;
		}
		if(count < 750 && count > 500)
		{
		redBox.style.backgroundColor = "green";
		text.innerHTML = "CHANGED ON \n" + redBox.style.backgroundColor;
		step = 1000;
		}
		if(count > 1000)
		{
			count = 0;
			step = 250;
		}

		count += 2;
	h2.innerHTML = parseInt(count/step * 100) + '%';
	}
}
addEventListener('mousemove', move);
addEventListener('resize', resize);
