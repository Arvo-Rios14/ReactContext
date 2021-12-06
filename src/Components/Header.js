import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../Images/librerias-gandhi.png';



export default function ButtonAppBar() {

  return (
      <AppBar position="static" className="header">
        <Toolbar className="toolbar">
         <img src={logo} alt="Logo" className="logo"/>
        </Toolbar>
      </AppBar>
  );
}
