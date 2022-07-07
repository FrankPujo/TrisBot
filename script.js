let eBoard = [true, true, true, true, true, true, true, true, true];
let xBoard = [true, true, true, false, false, false, false, false, false];
let oBoard = [false, false, false, false, false, false, false, false, false];

function checkWin( boards ) {
	combinations = [ [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
	for( let j = 0; j < boards.length; j++ ) {
		board = boards[j]
		for( let i = 0; i < combinations.length; i++ ) {
			combo = combinations[i];
			if (board[combo[0]] && board[combo[1]] && board[combo[2]]) {
				console.log( combinations[i] );
			}
		}
	}
}

checkWin([xBoard, oBoard]);