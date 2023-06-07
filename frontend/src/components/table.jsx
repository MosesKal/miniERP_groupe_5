import React from 'react';
import { Avatar, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditCalendarTwoToneIcon from '@mui/icons-material/EditCalendarTwoTone';
import ListAltIcon from '@mui/icons-material/ListAlt';


const data = [
    { nomProduit: 'Produit 1', catalogue: 'informatique', prix: 1000, quantite: 5, statut: 'En cours', id: 1 },
    { nomProduit: 'Produit 2', catalogue: 'Catalogue 2', prix: 20, quantite: 3, statut: 'Terminé', id: 2 },
    { nomProduit: 'Produit 2', catalogue: 'Catalogue 2', prix: 20, quantite: 3, statut: 'Terminé', id: 2 },
    { nomProduit: 'Produit 2', catalogue: 'Catalogue 2', prix: 20, quantite: 3, statut: 'Terminé', id: 2 },
    // Ajoutez d'autres données ici...
  ];
  

  function Tableau() {
    return (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nom du produit</TableCell>
              <TableCell>Catalogue</TableCell>
              <TableCell>Prix</TableCell>
              <TableCell>Quantité</TableCell>
              <TableCell>Statut</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <Avatar>{item.nomProduit.charAt(0)}</Avatar> {item.nomProduit}
                </TableCell>
                <TableCell>{item.catalogue}</TableCell>
                <TableCell>{item.prix}</TableCell>
                <TableCell>{item.quantite}</TableCell>
                <TableCell>{item.statut}</TableCell>
                <TableCell>
                  <Button  color="error" startIcon={<DeleteIcon />} />
                  <Button  color="primary" startIcon={<EditCalendarTwoToneIcon />} />
                  <Button  color="info" startIcon={<ListAltIcon />} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
export default Tableau;