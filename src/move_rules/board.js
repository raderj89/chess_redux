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

export const board = () => {
  let blackPieces = backPieces.concat(pawns());
  let whitePieces = pawns().concat(backPieces);

  let board = [];

  buildRows(board, blackPieces, 'black')

  for(let i = 0; i < 4; i++) {
    board.push(Array(8).fill({ occupiedBy: null, selected: false, color: null }));
  }

  buildRows(board, whitePieces, 'white')

  return board;
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
