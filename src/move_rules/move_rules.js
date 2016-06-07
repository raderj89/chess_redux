const rook = [];
for(let i = 1; i < 11; i++) {
  rook.push([0, i], [i, 0], [-i, 0], [0, -i]);
}

const knight = [[2, 1], [2, -1], [1, 2], [1, -2], [-1, 2], [-2, 1], [-1, -2],
                [-2, -1]];

const newBoard = () => {
  const board = [];
  board.push(backRow('black'));
  board.push(pawnRow('black'));
  for(let i = 0; i < 4; i++) board.push(emptyRow());
  board.push(pawnRow('white'));
  board.push(backRow('white').reverse());
  return board;
};

const backPieces = ['rook', 'knight', 'bishop', 'queen',
                    'king', 'bishop', 'knight', 'rook'];
const makePiece = (color, type) => {
  return { type: type, color: color };
};
const pawnRow = (color) => new Array(8).fill({type: 'pawn', color: color});
const emptyRow = () => new Array(8).fill(null);
const backRow = (color) => backPieces.map(makePiece.bind(null, color));


const board = newBoard();
// 0,0 = white square

export { rook, board };

const applyMove = function(position, move) {
  return [position[0] + move[0], position[1] + move[1]];
};

const inBounds = (pos) => {
  return !(pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7);
};

const generateThreatPositions = (moveMatrix, position) => {
  return moveMatrix
    .map(applyMove.bind(null, position))
    .filter(inBounds)
    .filter(occupiedSpaces);
};
