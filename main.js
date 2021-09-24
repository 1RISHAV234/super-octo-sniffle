var canvas = new fabric.Canvas("myCanvas")
ctx = canvas.getContext('2d');
start_x = 20;
start_y = 20;
hole_x = 480;
hole_y = 680;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_ob = Img;
		hole_ob.scaleToWidth(50);
		hole_ob.scaleToHeight(50);
		hole_ob.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_ob);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img){
        ball_object = Img;
		ball_object.scaleToWidth(50);
		ball_object.scaleToHeight(50);
		ball_object.set({
			top:start_y,
			left:start_x
		})
		canvas.add(ball_object);
	});
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((start_x == hole_x)&&(start_y == hole_y)) {
		canvas.remove(ball_object);
		document.getElementById("hd3").innerHTML="U have hit the goal! Congrats!!";
		document.getElementById("myCanvas").style.borderColor="red";
	} else {
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (start_y > 5) {
			start_y = start_y - block_image_height;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function down()
	{
		 if (start_y <= 450) {
             start_y = start_y + block_image_height;
			 canvas.remove(ball_object);
			 new_image();
		 }
	}

	function left()
	{
		if(start_x >5)
		{
			start_x = start_x - block_image_width;
			canvas.remove(ball_object);
			new_image();
		}
	}

	function right()
	{
		if(start_x <=1050)
		{
			start_x = start_x + block_image_width;
			canvas.remove(ball_object);
			new_image();
		}
	}
	
}

