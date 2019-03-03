import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class userData extends Component{

    
    constructor(props){
        super(props);

        this.state = {
            clase1: '',
            clase2: '',
            clase3: '',
            notaP1C1: 0,
            notaP2C1: 0,
            notaP1C2: 0,
            notaP2C2: 0,
            notaP1C3: 0,
            notaP2C3: 0
        }


    }

    SimpleTable= ()=> {

        const styles = theme => ({
            root: {
              width: '100%',
              marginTop: theme.spacing.unit * 3,
              overflowX: 'auto',
            },
            table: {
              minWidth: 700,
            },
          });
          
          let id = 0;
          function createData(name, parcial1, parcial2) {
            id += 1;
            return { name, parcial1, parcial2 };
          }

         const rows = [
            createData(this.state.clase1, this.state.notaP1C1, this.state.notaP2C1),
            createData(this.state.clase2, this.state.notaP1C2, this.state.notaP2C2),
            createData(this.state.clase3, this.state.notaP1C3, this.state.notaP2C3),
          ];
          
        return (
            <div>
          <Paper >
            <Table >
              <TableHead>
                <TableRow>
                  <TableCell align="right">Nombre de Clase</TableCell>
                  <TableCell align="right">Parcial 1</TableCell>
                  <TableCell align="right">Parcial 2</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {rows.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.parcial1}</TableCell>
                    <TableCell align="right">{row.parcial2}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </Paper>
          </div>
        );
      }

    handleClick = ()=> {

        console.log('Gello');
        this.SimpleTable();
    }

    render(){

        return(
            <div>
                <TextField   placeholder="Clase 1"> </TextField>    
                &nbsp;
                <TextField  placeholder="Parcial 1 Nota"> </TextField> 
                &nbsp;
                <TextField  placeholder="Parcial 2 Nota"> </TextField> 
                <br/>

                <TextField   placeholder="Clase 2"> </TextField>    
                &nbsp;
                <TextField  placeholder="Parcial 1 Nota"> </TextField> 
                &nbsp;
                <TextField  placeholder="Parcial 2 Nota"> </TextField> 
                <br/>

                <TextField   placeholder="Clase 3"> </TextField>    
                &nbsp;
                <TextField  placeholder="Parcial 1 Nota"> </TextField> 
                &nbsp;
                <TextField  placeholder="Parcial 2 Nota"> </TextField> 

                <br/>
                <br/>

                <Button variant="contained" color="primary" onClick={ this.handleClick}>
                    Guardar
                </Button>

            

            </div>    
        );
    }

}

export default userData;