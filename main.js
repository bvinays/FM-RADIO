
var source = document.querySelector("source");
var audio = document.querySelector("audio");
var currentId = "rainbowHyd"

source.addEventListener("error", function(e) {
  $(".offline").html("The Station Is Offline")
  setTimeout(()=>{$("audio").load();},5000) 
    });
    

audio.onended = function() {
  $("audio").load();
  $("audio").click();
};
//Loop though all audio tags and set Controls as false

$("#rainbow").click(()=>{currentId ="rainbow";$("source").attr("src", "https://radioindia.net/radio/vividhbharti/icecast.audio");$("img").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Logo_of_AIR.svg/1200px-Logo_of_AIR.svg.png"); $("audio").load();$("audio").click();$(".fmname").html("Air FM Rainbow");$(".offline").html("")});
$("#kurnool").click(()=>{currentId ="kurnool";$("source").attr("src", "https://radioindia.net/radio/air_kurnool_radio/icecast.audio");$("img").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Logo_of_AIR.svg/1200px-Logo_of_AIR.svg.png");$("audio").load();$("audio").click();$(".fmname").html("Air FM Kurnool");$(".offline").html("")});
$("#mirchi").click(()=>{currentId ="mirchi";$("source").attr("src", "https://radioindia.net/radio/mirchi98/icecast.audio");$("img").attr("src", "https://onlineradiofm.in/assets/image/radio/180/radio-mirchi11111.jpg");  $("audio").load();$("audio").click();$(".fmname").html("Radio Mirchi");$(".offline").html("")});
$("#bigfm").click(()=>{currentId ="bigfm";$("source").attr("src", "https://radioindia.net/radio/sc-bb/icecast.audio");$("img").attr("src", "https://onlineradiofm.in/assets/image/radio/180/big-fm-5001.png");  $("audio").load();$("audio").click();$(".fmname").html("Big FM");$(".offline").html("")});
$("#rainbowHyd").click(()=>{currentId ="rainbowHyd";$("source").attr("src", "https://radioindia.net/radio/air_rainbow_hyderabad/icecast.audio");$("img").attr("src", "https://mplan.media/wp-content/uploads/2018/03/hyderabad.png");$("audio").load();$("audio").click();$(".fmname").html("FM Rainbow Hyderabad");$(".offline").html("")});
$("#kothagudham").click(()=>{currentId ="kothagudham";$("source").attr("src", "https://radioindia.net/radio/air_kothagudem/icecast.audio");$("img").attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/5/51/Logo_of_AIR.svg/1200px-Logo_of_AIR.svg.png");$("audio").load();$("audio").click();$(".fmname").html("Air FM Kothagudem");$(".offline").html("")});
$("#radioCity").click(()=>{currentId ="radioCity";$("source").attr("src", "https://radioindia.net/radio/radio-city/icecast.audio");$("img").attr("src", "https://exchange4media.gumlet.com/news-photo/1519650660_295aub_Radio_City_India.jpg?format=webp&w=400&dpr=2.6");$("audio").load();$("audio").click();$(".fmname").html("Radio City");$(".offline").html("")});
$("#radioCitytamil").click(()=>{currentId ="radioCitytamil";$("source").attr("src", "https://prclive4.listenon.in/Tamil");$("img").attr("src", "https://exchange4media.gumlet.com/news-photo/1519650660_295aub_Radio_City_India.jpg?format=webp&w=400&dpr=2.6");$("audio").load();$("audio").click();$(".fmname").html("Radio City Tamil");$(".offline").html("")});
$("#radioCitypunjab").click(()=>{currentId ="radioCitypunjab";$("source").attr("src", "https://prclive4.listenon.in/Punjabi");$("img").attr("src", "https://exchange4media.gumlet.com/news-photo/1519650660_295aub_Radio_City_India.jpg?format=webp&w=400&dpr=2.6");$("audio").load();$("audio").click();$(".fmname").html("Radio City Punjabi");$(".offline").html("")});
$("#radioCitybugger").click(()=>{currentId ="radioCitytamil";$("source").attr("src", "https://prclive4.listenon.in/Tamil");$("img").attr("src", "https://exchange4media.gumlet.com/news-photo/1519650660_295aub_Radio_City_India.jpg?format=webp&w=400&dpr=2.6");$("audio").load();$("audio").click();$(".fmname").html("Radio City Tamil");$(".offline").html("")});

$("#vijayawada").click(()=>{currentId ="vijayawada";$("source").attr("src", "https://radioindia.net/radio/air_rainbow_vijvayada/icecast.audio");$("img").attr("src", " https://onlineradiofm.in/assets/image/radio/180/fmrainvijayawada.jpg");$("audio").load();$("audio").click();$(".fmname").html("Air FM Vijayawada");$(".offline").html("")});
$("#visakapanam").click(()=>{currentId ="visakapanam";$("source").attr("src", "https://onlineradiofm.in/apii.php?url=https://radioindia.net/radio/air_rainbow_visakapanam/icecast.audio");$("img").attr("src", "https://i.ytimg.com/vi/kQPhefaNyLw/hqdefault.jpg");$("audio").load();$("audio").click();$(".fmname").html("Air FM Visakhapatnam");$(".offline").html("")});





$("audio").click(function() {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});

$(window).load(function() {
if(new Date().getHours()>18 || new Date().getHours()<6){
  $("body").css("background-color","black")
  $(".fmname").css("color","white")

}

$('audio').click()
});

// navigator.mediaSession.setActionHandler('play', function() { / Do something / });
// navigator.mediaSession.setActionHandler('pause', function() { alert('pause'); });
// navigator.mediaSession.setActionHandler('seekbackward', function() { / Do something / });
// navigator.mediaSession.setActionHandler('seekforward', function() { / Do something / });
navigator.mediaSession.setActionHandler('previoustrack', function() { document.getElementById(currentId).previousElementSibling.click()});
navigator.mediaSession.setActionHandler('nexttrack', function() {document.getElementById(currentId).nextElementSibling.click() });
