import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, collapseClasses, } from '@mui/material';
import '../App.css';

function createData(index, mode) {
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
    rows.push(createData(index, mode)
    )
  }
  debugger
  return (
    <div className="Table" align="center" >
     <TableContainer >
      <Table className="Table" aria-label="caption table">
        <TableBody>
          {rows.map(({col, rows}, index) => (
            <TableRow key={index}>
            {rows.map((row) => (
              <TableCell component="th" scope="row" className="Table" key={row}></TableCell>
            ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
