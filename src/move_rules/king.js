import { inBounds, addTo, validTarget } from './helpers';

const king = (position, board) => {
  const {color} = board[position[0]][position[1]];
  const moveRules = [
    [1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1];
  ]

  return moveRules.map(addTo(position)).filter(validTarget);
}
