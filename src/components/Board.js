import React from 'react';
import { board } from '../move_rules/board';

export default class Board extends React.Component {
  render() {
    const gameBoard = board();
    const rows = gameBoard.map((row, i) => {
      return (
        <tr key={i}>
          {
            row.map((square, i) => {
              const styling = i % 2 != 0 ? {border: '1px solid black'} : { border: '1px solid white', backgroundColor: 'black', color: 'white' };
              return (
                <td key={i} style={styling}>
                  { square.color }
                  <br />
                  { square.occupiedBy }
                </td>
              )
            })
          }
        </tr>
      )
    });

    return (
      <div className='GameBoard'>
        <table style={{border: '1px solid black'}}>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    )
  }
}
