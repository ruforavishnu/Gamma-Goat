window.onload = function plotPixel()
{
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var canvasWidth = canvas.width;
	var canvasHeight = canvas.height;	

	console.log('plotPixel JS loaded');

	setPixel(ctx, 100,100,   255,0,0,255);

}

function setPixel(myContext, x, y, r, g, b, a) 
{
    var imageData = myContext.createImageData(1,1);
    imageData.data[0] = r;
    imageData.data[1] = g;
    imageData.data[2] = b;
    imageData.data[3] = a;

    myContext.putImageData(imageData, x, y);

    console.log('completed plotting pixel.');
}

