import {rook} from './rook';
import {bishop} from './bishop';

export const queen = (pos, board) => rook(pos, board) + bishop(pos, board);
