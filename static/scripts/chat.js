function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function appendSection(section){
 
    $("#chatbox").append('<p class="userText"><span>' + section + '</span></p>');
}


function contentToRemove(id){
    var content = document.querySelectorAll(id)
    $(content).remove()
    $("br").remove();
   }

// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
   let firstBotMessage =  '<div class="startChat">I\'m TIA, your intelligent virtual assistant. <br>How can I help you today?</div><br/>'
    document.getElementById("botStarterMessage").innerHTML = firstBotMessage

    let broweCatbutton = '<button style="animation: floatup 1s forwards;" type="button" onclick="catClickEvent()" class="btn btn-primary">' +
    'Browse Our Products '+'</button><br><br>'

     $("#chat-timestamp").append(broweCatbutton);

    document.getElementById("userInput").scrollIntoView(false);
}


function catClickEvent(){
   
    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a section you are looking for? 👇</div><br/>'

    let cat1 = '<button style="animation: floatup 1s forwards;" type="button" onclick="onclickIndustrialCat()" id="category" class="btn btn-primary">' +
    'Industrial'+'</button>&nbsp;'
    let cat2 = '<button style="animation: floatup 1s forwards;" type="button" onclick="onClickDomesticCat()" id="category" class="btn btn-primary">' +
    'Domestic'+'</button><br><br>'

   
    $("#chatbox").append(des);
   
    sleep(3000)
    
    $("#chatbox").append(cat1);
    $("#chatbox").append(cat2);

   document.getElementById("userInput").scrollIntoView(false);

      
}
//Domestic


function onClickDomesticCat(){
   
    appendSection('Domestic Section')
    contentToRemove('#category')
    
    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a Domestic section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
    sleep(1000)
    for(var i in domesticCatMap){
        let e =  '<span style="animation: floatup 1s forwards;" class="badge bg-danger" onclick="showDomesticCatValue(\'' + i + '\')">'+i+'</span> &nbsp;'  
        $("#chatbox").append(e);
 
    }

    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}

function showDomesticCatValue(cat){
    appendSection(cat)

    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a ranges available from below? 👇</div><br/>'
    $("#chatbox").append(des);

    let p = domesticCatMap[cat]

    for(var i= 0;i<p.length;i++){
 
        let e;
        if( p[i]=="FIRE RETARDANT (FR)" || p[i] =="FIRE RETARDANT LOW SMOKE HALOGEN (FRLSH)" ||  p[i] =="ZERO HALOGEN FIRE RETARDANT (ZHFR)" ){
            e =  '<span style="animation: floatup 1s forwards;" class="badge rounded-pill bg-danger" onclick="showRanges(\'' + p[i] + '\')">'+p[i]+'</span>&nbsp;'
    
        }
        else if(p[i] === "COMMERCIAL LIGHTING" || p[i] === "CONSUMER LIGHTING" ){
            e =  '<span style="animation: floatup 1s forwards;" class="badge rounded-pill bg-danger" onclick="showLightingMapinfo(\'' + p[i] + '\')">'+p[i]+'</span>&nbsp;'

        }
        else{
            e =  '<span style="animation: floatup 1s forwards;" class="badge rounded-pill bg-danger">'+p[i]+'</span> &nbsp;'
        }
        $("#chatbox").append(e);
    }
    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);
  
}



function showLightingMapinfo(info){
    appendSection(info)
    

let p = led_lighting_map[info];
for(var i= 0;i<p.length;i++){
    let p1 =  '<span style="animation: floatup 1s forwards;"  class="badge bg-warning text-dark">'+p[i]+'</span>&nbsp;'
    $("#chatbox").append(p1);
}

$("#chatbox").append('<br/><br/>');
document.getElementById("userInput").scrollIntoView(false);

}

function showRanges(ranges){
    appendSection(ranges)

    let rage;

    if(ranges==="FIRE RETARDANT LOW SMOKE HALOGEN (FRLSH)"){
        rage_= "Diameter Sizes : 0.5 mm | 0.75 mm | 1.5 mm| 2.5 mm | 4.0 mm | 6.0 mm |<br> 10.0 mm | 16.0 mm | 25.0 mm |</br>Length :180 Meter "

    }else{
        rage_= "Diameter Sizes : 0.5 mm | 0.75 mm | 1.5 mm| 2.5 mm | 4.0 mm | 6.0 mm |<br> 10.0 mm | 16.0 mm | 25.0 mm |</br>Length : 90 Meter & 180 Meter "

    }

    let e =  '<span style="animation: floatup 1s forwards;" class="badge bg-primary" >'+rage_+'</span>'
    $("#chatbox").append(e);
    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}

//Industrial

function onclickIndustrialCat(){

    appendSection('Industrial Section')
    contentToRemove('#category')

    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a Industrial section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
   

    for(var i in insdustrialCatMap){
        let e =  '<span style="animation: floatup 1s forwards;" class="badge bg-success" id="insdustrial_l1" onclick="showIndustProduct(\'' + i + '\')">'+i+'</span>&nbsp;'
        $("#chatbox").append(e);
    }
    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}



function showIndustProduct(product){ 

    appendSection(product)
    contentToRemove('#insdustrial_l1')


    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a one of section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
    
    let p = insdustrialCatMap[product]

    for(var i= 0;i<p.length;i++){
        let p1;
        if(product==="LED LIGHTING"){
             p1 =  '<span style="animation: floatup 1s forwards;" onclick="onLastLevel(\'' + p[i] + '\')" id="insdustrial_l2" class="badge bg-warning text-dark" onclick="showLightiningCat(\'' + p[i] + '\')">'+p[i]+'</span>&nbsp;'
            $("#chatbox").append(p1);
        }else{
            p1 =  '<span style="animation: floatup 1s forwards;" onclick="onLastLevel(\'' + p[i] + '\')" id="insdustrial_l2" class="badge bg-warning text-dark">'+p[i]+'</span>&nbsp;'
            $("#chatbox").append(p1);   
        }

     
    }

    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}

function onLastLevel(product){

let dialouge = "Great choice, we have a variety of exciting "+ product+" options available for you.<br><br>What type of "+product+" are you looking for?<br><br>💡 To check another consumer product, you can click on Restart"
let des =  '<div class="startChat" class="alert alert-danger" role="alert">'+dialouge+'</div><br/>'
contentToRemove('#insdustrial_l2')

$("#chatbox").append(des);


let restart =  '<button style="animation: floatup 1s forwards;" type="button" onclick="onclickAppendBroweCat()" id="restart_button" class="btn btn-primary">' +'Restart'+'</button><br><br>'
$("#chatbox").append(restart);


document.getElementById("userInput").scrollIntoView(false);


}

function onclickAppendBroweCat(){
    catClickEvent()
   // contentToRemove('#restart_button')

}

function showLightiningCat(cat){
    appendSection(cat)
    contentToRemove('#insdustrial_l2')


    let p = lighting_map[cat]

    for(var i= 0;i<p.length;i++){
        let p1 =  '<span style="animation: floatup 1s forwards;" onclick="onLastLevel(\'' + p[i] + '\')" class="badge rounded-pill bg-info text-dark">'+p[i]+'</span>&nbsp;'
        $("#chatbox").append(p1);
    }

    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);
}





firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "Please choose from options!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)
    
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}



// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});
