document.getElementById("create").addEventListener("click", ShowTime); 
function ShowTime()
{	
	var NowDate = new Date();
	var d = NowDate.getDay();
	var h = NowDate.getHours();
	var m = NowDate.getMinutes()
	var s = NowDate.getSeconds();
	var dayNames = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
	
	var dayNamesen = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

	var sen = Sentence(d,h);
	var lang = navigator.userLanguage
	if(lang == "en"){
		$("#content-date").text(dayNamesen[d] + ': fortune teller ==>' + sen);
	}
	else{
		$("#content-date").text(dayNames[d] + ': 籤詩 ==>' + sen);
	}
	//$("#content-date").text(NowDate.toLocaleString() + dayNames[d] + '////' + sen);
	
	//etTimeout(ShowTime(), 1000);
}

function Sentence (d,h) {
   
	var car = [];
	for (i = 0; i < 7; i++) {
		car[i] = [];
	}
	car[0][0] = "A beautiful, smart, and loving person will be coming into your life.";
	car[0][1] = "A dubious friend may be an enemy in camouflage.";
	car[0][2] = "A feather in the hand is better than a bird in the air.";
	car[0][3] = "A fresh start will put you on your way.";
	car[0][4] = "A friend asks only for your time not your money.";
	car[0][5] = "A friend is a present you give yourself.";
	car[0][6] = "A gambler not only will lose what he has, but also will lose what he doesn’t have.";
	
	car[1][0] = "Carve your name on your heart and not on marble.";
	car[1][1] = "Change is happening in your life, so go with the flow!";
	car[1][2] = "Competence like yours is underrated.";
	car[1][3] = "Congratulations! You are on your way.";
	car[1][4] = "Could I get some directions to your heart? ";
	car[1][5] = "Courtesy begins in the home.";
	car[1][6] = "Courtesy is contagious.";
	
	car[2][0] = "Any decision you have to make tomorrow is a good decision.";
	car[2][1] = "Be careful or you could fall for some tricks today.";
	car[2][2] = "Beauty in its various forms appeals to you. ";
	car[2][3] = "Because you demand more from yourself, others respect you deeply.";
	car[2][4] = "Believe in yourself and others will too.";
	car[2][5] = "Believe it can be done.";
	car[2][6] = "Better ask twice than lose yourself once.";
	
	car[3][0] = "Don’t confuse recklessness with confidence.";
	car[3][1] = "Don’t just spend time. Invest it.";
	car[3][2] = "Don’t just think, act!";
	car[3][3] = "Don’t let friends impose on you, work calmly and silently.";
	car[3][4] = "Don’t let the past and useless detail choke your existence.";
	car[3][5] = "Don’t let your limitations overshadow your talents.";
	car[3][6] = "Don’t worry; prosperity will knock on your door soon.";

	car[4][0] = "Now is a good time to buy stock.";
	car[4][1] = "Now is the time to go ahead and pursue that love interest!";
	car[4][2] = "Now is the time to try something new";
	car[4][3] = "No one can walk backwards into the future.";
	car[4][4] = "Others can help you now.";
	car[4][5] = "Pennies from heaven find their way to your doorstep this year!";
	car[4][6] = "People are attracted by your Delicate[sic] features.";

	car[5][0] = "The person who will not stand for something will fall for anything.";
	car[5][1] = "The philosophy of one century is the common sense of the next.";
	car[5][2] = "The saints are the sinners who keep on trying.";
	car[5][3] = "The secret to good friends is no secret to you.";
	car[5][4] = "The small courtesies sweeten life, the greater ennoble it.";
	car[5][5] = "The smart thing to do is to begin trusting your intuitions.";
	car[5][6] = "The strong person understands how to withstand substantial loss.";
	
	car[6][0] = "You make people realize that there exist other beauties in the world."
	car[6][1] = "You never hesitate to tackle the most difficult problems."
	car[6][2] = "You seek to shield those you love and like the role of provider."
	car[6][3] = "You should be able to make money and hold on to it."
	car[6][4] = "You should be able to undertake and complete anything."
	car[6][5] = "You understand how to have fun with others and to enjoy your solitude."
	car[6][6] = "You will always be surrounded by true friends."

	
    return car[d][h*12%7];  
}
 