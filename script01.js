window.onload = function plot_line()
{
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width;
	var height = canvas.height;

	context.fillStyle = "rgb(255,0,0)";
	
	console.log('canvas width:'+width);
	console.log('canvas height:'+height);
	console.log('beginning executing js script');

	var x1 = 0;
	var y1 = 70;

	var x2 = 300;
	var y2 = 30;

	var x = -1;
	var y = -1;
	var steps = -1;

	var magX = Math.abs(x2-x1);
	var magY = Math.abs(y2-y1);

	var dx = -1;
	var dy = -1;

	
	if( magX > magY)
	{

		x = x1;
		y = y1;

		dx = x2-x1;	
		dy = y2-y1;


		steps = x2;
	}
	else
	{
		dy = y1-y2;
		dx = x1-x2;		

		x = x2;
		y = y2;

		steps = x1;
	}

	

	decisionParameter = dy - (dx/2);

	
	context.fillRect(x,height-y,1,1); // plotting first pixel


	while( x < steps )
	{
		x = x+1;

		if(decisionParameter < 0)
		{
			decisionParameter = decisionParameter + dy;
		}
		else
		{
			decisionParameter = decisionParameter + (dy - dx);
			y = y + 1;
		}
		context.fillRect(x,height-y,1,1);

	}

	console.log('completed executing js script');


}