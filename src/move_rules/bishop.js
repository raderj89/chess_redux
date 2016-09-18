import {makeMoveProcessor} from './helpers';

export const bishop = (position, board) => {
  const moves = [];
  const {color} = board[position[0]][position[1]];
  const processMove = makeMoveProcessor(color, board, moves);
  let canUpRight = true;
  let canDownLeft = true;
  let canDownRight = true;
  let canUpLeft = true;
  let upRight;
  let downLeft;
  let downRight;
  let upLeft;

  for(let i = 1, i < 8; i++) {
    upRight = [position[0] + i, position[1] + i];
    downLeft = [position[0] - i, position[1] - i];
    downRight = [position[0] + i, position[1] - i];
    upLeft = [position[0] - i, position[1] + i];

    canUpRight && (canUpRight = processMove(upRight));
    canDownLeft && (canDownLeft = processMove(downLeft));
    canDownRight && (canDownRight = processMove(downRight));
    canUpLeft && (canUpLeft = processMove(upLeft));
  }
};
