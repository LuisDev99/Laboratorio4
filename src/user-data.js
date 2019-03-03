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
            clase1: 'Clase 1',
            clase2: 'Clase 2',
            clase3: 'Clase 3',
            notaP1C1: 0,
            notaP2C1: 0,
            notaP1C2: 0,
            notaP2C2: 0,
            notaP1C3: 0,
            notaP2C3: 0
        }


    }

    handleClick = ()=> {

        console.log('Gello');
        
        this.setState({
            clase1: 'Clase 1',
            clase2: 'Clase 2',
            clase3: 'Clase 3',
            notaP1C1: 0,
            notaP2C1: 0,
            notaP1C2: 0,
            notaP2C2: 0,
            notaP1C3: 0,
            notaP2C3: 0
        })
    }

    handleChangeC1 = (e)=> {
        this.setState({clase1: e.target.value});
    }

    handleChangeC1P1 = (e)=> {
        this.setState({notaP1C1: e.target.value});
    }

    handleChangeC1P2 = (e)=> {
        this.setState({notaP2C1: e.target.value});
    }

    handleChangeC2 = (e)=> {
        this.setState({clase2: e.target.value});
    }

    handleChangeC2P1 = (e)=> {
        this.setState({notaP1C2: e.target.value});
    }

    handleChangeC2P2 = (e)=> {
        this.setState({notaP2C2: e.target.value});
    }

    handleChangeC3 = (e)=> {
        this.setState({clase3: e.target.value});
    }

    handleChangeC3P1 = (e)=> {
        this.setState({notaP1C3: e.target.value});
    }

    handleChangeC3P2 = (e)=> {
        this.setState({notaP2C3: e.target.value});
    }

    render(){

        return(
            <div>
                <TextField   placeholder="Clase 1" onChange = {this.handleChangeC1}> </TextField>    
                &nbsp;
                <TextField  placeholder="Parcial 1 Nota" onChange = {this.handleChangeC1P1} > </TextField> 
                &nbsp;
                <TextField  placeholder="Parcial 2 Nota" onChange = {this.handleChangeC1P2} > </TextField> 
                <br/>

                <TextField   placeholder="Clase 2" onChange = {this.handleChangeC2} > </TextField>    
                &nbsp;
                <TextField  placeholder="Parcial 1 Nota" onChange = {this.handleChangeC2P1}> </TextField> 
                &nbsp;
                <TextField  placeholder="Parcial 2 Nota" onChange = {this.handleChangeC2P2} > </TextField> 
                <br/>

                <TextField   placeholder="Clase 3" onChange = {this.handleChangeC3} > </TextField>    
                &nbsp;
                <TextField  placeholder="Parcial 1 Nota" onChange = {this.handleChangeC3P1} > </TextField> 
                &nbsp;
                <TextField  placeholder="Parcial 2 Nota" onChange = {this.handleChangeC3P2} > </TextField> 

                <br/>
                <br/>

                <Button variant="contained" color="primary" onClick={ this.handleClick}>
                    Guardar
                </Button>

                <TableHead>
                    <TableRow>
                        <TableCell align="right">Nombre de Clase</TableCell>
                        <TableCell align="right">Parcial 1</TableCell>
                        <TableCell align="right">Parcial 2</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align="right">{this.state.clase1}</TableCell>
                        <TableCell align="right">{this.state.notaP1C1}</TableCell>
                        <TableCell align="right">{this.state.notaP2C1}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{this.state.clase2}</TableCell>
                        <TableCell align="right">{this.state.notaP1C2}</TableCell>
                        <TableCell align="right">{this.state.notaP2C2}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right">{this.state.clase3}</TableCell>
                        <TableCell align="right">{this.state.notaP1C3}</TableCell>
                        <TableCell align="right">{this.state.notaP2C3}</TableCell>
                    </TableRow>
                </TableBody>
            </div>    
        );
    }

}

export default userData;
