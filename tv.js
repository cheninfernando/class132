function setup(){
    canvas=createCanvas(640,420)
    canvas.center();
    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="status:Detecting objects"
}
img="";
status=""
objects=[];

function preload(){
    img= loadImage('img2.jpeg');
}

function draw(){
    image(img,0,0,640,420);
    if(status !=""){
        for ( i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML="Status: object detected";
            fill("red");
percent= floor(objects[i].confidence *100);
text(objects[i].label+" "+percent+"%", objects[i].x, objects[i].y)
noFill(); 
stroke("black")   
rect(objects[i].x, objects[i].y, objects[i].width,objects[i].height);    }
    }
}

function modelloaded(){
    console.log("modelloaded")
    status=true;
    objectdetector.detect(img,gotresults);

}

function gotresults(error,results){
    if(error){
        console.log(error)
    }
    console.log(results)
objects=results;
}