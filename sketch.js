function setup() {
  createCanvas(800,400);
var name="Arijeet diwan";
console.log(name);
console.log(name.length);
console.log(name.toUpperCase());
var num="5";
//convert a string into a number:
num1=parseInt(num);
num1=num1+1;
console.log(num1);
//
console.log("a" / "b");
console.log("Hi"+"Friend");
console.log(1/0);
//
var name = "My name";

switch(name) {  
case  "Mmsdhgxy name":  
console.log("Condition 1");  
break;  
case  "my Name":  
console.log("Condition 2");  
break;  
default:  
console.log("None of the conditions are true");
}

if(3>2){
	console.log("Happy")
}
else{
	console.log("Not Happy")
}



for(var i=0; i<=5; i++){
	console.log(i)
}


var i =0
while (i<=5){
	console.log(i)
	i=i+1
}
var friends = ["firend0","friend1","friend2","friend3"];
console.log(friends);
console.log(friends.length);
console.log(friends[2]);
//
for(var i in friends){
	console.log(friends[i])



}

friends.push("friend4");
console.log(friends);


}




function draw() {
  background(255,255,255);  
  drawSprites();
}