var userinput=prompt("Enter your Date of Birth(Day/month/year)")
if(userinput=="02/06/2003"){
  alert("Its your special Day! There is surprise from your friend!")
  // document.getElementById(playPauseButton).click();
  function playPause() {
  var video = document.getElementById("bgVideo");
  var music=document.getElementById("music")
  var playPauseButton = document.getElementById("playPauseButton");
  if (video.paused ) {
    video.play();
    if(music.paused){
      music.play();
    }else{
      music.pause();
    }
    playPauseButton.textContent = "Pause";
  } else {
    video.pause();
    playPauseButton.textContent = "Play";
    music.pause();
  }
}
}else{
  for(i=0;i>=-1;i++){
  alert("Sorry! Invalid Date if Birth");
  }
}
playPauseButton.addEventListener('click',function(){
  playPauseButton.classList.add('animate12')
 bgVideo.classList.add('animate');
 var image1=document.getElementById("image1");
 image1.classList.add('animate1')
 var image2=document.getElementById("image2");
 image2.classList.add('animate2');
 var image3=document.getElementById("image3");
 var image4=document.getElementById("image4");
 var image5=document.getElementById("image5");
 image3.classList.add('animate3');
 image4.classList.add('animate3');
 image5.classList.add('animate3');
 var image6=document.getElementById("image6");
 var image7=document.getElementById("image7");
 var image8=document.getElementById("image8");
 image6.classList.add('animate4');
 image7.classList.add('animate5');
 image8.classList.add('animate6');
 var photo1=document.getElementById("photo1");
 var photo2=document.getElementById("photo2");
 var photo3=document.getElementById("photo3");
 //  photo1.classList.add('animate7')
 photo1.classList.add('animate21')
 //  photo2.classList.add('animate8')
 photo2.classList.add('animate21')
 //  photo3.classList.add('animate9')
 photo3.classList.add('animate21')
 var image9=document.getElementById("image9");
 var image10=document.getElementById("image10");
 var image11=document.getElementById("image11");
 var image12=document.getElementById("image12");
 var image13=document.getElementById("image13");
 var image14=document.getElementById("image14");
 var image15=document.getElementById("image15");
 var image16=document.getElementById("image16");
 var image17=document.getElementById("image17");
 var image18=document.getElementById("image18");
 image9.classList.add('animate10');
 image10.classList.add('animate10');
 image11.classList.add('animate10');
 image12.classList.add('animate10');
 image13.classList.add('animate10');
 image14.classList.add('animate10');
 image15.classList.add('animate10');
 image16.classList.add('animate10');
 image17.classList.add('animate10');
 image18.classList.add('animate10');
//  var music=document.getElementById("music");
//  music.classList.add('animate18');
 var wish=document.getElementById("wish");
 wish.classList.add('animate19');
 var last=document.getElementById("last");
 last.classList.add('animate11');
 var button=document.getElementById('button')
 button.classList.add('animate13')
 var happy=document.getElementById('happy')
 happy.classList.add('animate16');
 var birthday=document.getElementById('birthday');
 birthday.classList.add('animate16');
 var name=document.getElementById('name')
 name.classList.add('animate16');
 var welcome=document.getElementById("welcome");
 welcome.classList.add('animate20');
 var final=document.getElementById("final")
 final.classList.add('animate22');
})
var happy=document.getElementById("happy");
happy.addEventListener('click',function(){
  happy.innerHTML="HAPPY";
  var birthday=document.getElementById("birthday")
  birthday.innerHTML="click me!"
  happy.style.backgroundColor="black";
  happy.style.color="white";
})
var birthday=document.getElementById("birthday")
birthday.addEventListener('click',function(){
  birthday.innerHTML="BIRTHDAY";
  var value=document.getElementById("name")
  value.innerHTML="click me!"
  birthday.style.backgroundColor="black";
  birthday.style.color="white";
})
var value=document.getElementById("name")
value.addEventListener('click',function(){
  value.innerHTML="HARSHITHA";
  value.style.backgroundColor="black";
  value.style.color="white";
})