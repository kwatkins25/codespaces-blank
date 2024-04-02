let input1 = document.querySelector(".q1");
let input2 = document.querySelector(".q2");
let button = document.querySelector(".button");
let message = document.querySelector(".message");
let question1 = document.querySelector(".question1")
let question2 = document.querySelector(".question2")
console.log("bark");
let insane1 = document.querySelector(".insane1");
let insane2 = document.querySelector(".insane2");
let happy1 = document.querySelector(".happy1");
let happy2 = document.querySelector(".happy2");
console.log("meow")

button.addEventListener("click", function(){
   let answer1 = input1.value;
   let answer2 = input2.value;



//Happy Man 1
if (answer1 === "yes" && answer2 === "save it for later"){
   message.innerHTML = `<div class="insane1">
   <h2>You are...</h2><h3>NOT AN INSANE PERSON</h3>
   <h4>You are completely and utterly fine. There is nothing at all wrong with you from this quiz. Go out and live your life knowing that you are completely sane and mentally sound.</h4>
   <img src="happy1.jpg"alt="Happy man with thumbs up standing in front of the ocean." width="300"/>
   </div>`;
}

//Insane Man 1
else if (answer1 === "yes" && answer2 === "let it go"){
   message.innerHTML = `<div class="happy2">
   <h2>You are a...</h2><h3>LITTLE INSANE OF A PERSON</h3>
   <h4>A few screws are lose but you are still decently sane. Seriously you wouldn't save the dog for later???</h4>
   <img src="insane1.jpg"alt="insane man in straitjacket screaming in a padded room" width="300"/>
   </div>`;
}


//Happy Man 1
else if (answer1 === "no" && answer2 === "save it for later"){
   message.innerHTML = `<div class= "happy2">
   <h2>You are a...</h2><h3>SANE PERSON</h3>
   <h4>You seem pretty sane to me, maybe you answered a quesion wrong?</h4>
   <img src="happy2.avif" alt="" width="300"/>
   </div>`;
}


//Happy Girl 2
else if (answer1 === "no" && answer2 === "let it go"){
   message.innerHTML = `<div class= "insane2">
   <h2>You are a...</h2><h3>INSANE PERSON</h3>
   <h4>You are completely and utterly insane. Seek mental health NOW. You need to consult a therapist and pyschologist immediately!</h4>
   <img src="insane2.webp"alt="Pale girl in the corner of the room staring wide eyed with newspaper over the walls and crumpled newspaper covering most of her." width="300"/>
   </div>`;
}
});

button.addEventListener("click", function() {
   button.style.display = "none";
   input1.style.display = "none";
   input2.style.display = "none";
   question1.style.display= "none";
   question2.style.display = "none";
 });

 document.querySelector(".title").style.display = "block"; // Show title
 message.style.display = "block"; // Show message div
 message.querySelector("div").style.display = "block";