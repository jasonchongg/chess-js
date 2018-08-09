var Pieces = {
	empty: 0,
	wP: 1,
	wN: 2,
	wB: 3,
	wR: 4,
	wQ: 5,
	wK: 6,
	bP, 7,
	bN: 8,
	bB: 9,
	bR: 10,
	bQ: 11,
	bK: 12
};

// or do you define a class piece?
/*
class Piece {
	constructor(name) {
		this.name = name;
		this.value //switch statement
	}


}
*/

var Num_Board_Squares = 120;

var Files = {
	FILE_A : 0, FILE_B: 1, FILE_C: 2, FILE_D: 3,
	FILE_E : 4, FILE_F: 5, FILE_G: 6, FILE_H: 7, FILE_NONE: 8 
};

var Ranks = {
	Rank_1 : 0, Rank_2: 1, Rank_3: 2, Rank_4: 3,
	Rank_5 : 4, Rank_6: 5, Rank_7: 6, Rank_8: 7, Rank_None: 8 
};