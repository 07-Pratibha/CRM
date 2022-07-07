import './userLogin.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useDispatch } from 'react-redux';
import { getUser } from '../redux/actions/useractions';


function UserLogin() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(getUser()).then().catch()
  }
 
  return (
    <div className= "containpaper">
      <Paper className= "paper" variant="elevation" elevation={10} verticalalign="middle">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className="grid1" item xs={12}>
          <Typography fontSize={23}> <b>User Login</b></Typography>
          </Grid>
          <Grid className="grid1" item xs={12}>
          <TextField type="email" fullWidth id="outlined-basic" required label="Email" variant="outlined" />
          </Grid>
          <Grid className="grid1" item xs={12}>
          <TextField  type="password" fullWidth id="outlined-basic" required label="Password" variant="outlined" />
          </Grid>
          <Grid container spacing={2} className="submit" item xs={12}>
            <Button className="button-bottom" type="submit" variant="contained" onClick={handleClick}>SIGN IN</Button>
            {/* <button onClick={() => dispatch({ type: 'GET_USERS_SUCCESSFUL' })}>
               Show
             </button> */}
            {/* <Button className="button-bottom" type="submit" variant="contained" onClick={onClick}>SHOW</Button> */}
            <a className="button-bottom" href="http://localhost:3000/UserRegistration">New User? Register</a>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserLogin;
