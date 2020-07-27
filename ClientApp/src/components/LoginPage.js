import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '} &copy; {' '}  
      <Link color="inherit" href="https://material-ui.com/">
        Blablabla.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export class LoginPage extends React.Component {
  static displayName = LoginPage.name;
  
  constructor (props) {
    super(props);
  }
  // Dont have an account? Sign Up

  render() {   
    return (            
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div style={{color:'orange', display:'flex', flexDirection:'column', alignItems:'center', marginTop:'64px'}}>
          <p>Testando o Login</p>
          <Avatar style={{margin:'8px', backgroundColor: '#f50057'}}>
            <LockOutlinedIcon />
          </Avatar>
          <form  style={{width:'100%', marginTop:'8px'}} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="usuarioEmail"
              label="Nome de usu&aacute;rio ou Email"
              name="usuarioEmail"
              autoComplete="usuarioEmail"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {/* <!-Button 
             variant='contained' 
             color='secondary' 
             fullWidth            
             >ENTRAR</Button-> */}

            <Button
            type="submit"
            fullWidth
            variant='contained'
            color='primary'            
            style={{margin:'24px 0px 16px'}}>
             ENTRAR
            </Button>
            <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" id="esqueceuSenha">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2" id="cadPageLogin">
                {"Não tem uma conta? Cadastre-se"}                
              </Link>
            </Grid>
          </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}