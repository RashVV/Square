import React from 'react';
import { TableContainer, Table, TableBody, TableRow, TableCell, } from '@mui/material';
import '../App.css';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('', ),
  createData('', ),
  createData('', ),
  createData('', ),
  createData('', ),
];

export default function Squares({mode, setAlerts}) {
  return (
    <div className="Table" align="center" >
     <TableContainer component={mode}>
      <Table className="Table" aria-label="caption table">
        <TableBody>
          {rows.map((row, index) => (
            <TableRow  key={index}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className="Table" align="right">{row.calories}</TableCell>
              <TableCell className="Table" align="right">{row.fat}</TableCell>
              <TableCell className="Table" align="right">{row.carbs}</TableCell>
              <TableCell className="Table" align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}
