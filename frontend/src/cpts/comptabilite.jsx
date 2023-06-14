import React from 'react';
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';

const data = [
    { nomProduit: 'Produit 1', solde: 67, prix: 1000, quantite: 5, tva: 12.4, id: 1 },
    { nomProduit: 'Produit 1', solde: 67, prix: 1000, quantite: 5, tva: 12.4, id: 1 },
    { nomProduit: 'Produit 1', solde: 67, prix: 1000, quantite: 5, tva: 12.4, id: 1 },
    { nomProduit: 'Produit 1', solde: 67, prix: 1000, quantite: 5, tva: 12.4, id: 1 },
    { nomProduit: 'Produit 1', solde: 67, prix: 1000, quantite: 5, tva: 12.4, id: 1 },
    { nomProduit: 'Produit 1', solde: 67, prix: 1000, quantite: 5, tva: 12.4, id: 1 },
              ];

function Tableau() {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell > Nom du produit</TableCell>
                        <TableCell>solde</TableCell>
                        <TableCell>Prix</TableCell>
                        <TableCell>Quantité</TableCell>
                        <TableCell>tva</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item.id} >
                            <TableCell style={{ color: 'blue' }} > {item.nomProduit} </TableCell>
                            <TableCell style={{ height: '30px' }}>{item.solde}</TableCell>
                            <TableCell style={{ height: '30px' }} >{item.prix}</TableCell>
                            <TableCell style={{ height: '30px' }}>{item.quantite}</TableCell>
                            <TableCell style={{ height: '30px' }}>{item.tva}</TableCell>
                            <TableCell style={{ height: '30px' }}>
                                <Button color="error" startIcon={<DeleteIcon />} />
                                <Button color="primary" startIcon={<EditCalendarTwoToneIcon />} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
export default Tableau;