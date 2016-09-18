const backPieces = [
  ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
];

const pawns = () => {
  let pawns = [[]];
  for(let i = 0; i < 8; i++) {
    pawns[0].push('pawn');
  }
  return pawns;
}

const board = () => {
  let whitePieces = backPieces.concat(pawns());
  let blackPieces = pawns().concat(backPieces);

  let board = [];

  buildRows(board, whitePieces, 'white')

  for(let i = 0; i < 4; i++) {
    board.push(Array(8).fill({ occupiedBy: null, selected: false, color: null }));
  }

  buildRows(board, blackPieces, 'black')

  console.log(board);
}

const buildRows = (board, pieces, color) => {
  pieces.forEach((row) => {
    let newRow = [];
    row.forEach((piece) => {
      newRow.push(
        { occupiedBy: piece,
          selected: false,
          color: color
        }
      )
    })
    board.push(newRow);
  })
};

board();
