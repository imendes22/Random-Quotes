function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    var ampm = "";
    m = checkTime(m);

    if (h > 12) {
    	h = h - 12;
    	ampm = " PM";
    } else if (h == 12){
        h = 12;
    	ampm = " AM";
    } else if (h < 12){
        ampm = " AM";
    } else {
        ampm = "PM";
    };
  
  if(h==0) {
    h=12;
  }
    
    document.getElementById('display').innerHTML = h+":"+m+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function genQuote() {
  var randNum = Math.floor(Math.random() * 8) + 1;
  document.getElementById('quote').innerHTML = quotes[randNum];
  /*var tweetQuote = quotes[randNum].split(' ').join('%20');
  tweetQuote = tweetQuote.split('<br>').join('');
  tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
  $('.twitter-share-button').attr('href', tweetQuote);*/
}

//quote array
var quotes = ["Blank", "\"Do not take life too seriously. You will never get out of it alive.\"<br>- <small><em>Elbert Hubbard</em></small>", "\"Either I will find a way, or I will make one.\"<br> - <small><em>Philip Sidney</em></small>", "\"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.\"<br>- <small><em>Thomas A. Edison</em></small>", "\"A day without sunshine is like, you know, night.\"<br>- <small><em>Steve Martin</em></small>", "\"If you can dream it, you can do it.\"<br>- <small><em>Walt Disney</em></small>", "\"Never give up, for that is just the place and time that the tide will turn.\"<br>- <small><em>Harriet Beecher Stowe</em></small>", "\"I know where I'm going and I know the truth, and I don't have to be what you want me to be. I'm free to be what I want.\"<br>- <small><em>Muhammad Ali</em></small>", "\"If you always put limit on everything you do, physical or anything else. It will spread into your work and into your life. There are no limits. There are only plateaus, and you must not stay there, you must go beyond them.\"<br>- <small><em>Bruce Lee</em></small>",];

//date
function startDate() {
  var d = new Date();
  var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  document.getElementById("date").innerHTML = days[d.getDay()]+" | "+[d.getMonth()+1]+"/"+d.getDate()+"/"+d.getFullYear();
}