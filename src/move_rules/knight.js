import { inBounds } from './helpers';

const addTo = (position) => (rule) => [position[0] + rule[0], position[1] + rule[1]];

const validTarget = (move) => {
  let target = board[move[0], move[1]];
  return inBounds(move) && target.color != color;
}

export const knight = (position, board) => {
  const {color} = board[position[0]][position[1]];
  const moveRules = [
    [1, 2], [2, 1], [1, -2], [2, -1], [-1, 2], [-2, 1], [-1, -2], [-2, -1]
  ];

  return moveRules.map(addTo(position)).filter(validTarget);
}
