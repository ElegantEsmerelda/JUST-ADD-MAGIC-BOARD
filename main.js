var canvas = new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img){
		block_image_object = Img;
	
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
		top:0,
        left:0
		});
		canvas.add(block_image_object)
		});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode
    console.log(keyPressed);
    if (keyPressed == '38')
    {
        up ();
        console.log("up")
    }
    if (keyPressed == '40')
    {
        down ();
        console.log("down")
    }
    if (keyPressed == '37')
    {
        left ();
        console.log("left")
    }
    if (keyPressed == '39')
    {
        right ();
        console.log("right")
    }
    if (keyPressed == '71')
    {
        new_image ('Gina Silvers.png');
        console.log("g")
    }
    if (keyPressed == '66')
    {
        new_image ('Becky.png');
        console.log("b")
    }
    if (keyPressed == '68')
    {
        new_image ('Darbie.png');
        console.log("d")
    }
    if (keyPressed == '72')
    {
        new_image ('Hannah.png');
        console.log("h")
    }
    if (keyPressed == '75')
    {
        new_image ('Kelly.jpg');
        console.log("k")
    }
    if (keyPressed == '77')
    {
        new_image ('Mama P.jpg');
        console.log("m")
    }
}


  

