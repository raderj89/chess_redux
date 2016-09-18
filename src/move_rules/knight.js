import { inBounds } from './helpers';

export const knight = (position, board) => {
  const {color} = board[position[0]][position[1]];
  const moveRules = [
    [1, 2], [2, 1], [1, -2], [2, -1], [-1, 2], [-2, 1], [-1, -2], [-2, -1]
  ];

  return moveRules.map(addTo(position)).filter(validTarget);
}
