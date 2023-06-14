import React from 'react';
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';

const data = [
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F',  id: 1 },
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F', id: 2 },
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F', id: 3 },
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F', id: 4 },
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F', id: 1 },
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F', id: 2 },
    { name: 'bukis', mail: 'jael@gmail.com', nuber: +243995048882, genre:'F', id: 3 },
              ];
  
  function Tableau() {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>name</TableCell>
              <TableCell>mail</TableCell>
              <TableCell>nuber</TableCell>
              <TableCell>genre</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Avatar>{item.name.charAt(0)}</Avatar> {item.name}
                </TableCell>
                <TableCell>{item.mail}</TableCell>
                <TableCell>{item.nuber}</TableCell>
                <TableCell>{item.genre}</TableCell>
                <TableCell>
                  <Button  color="error" startIcon={<DeleteIcon />} />
                  <Button  color="primary" startIcon={<EditCalendarTwoToneIcon />} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
export default Tableau;