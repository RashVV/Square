import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import '../App.css';

function createMineField(index, mode) {
  const squares=[]
  for (let i=0; i<+mode; i++) {
    squares.push(i);
}
  return {
    col: index,
    rows: squares
  }
}


export default function Squares({mode, setAlerts}) {
  const rows = [];
    for (let index = 0; index < +mode; index++) {
      rows.push(createMineField(index, mode))
  }
  debugger
  return (
    <div className="Table" align="center" >
     <TableContainer >
      <Table className="Table" aria-label="caption table">
        <TableBody>
          {rows.map(({col, rows}, index) => (
            <TableRow key={index} id={"рядок:" + (col+1)}>
            {rows.map((row) => (
              <TableCell component="th" scope={row+1} className="Table" key={row} />
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
