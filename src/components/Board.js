import React from 'react';
import { board } from '../move_rules/board';

export default class Board extends React.Component {
  styling(i, j) {
    if (i % 2 === 0 && j % 2 === 0) {
      return {
        border: '1px solid white',
        backgroundColor: 'black',
        color: 'white'
      }
    }
    if (i % 2 != 0 && j % 2 != 0) {
      return {
        border: '1px solid white',
        backgroundColor: 'black',
        color: 'white'
      }
    }
    return { border: '1px solid black' };
  }

  render() {
    const gameBoard = board();
    const rows = gameBoard.map((row, i) => {
      return (
        <tr key={i}>
          {
            row.map((square, j) => {
              return (
                <td key={j} style={this.styling(i, j)}>
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