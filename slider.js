
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
let resize  = e =>
{
coord = redBox.getBoundingClientRect();
}
let move = e =>
{
	if(coord.x + coord.width - e.clientX > 0 && e.clientX >= coord.x && coord.y + coord.height - e.clientY > 0 && e.clientY >= coord.y)
	{
		if(count < 250)
		{
		redBox.style.backgroundColor = "blue";
		text.innerHTML = "CHANGED ON \n" + redBox.style.backgroundColor;
		}
		if(count < 500 && count > 250)
		{
		redBox.style.backgroundColor = "yellow";
		text.innerHTML = "CHANGED ON \n" + redBox.style.backgroundColor;
		}
		if(count < 750 && count > 500)
		{
		redBox.style.backgroundColor = "green";
		text.innerHTML = "CHANGED ON \n" + redBox.style.backgroundColor;
		}
		if(count > 1000)
		{
			count = 0;
		}
		count += 2;
	
	}
}
addEventListener('mousemove', move);
addEventListener('resize', resize);