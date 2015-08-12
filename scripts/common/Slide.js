/*
function regenerate() 
	{
		window.location.reload();
	}

function regenerate2() 
	{
		if (document.layers)
		setTimeout("window.onresize=regenerate", 400);
	}
	
window.onload = regenerate2;
*/

if (document.all) 
	{
	document.write('</div>');
	slideMenu = document.all.menuIn.style;
	boundryR = 0;
	boundryL = -160;
	}
else 
	{
	slideMenu = document.layers.menuOut;
	boundryR = 160;
	boundryL = 10;
	}
	
function pull() 
	{
	if (window.drawMenu)
	clearInterval(drawMenu);
	pullMenu = setInterval("pullEngine()", 10);
	}
	
function draw() 
	{
	clearInterval(pullMenu);
	drawMenu = setInterval("drawEngine()", 10);
	}
	
function pullEngine() 
	{
	if (document.all && slideMenu.pixelLeft < boundryR)
		slideMenu.pixelLeft += 5;
	else if(document.layers && slideMenu.left < boundryR)
		slideMenu.left += 5;
	else if (window.pullMenu)
		clearInterval(pullMenu);
	}
	
function drawEngine() 
	{
	if (document.all && slideMenu.pixelLeft > boundryL)
		slideMenu.pixelLeft -= 5;
	else if(document.layers && slideMenu.left > boundryL)
		slideMenu.left -= 5;
	else if (window.drawMenu)
		clearInterval(drawMenu);
	}
		
