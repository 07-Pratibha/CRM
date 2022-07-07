import './userRegistration.css';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function UserRegistration() {
  return (
    <div className= "containpaper-registration">
      <Paper className= "paper-registration" variant="elevation" elevation={10} verticalalign="middle">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid className="grid2" item xs={12}>
          <Typography fontSize={23}> <b>New User Registration</b></Typography>
          </Grid>
          <Grid className="grid2" item xs={12}>
          <TextField type="text" fullWidth id="outlined-basic" required label="Full Name" variant="outlined" />
          </Grid>
          <Grid className="grid2" item xs={12}>
          <TextField type="text" fullWidth id="outlined-basic" required label="Username" variant="outlined" />
          </Grid>
          <Grid className="grid2" item xs={12}>
          <TextField type="email" fullWidth id="outlined-basic" required label="Email" variant="outlined" />
          </Grid>
          <Grid className="grid2" item xs={12}>
          <TextField  type="password" fullWidth id="outlined-basic" required label="Password" variant="outlined" />
          </Grid>
          <Grid container spacing={2} className="submit-registration" item xs={12}>
            <Button className="button" on type="submit" variant="contained">SIGN UP</Button>
            <a className="button" href="http://localhost:3000/">Already Registered? Login</a>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default UserRegistration;