import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import '../App.css';

function createMineField(index, mode) {
  const squares=[]
  for (let i=1; i<= +mode; i++) {
    squares.push({
      row: i,
      isActive: false
    });
}
  return {
    col: index,
    rows: squares
  }
}



export default function Squares({mode, setSquares, squares}) {
  const [rows, setRows] = React.useState([]);

  if(!squares.length) {
    for (let index = 1; index <= +mode; index++) {
      rows.push(createMineField(index, mode))
    }
  }

  const onCellClick = (row, col, isActive) => {
    setSquares(prevState => [...prevState, {row, col, isActive}] );
      const newData = [];
        rows.forEach((c, i) => {
          if(c.col === row) {
            newData.push(c)
              c.rows.forEach((r, j) => {
                if(r.row === col) {
                  newData[i].rows[j] = {...r, isActive:!isActive}
                }
              })
            } else {
              newData.push(c)
          }})
            setRows(newData);
          }
    return (
      <div>
        <TableContainer >
          <Table>
            <TableBody>
              {rows.map(({col, rows}, index) => (
                <TableRow key={index}>
                  {rows.map(({row, isActive}) => (
                    <TableCell component="th" className={`Table ${isActive ? 'active' : ''}`} key={row} onClick={event => onCellClick(col, row, isActive)} />
                  ))}
                </TableRow>
                ))}
              </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  }
