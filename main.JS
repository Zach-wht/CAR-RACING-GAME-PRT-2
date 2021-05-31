canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_X=10;
car1_Y=10;
car1_width=120;
car1_height=70;

car2_X=10;
car2_Y=110;
car2_width=120;
car2_height=70;

background_image="racing.jpg";

car1_image="car1.png";

car2_image="car.png";


function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1;
    car1_imgTag.src=car1_image;


    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2;
    car2_imgTag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag,car1_X,car1_Y,car1_width,car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag,car2_X,car2_Y,car2_width,car2_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
keyPressed=e.keyCode;
console.log(keyPressed);
if(keyPressed=='38'){
    up1();
    console.log("up");

}
if(keyPressed=='40'){
    down1();
    console.log("down");
    
}
if(keyPressed=='37'){
    left1();
    console.log("left");
    
}
if(keyPressed=='39'){
    right1();
    console.log("right");
}
    
    if(keyPressed=='87'){
        up2();
        console.log("up");
    
    }
    if(keyPressed=='83'){
        down2();
        console.log("down");
        
    }
    if(keyPressed=='65'){
        left2();
        console.log("left");
        
    }
    if(keyPressed=='68'){
        right2();
        console.log("right");
        
}
}

function up1(){
    if(car1_Y>=0){
        car1=car1_Y-10;
        console.log("when up arrow is pressed x="+car1_X+"y="+car1_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    } 
 }
 
 function down1(){
     if(car1_Y<=500){
         car1_Y=car1_Y+10;
         console.log("when down arrow is pressed x="+car1_X+"y="+car1_Y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function left1(){
     if(car1_X>=0){
         car1_X=car1_X-10;
         console.log("when left arrow is pressed x="+car1_X+"y="+car1_Y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function right1(){
     if(car1_X<=700){
         car1_X=car1_X+10;
         console.log("when right arrow is pressed x="+car1_X+"y="+car1_Y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }


 function up2(){
    if(car2_Y>=0){
        car2=car2_Y-10;
        console.log("when up arrow is pressed x="+car2_X+"y="+car2_Y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    } 
 }
 
 function down2(){
     if(car2_Y<=500){
         car2_Y=car2_Y+10;
         console.log("when down arrow is pressed x="+car2_X+"y="+car2_Y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function left2(){
     if(car2_X>=0){
         car2_X=car2_X-10;
         console.log("when left arrow is pressed x="+car2_X+"y="+car2_Y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }
 
 function right2(){
     if(car2_X<=700){
         car2_X=car2_X+10;
         console.log("when right arrow is pressed x="+car2_X+"y="+car2_Y);
         uploadBackground();
         uploadCar1();
         uploadCar2();
     }
 }


