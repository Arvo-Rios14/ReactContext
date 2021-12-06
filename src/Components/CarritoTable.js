import React, { useContext } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AppContext } from "../Context/AppContext";
import { Button } from "@material-ui/core";

var rows = [];

export default function CarritoTable() {
  const { carrito, modificarStatus } = useContext(AppContext);
  rows = carrito;
  if (carrito.length > 0) {
    return (
      <div className="libtab">
        <h2>Lista de deseos</h2>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="th">Código</TableCell>
                <TableCell className="th">Titulo</TableCell>
                <TableCell className="th">Idioma</TableCell>
                <TableCell className="th"> </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.codigo} className="tr">
                  <TableCell align="center">{row.codigo}</TableCell>
                  <TableCell>{row.titulo}</TableCell>
                  <TableCell>{row.idioma}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => modificarStatus(row)}
                      disabled={!row.desactivado}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  } else {
    return (
      <div className="libtab">
        <h2>Lista de deseos</h2>
        <span>Lista de deseos vacia</span>
      </div>
    );
  }
}
