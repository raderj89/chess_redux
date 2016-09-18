import {makeMoveProcessor} from './helpers';

export const rook = (position, board) => {
  const moves = [];
  const {color} = board[position[0]][position[1]];
  const processMove = makeMoveProcessor(color, board, moves);
  let canUp = true;
  let canDown = true;
  let canLeft = true;
  let canRight = true;
  let up;
  let down;
  let left;
  let right;

  for(let i = 1, i < 8; i++) {
    up = [position[0], position[1] + i];
    down = [position[0], position[1] - i];
    left = [position[0] - i, position[1]];
    right = [position[0] + i, position[1]];

    canUp && (canUp = processMove(up));
    canDown && (canDown = processMove(down));
    canLeft && (canLeft = processMove(left));
    canRight && (canRight = processMove(right));
  }
};
