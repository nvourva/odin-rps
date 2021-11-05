const choices = [ 'rock', 'paper', 'scissors' ];

const computerPlay = () => {
	let computerChoice = Math.floor(Math.random()*choices.length);

	return choices[computerChoice];
}

const match = (playerChoice, computerChoice) => {
	playerChoice = playerChoice.toLowerCase();
	let text = '';
	let winner = '';

	if ( playerChoice === computerChoice ) {
		text = 'It is a tie, try again!';
		winner = 'tie';

		return [text, winner];
	}
	
	switch (playerChoice) {
		case 'rock':
			text = computerChoice === 'paper' ? `Player lost ${computerChoice} beats ${playerChoice}.` : `Player won ${playerChoice} beats ${computerChoice}.`;
			winner = computerChoice === 'paper' ? 'computer' : 'player';
			break;
		case 'paper':
			text = computerChoice === 'scissors' ? `Player lost ${computerChoice} beats ${playerChoice}.` : `Player won ${playerChoice} beats ${computerChoice}.`;
			winner = computerChoice === 'scissors' ? 'computer' : 'player';
			break;
		case 'scissors':
			text = computerChoice === 'rock' ? `Player lost ${computerChoice} beats ${playerChoice}.` : `Player won ${playerChoice} beats ${computerChoice}.`;
			winner = computerChoice === 'rock' ? 'computer' : 'player';
			break;
	}

	return [text, winner];
}

const series = (games) => {
	playerScore = 0;
	computerScore = 0;

	games = isNaN(games) ? 5 : parseInt(Math.abs(games));

	for ( i = games; i > 0; i-- ) {
		
		let game = match(prompt('Choose your destiny!', 'rock'), computerPlay());
		console.log(game[0]);
		if ( game[1] === 'computer' ) {
			computerScore++;
		} else if ( game[1] === 'player' ) {
			playerScore++;
		}

	}

	if ( playerScore > computerScore ) {
		return `Player won ${playerScore} vs ${computerScore}`;
	} else if ( computerScore > playerScore ) {
		return `Computer won ${computerScore} vs ${playerScore}`;
	} else {
		return 'A tie? How is this possible?';
	}
}
console.log(series(prompt('How many rounds would you like to play?', 5)));
