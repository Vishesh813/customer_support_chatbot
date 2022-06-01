function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function showLoader()
{
    $(".ticontainer").fadeIn("slow");
}
function hideLoader()
{
    $(".ticontainer").fadeOut("slow");
}

function appendChatResponse(section){
 
    $("#chatbox").append('<p id="give_margin" class="userText"><span>' + section + '</span></p>');
}


function contentToRemove(id){
    var content = document.querySelectorAll(id)
    $(content).remove()
   }

// Collapsible
var coll = document.getElementsByClassName("collapsible");
var element = document.getElementById('cross-icon');
element.style.display = "none";


for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        $(element).toggle();

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
   let firstBotMessage =  '<div id="give_margin" class="startChat">I\'m TIA, your intelligent virtual assistant. <br>How can I help you today?</div>'
    document.getElementById("botStarterMessage").innerHTML = firstBotMessage

    let broweCatbutton = '<button id="give_margin" style="animation: floatup 1s forwards; width:auto; border-radius:15px;" type="button" onclick="catClickEvent()" class="btn btn-primary">' +
    'Browse Our Products '+'</button>'

    let chooseBrowseWelcomeMessage =  '<div id="give_margin" class="startChat" class="alert alert-danger" role="alert"><b>Here are the things I can help you with😀<b></div>'

    appendChatResponse("Go ahead")
    $("#chatbox").append(chooseBrowseWelcomeMessage);


     $("#chatbox").append(broweCatbutton);


    document.getElementById("userInput").scrollIntoView(false);
}


function catClickEvent(){
   
    let des =  '<div id="give_margin" class="startChat" class="alert alert-danger" role="alert">Can you pick a section you are looking for? 👇</div>'

    let cat1 = '<button  style="margin-bottom: 10px;border-radius: 12px;" type="button" onclick="onclickIndustrialCat()" id="category" class="btn btn-primary">' +
    'Industrial'+'</button>'
    let cat2 = '<button  style="margin-left: 10px; margin-bottom: 10px;border-radius: 12px;" type="button" onclick="onClickDomesticCat()" id="category" class="btn btn-primary">' +
    'Domestic'+'</button>'

   
    $("#chatbox").append(des);
   
    //sleep(3000)
    
    $("#chatbox").append(cat1);
    $("#chatbox").append(cat2);


   document.getElementById("userInput").scrollIntoView(false);

      
}
//Domestic


function onClickDomesticCat(){
   // showLoader()
    //sleep(1000)
    //contentToRemove("br")

   
    appendChatResponse('Domestic Section')
    contentToRemove('#category')
    
    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a Domestic section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
    sleep(1000)
    for(var i in domesticCatMap){
        let e =  '<span style="animation: floatup 1s forwards;" id="Dom1" class="badge bg-danger" onclick="showDomesticCatValue(\'' + i + '\')">'+i+'</span> '  
        $("#chatbox").append(e);
 
    }

    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}

function showDomesticCatValue(cat){
    appendChatResponse(cat)
    contentToRemove('#Dom1')
    contentToRemove("br")



    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a ranges available from below? 👇</div><br/>'
    $("#chatbox").append(des);

    let p = domesticCatMap[cat]

    for(var i= 0;i<p.length;i++){
 
        let e;
        if( p[i]=="FIRE RETARDANT (FR)" || p[i] =="FIRE RETARDANT LOW SMOKE HALOGEN (FRLSH)" ||  p[i] =="ZERO HALOGEN FIRE RETARDANT (ZHFR)" ){
            e =  '<span style="animation: floatup 1s forwards; margin-left:10px;" id="Dom2" class="badge rounded-pill bg-danger" onclick="showRanges(\'' + p[i] + '\')">'+p[i]+'</span>'
    
        }
        else if(p[i] === "COMMERCIAL LIGHTING" || p[i] === "CONSUMER LIGHTING" ){
            e =  '<span style="animation: floatup 1s forwards;margin-left:10px;" id="Dom2" class="badge rounded-pill bg-danger" onclick="showLightingMapinfo(\'' + p[i] + '\')">'+p[i]+'</span>'

        }
        else{
            e =  '<span style="animation: floatup 1s forwards;margin-left:10px;" id="Dom2" class="badge rounded-pill bg-danger" onclick="onLastLevelForDomestic(\'' + p[i] + '\')">'+p[i]+'</span> '
        }
        $("#chatbox").append(e);
    }
    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);
  
}



function showLightingMapinfo(info){
    appendChatResponse(info)
    contentToRemove('#Dom2')
    contentToRemove("br")

    
    let p = led_lighting_map[info];
    for(var i= 0;i<p.length;i++){
    let p1 =  '<span style="animation: floatup 1s forwards; margin-left:10px;" id="Dom3" class="badge bg-warning text-dark" onclick="removeshowLightingMapinfo(\'' + p[i] + '\')">'+p[i]+'</span>'
    $("#chatbox").append(p1);
}

$("#chatbox").append('<br/><br/>');
document.getElementById("userInput").scrollIntoView(false);

}

function removeshowLightingMapinfo(product){

    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a one of section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
   // appendChatResponse(product)
    contentToRemove('#Dom3') 
    onLastLevelForDomestic(product)
}

function showRanges(ranges){
    appendChatResponse(ranges)
    contentToRemove('#Dom2')

    let message = ranges==="FIRE RETARDANT LOW SMOKE HALOGEN (FRLSH)"?"Can you select a "+ranges+" size that best defines your need? 👇 If you are not sure about which Size and length to select, you can click on Restart":"";
    let eqD =  '<span style="animation: floatup 1s forwards;" class="badge bg-primary" >'+equipMentSize1[0]+'</span>'
    let rage
    let rage_m
    if(ranges==="FIRE RETARDANT LOW SMOKE HALOGEN (FRLSH)"){
        
        for(var i=1;i<equipMentSize1.length;i++){
             eqD = eqD + '<span style="animation: floatup 1s forwards;margin-left:10px;" class="badge bg-primary" >'+equipMentSize1[i]+'</span>'

        }

        rage_m = `<div style="white-space: pre">
        Diameter Sizes : 0.5 mm | 0.75 mm | 1.5 mm| 2.5 mm | 4.0 mm 
        | 6.0 mm | 10.0 mm | 16.0 mm | 25.0 mm 
        Length :180 Meter 
        </div>`
        rage_= "Diameter Sizes : 0.5 mm | 0.75 mm | 1.5 mm| 2.5 mm | 4.0 mm | 6.0 mm |<br> 10.0 mm | 16.0 mm | 25.0 mm |</br>Length :180 Meter "

    }else{
        for(var i=1;i<equipMentSize2.length;i++){
            eqD = eqD + '<span style="animation: floatup 1s forwards;margin-left:10px;" class="badge bg-primary" >'+equipMentSize2[i]+'</span>'

       }

        rage_= "Diameter Sizes : 0.5 mm | 0.75 mm | 1.5 mm| 2.5 mm | 4.0 mm | 6.0 mm |<br> 10.0 mm | 16.0 mm | 25.0 mm |</br>Length : 90 Meter & 180 Meter "
        rage_m = `<div style="white-space: pre">
        Diameter Sizes : 0.5 mm | 0.75 mm | 1.5 mm| 2.5 mm | 4.0 mm 
        | 6.0 mm | 10.0 mm | 16.0 mm | 25.0 mm 
        90 Meter & 180 Meter
        </div>`
    }

    let e =  '<span style="animation: floatup 1s forwards;" class="badge bg-primary" >'+rage_m+'</span>'
    $("#chatbox").append('<br/><br/>');

    $("#chatbox").append(eqD+'<br><br>');
    onLastLevelForDomestic2(ranges)
    document.getElementById("userInput").scrollIntoView(false);

}

function onLastLevelForDomestic(product){

appendChatResponse(product)
//contentToRemove("br")
contentToRemove('#Dom2')


let dialouge = "Great choice, we have a variety of exciting "+ product+" options available for you.<br><br>What type of "+product+" are you looking for?<br><br>To get more information💡about product,please <a id='download_link'  href = 'resource/5- HTLS Conductor Catalogue.pdf' download ><b>download</b></a> brochure.<br>Or for checking more consumer product you can click on Restart"
let des =  '<div class="startChat" class="alert alert-danger" role="alert">'+dialouge+'</div><br/>'

$("#chatbox").append(des);


let restart =  '<button style="width:100px; " type="button" onclick="onclickAppendBroweCat()" id="restart_button" class="btn btn-primary">' +'Restart'+'</button><br><br>'
$("#chatbox").append(restart);


document.getElementById("userInput").scrollIntoView(false);

}
function onLastLevelForDomestic2(product){

  

    //appendChatResponse(product)
    //contentToRemove("br")
    contentToRemove('#Dom2')


    let dialouge = "Great choice, we have a variety of exciting "+ product+" options available for you.<br><br>What type of "+product+" are you looking for?<br><br>To get more information💡about product,please <a id='download_link'  href = 'resource/5- HTLS Conductor Catalogue.pdf' download ><b>download</b></a> brochure.<br>Or for checking more consumer product you can click on Restart"
    let des =  '<div class="startChat" class="alert alert-danger" role="alert">'+dialouge+'</div><br/>'
    
    $("#chatbox").append(des);
    
    
    let restart =  '<button style="animation: floatup 1s forwards;" type="button" onclick="onclickAppendBroweCat()" id="restart_button" class="btn btn-primary">' +'Restart'+'</button>'
    $("#chatbox").append(restart);
    
    
    document.getElementById("userInput").scrollIntoView(false);
    
    
    }

//Industrial

function onclickIndustrialCat(){

    appendChatResponse('Industrial Section')
    contentToRemove('#category')

    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a Industrial section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
   

    for(var i in insdustrialCatMap){
        let e =  '<span style="animation: floatup 1s forwards; margin-left:10px;" class="badge bg-success" id="insdustrial_l1" onclick="showIndustProduct(\'' + i + '\')">'+i+'</span>'
        $("#chatbox").append(e);
    }
    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}



function showIndustProduct(product){ 

    appendChatResponse(product)
    contentToRemove('#insdustrial_l1')


    let des =  '<div class="startChat" class="alert alert-danger" role="alert">Can you pick a one of section you are looking for? 👇</div><br/>'
    $("#chatbox").append(des);
    
    let p = insdustrialCatMap[product]

    for(var i= 0;i<p.length;i++){
        let p1;
        if(product==="LED LIGHTING"){
             p1 =  '<span style="animation: floatup 1s forwards; margin-left:10px" onclick="onLastLevel(\'' + p[i] + '\')" id="insdustrial_l2" class="badge bg-warning text-dark" onclick="showLightiningCat(\'' + p[i] + '\')">'+p[i]+'</span>'
            $("#chatbox").append(p1);
        }else{
            p1 =  '<span style="animation: floatup 1s forwards; margin-left:10px" onclick="onLastLevel(\'' + p[i] + '\')" id="insdustrial_l2" class="badge bg-warning text-dark">'+p[i]+'</span>'
            $("#chatbox").append(p1);   
        }

     
    }

    $("#chatbox").append('<br/><br/>');
    document.getElementById("userInput").scrollIntoView(false);

}

function onLastLevel(product){
    appendChatResponse(product)
    contentToRemove("br")

let dialouge = "Great choice, we have a variety of exciting "+ product+" options available for you.<br><br>What type of "+product+" are you looking for?<br><br>To get more information💡about product,please <a id='download_link'  href = 'resource/5- HTLS Conductor Catalogue.pdf' download ><b>download</b></a> brochure.<br>Or for checking more consumer product you can click on Restart"
let des =  '<div class="startChat" class="alert alert-danger" role="alert">'+dialouge+'</div><br/>'
contentToRemove('#insdustrial_l2')

$("#chatbox").append(des);


let restart =  '<button style="width:100px;" type="button" onclick="onclickAppendBroweCat()" id="restart_button" class="btn btn-primary">' +'Restart'+'</button><br><br>'
$("#chatbox").append(restart);


document.getElementById("userInput").scrollIntoView(false);


}

function onclickAppendBroweCat(){
    catClickEvent()
   // contentToRemove('#restart_button')

}

function showLightiningCat(cat){
    appendChatResponse(cat)
    contentToRemove('#insdustrial_l2')


    let p = lighting_map[cat]

    for(var i= 0;i<p.length;i++){
        let p1 =  '<span style="animation: floatup 1s forwards;" onclick="onLastLevel(\'' + p[i] + '\')" class="badge rounded-pill bg-info text-dark">'+p[i]+'</span>'
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
