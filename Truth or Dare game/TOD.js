var game={
    Truth:["Do you eat food off the floor?","What’s the longest you’ve ever spent in the bathroom?","What's something you're glad your mum doesn't know about you?","Do you have a hidden talent?","What's the most drunk you've ever been?","What's the biggest mistake you've ever made?","What's the most disgusting thing you've ever done?","Have you ever lied to your best friend?",
    "What's the most embarrassing thing you've ever done?",
    "Have you ever cheated on a test?",
    "What's your biggest fear?",
    "Have you ever stolen anything?",
    "What's the most trouble you've ever been in?",
    "What's the weirdest dream you've ever had?",
    "Have you ever been in love?",
    "What's the worst date you've ever been on?",
    "Have you ever been caught doing something you shouldn't have been doing?",
    "What's the craziest thing you've ever done?",
    "Have you ever been fired from a job?",
    "What's your most embarrassing nickname?",
    "Have you ever told a lie to get out of trouble?",
    "What's the most annoying habit you have?",
    "Have you ever had a crush on someone you shouldn't have?",
    "What's the worst haircut you've ever had?",
    "Have you ever snuck out of the house?",
    "What's the biggest secret you've ever kept?",
    "Have you ever kissed someone you shouldn't have?",
    "What's the most embarrassing thing in your room right now?",
    "Have you ever pretended to be sick to get out of something?",
    "What's the worst gift you've ever received?",
    "Have you ever been in a fight?",
    "What's the biggest mistake you've ever made?",
    "Have you ever stolen someone's food?",
    "What's the most embarrassing thing you've ever said?",
    "Have you ever cheated on a significant other?",
    "What's the most embarrassing thing you've ever worn?",
    "Have you ever eaten something off the ground?"],
Dare:[
    "Sing a song in front of everyone.",
    "Do a silly dance.",
    "Go outside and shout 'I love [insert name]' as loud as you can.",
    "Put on a blindfold and do the chicken dance.",
    "Do 10 pushups.",
    "Eat a spoonful of hot sauce.",
    "Call a random person and sing them a song.",
    "Do a cartwheel.",
    "Text your crush and tell them how you feel.",
    "Put your hand in a bucket of ice for 1 minute.",
    "Speak in a fake accent for the next hour.",
    "Do a handstand.",
    "Do the floss dance.",
    "Take a selfie with a funny face and post it on social media.",
    "Do 20 jumping jacks.",
    "Put a spoonful of peanut butter in your mouth and try to say 'rubber baby buggy bumpers'.",
    "Wear your clothes backwards for the rest of the day.",
    "Do a 1-minute plank.",
    "Give someone a piggyback ride.",
    "Brush your teeth with hot sauce.",
    "Do the worm dance.",
    "Wear a silly hat for the rest of the day.",
    "Drink a glass of milk in one gulp.",
    "Jump up and down 10 times.",
    "Wear a sign that says 'kick me' for the rest of the day.",
    "Balance a spoon on your nose for 1 minute.",
    "Walk backwards for the next 10 minutes.",
    "Do a 1-minute wall sit.",
    "Eat a piece of bread without using your hands."
  ] 
}
var gameDirty={
    Truth:["Have you ever peed in the shower?","What color underwear are you wearing right now?","Do you have any fetishes?","Send your ex a message saying you miss them.",
"Make eye contact with the person to your right and moan for 10 seconds.",],
    Dare:["Remove four items of clothing","Twerk for a minute","Does size really matter?","Have you ever been caught in action? If so, by who?","What’s your biggest turn on?",
"What your maddest one-night stand story?","Ask a stranger for advice on a strange rash you’ve recently developed.","Seductively eat a banana whilst locking eyes with the person to your left."]

}
 var getValue = document.getElementById('MODE')

 //the truth function takes a condition and check what value the select tag took and that's to select the corresponding
 // array and pic randomly an element and that's was done using Math.random preset function and then display the output by selecting an html element by ID
//and that to sets the text content to the randomly selected array element.
 function truth(){
    var result=''
    if(getValue.value==="FRIENDLY"){
  result= game.Truth[(Math.random()*(game["Truth"]).length).toFixed()]
  document.getElementById("text").innerText=result
    }
if(getValue.value==="DIRTY"){
    result= gameDirty.Truth[(Math.random()*(gameDirty["Truth"]).length).toFixed()]
    document.getElementById("text").innerText=result
   
}
}
//the same principle as the truth function is applied here
function dare(){
   var result=''
   if(getValue.value==="FRIENDLY"){
        result= game.Dare[(Math.random()*(game["Dare"]).length).toFixed()]
        document.getElementById("text").innerText=result
        
}
if(getValue.value==="DIRTY"){
    result= gameDirty.Dare[(Math.random()*(gameDirty["Dare"]).length).toFixed()]
    document.getElementById("text").innerText=result
    
   
}
}


 
 
 