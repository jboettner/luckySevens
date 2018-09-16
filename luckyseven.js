//Name: Jessica Boettner
//Date Created: 9/10/18
//Most Recent Revision: 9/16/18

function playGame(){ //the functiont html document calls
	var yourMoney = document.getElementById("inputBet").value; //take value user types
	
	if (yourMoney <= 0) { //warning message
		alert("Your bet must be greater than 0");
		return;
	}

	var initial = yourMoney;
	var dice = 0;
	var sum = 0;
	var theRound = 0;
	var maxMoney = yourMoney;
	var maxMoneyRound = 0;

	do { //rules of the lucky sevens game
		dice = Math.floor(Math.random()*6) + 1; 
		sum = dice;
		dice = Math.floor(Math.random()*6) + 1; 
		sum = sum + dice;
	
		if (sum == 7) {
			yourMoney = yourMoney + 4;
		} else { 
			yourMoney = yourMoney - 1;
		}

		theRound++;

		if (yourMoney > maxMoney) { //tracking the max amount and rolls it takes to get there
			maxMoney = yourMoney;
			maxMoneyRound = theRound;
		}	
	} while (yourMoney>0) { //not an easy to read table because want it to not show at first

		document.getElementById("result").innerHTML=(
		'<hr style="width: 40%; border: 1.5px solid black;"/> <table style="border:3px solid black;" width="80%" class="table table-striped table-bordered table-responsive-sm"> <caption style="text-align: center; color:black; font-size:2em"> Results </caption> <tr> <td> Starting Bet </td> <td> $'
			+ initial + "</td> </tr> <tr> <td> Total Rolls Before Going Broke </td> <td>"
			+ theRound + "</td> </tr> <tr> <td> Highest Amount Won </td> <td> $"
			+ maxMoney + "</td> </tr> <tr> <td> Roll Count at Highest Amount Won  </td> <td>"
			+ maxMoneyRound + "</td> </tr> </table>");
		document.getElementById("again").innerHTML="Play Again";
	}
}

