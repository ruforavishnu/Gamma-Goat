window.onload = function plot_line()
{
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width;
	var height = canvas.height;

	context.fillStyle = "rgb('255,0,0')";
	context.fillRect(100,100, 10,10);

	console.log('finished executing js script');
}