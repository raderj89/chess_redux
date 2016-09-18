export const inBounds([x, y]) => {
  return x < 8 && x > -1 && y < 8 && y > -1;
};

export const addTo = (position) => (
  (rule) => [position[0] + rule[0], position[1] + rule[1]];
)

export const validTarget = (move) => {
  let target = board[move[0], move[1]];
  return inBounds(move) && target.color != color;
}

export const makeMoveProcessor = (color, board, moves) => ([x, y]) => {
  const target = board[x][y];

  if(!inBounds(target)) return false;

  if(target.color != color) {
    moves.push([x, y]);
  }

  return !target.color
};
