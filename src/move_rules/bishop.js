import {inBounds} from './helpers';

export const rook = (position, board) => {
  const moves = [];
  const {color} = board[position[0]][position[1]];
  let canUp = true;
  let canDown = true;
  let canLeft = true;
  let canRight = true;

  for(let i = 1, i < 8; i++) {
    let up = [position[0] + i, position[1] + i];
    let down = [position[0] - i, position[1] - i];
    let left = [position[0] + i, position[1] - i];
    let right = [position[0] - i, position[1] + i];
    let target;

    if(canUp && inBounds(up)) {
      target = board[up[0], up[1]];
      if(target.color) {
        canUp = false;
      }
      if(target.color != color) {
        moves.push(up);
      }
    }
    if(canDown && inBounds(down)) {
      target = board[down[0], down[1]];
      if(target.color) {
        canDown = false;
      }
      if(target.color != color) {
        moves.push(down);
      }
    }
    if(canLeft && inBounds(left)) {
      target = board[left[0], left[1]];
      if(target.color) {
        canLeft = false;
      }
      if(target.color != color) {
        moves.push(left);
      }
    }
    if(canRight && inBounds(right)) {
      target = board[right[0], right[1]];
      if(target.color) {
        canRight = false;
      }
      if(target.color != color) {
        moves.push(right);
      }
    }
  }
};
