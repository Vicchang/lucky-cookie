document.getElementById("create").addEventListener("click", ShowTime); 
function ShowTime()
{	
	var NowDate = new Date();
	var date = NowDate.getDate();
	var d = NowDate.getDay();
	var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	
	var dayNamesen = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

	var sen = Sentence(date);
	var lang = navigator.userLanguage
	if(lang == "en"){
		$("#content-date").text(dayNamesen[d] + ': fortune teller ==>' + sen);
	}
	else{
		$("#content-date").text(dayNames[d] + ': 籤詩 ==>' + sen);
	}
}

function Sentence (date) {
   
	var car = new Array("A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage.", "A feather in the hand is better than a bird in the air.", "A fresh start will put you on your way.",
	"A friend asks only for your time not your money.",	"A friend is a present you give yourself.","A gambler not only will lose what he has, but also will lose what he doesn’t have.",
	"Carve your name on your heart and not on marble.","Change is happening in your life, so go with the flow!", "Competence like yours is underrated.", "Congratulations! You are on your way.", "Could I get some directions to your heart? ", "Courtesy begins in the home.", "Courtesy is contagious.", "Any decision you have to make tomorrow is a good decision.",
	"Be careful or you could fall for some tricks today.", "Beauty in its various forms appeals to you. ", "Because you demand more from yourself, others respect you deeply.",
	"Believe in yourself and others will too.", "Believe it can be done.", "Better ask twice than lose yourself once.", "Don’t confuse recklessness with confidence.",
	"Don’t just spend time. Invest it.","Don’t just think, act!", "Don’t let friends impose on you, work calmly and silently.", "Don’t let the past and useless detail choke your existence.",
	"Don’t let your limitations overshadow your talents.", "Don’t worry; prosperity will knock on your door soon.", "Now is a good time to buy stock.", "Now is the time to go ahead and pursue that love interest!",
	"Now is the time to try something new", "No one can walk backwards into the future.", "Others can help you now.","Pennies from heaven find their way to your doorstep this year!",
	"People are attracted by your Delicate[sic] features.", "The person who will not stand for something will fall for anything.", "The philosophy of one century is the common sense of the next.",
	"The saints are the sinners who keep on trying.", "The secret to good friends is no secret to you.", "The small courtesies sweeten life, the greater ennoble it.", "The smart thing to do is to begin trusting your intuitions.",
	"The strong person understands how to withstand substantial loss.", "You make people realize that there exist other beauties in the world.", "You never hesitate to tackle the most difficult problems.", "You seek to shield those you love and like the role of provider.", "You should be able to make money and hold on to it.", "You should be able to undertake and complete anything.",
	"You understand how to have fun with others and to enjoy your solitude.", "You will always be surrounded by true friends.");

	
    return car[date-1];  
}
 