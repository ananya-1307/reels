import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './Signup.css'
import insta from '../Assets/Instagram.jpg'
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import {Link} from 'react-router-dom';


export default function Login() {
    // const useStyles = styled({
    //     test1: {  //this is an object which we stored in useStyles
    //         color: 'grey',
    //         textAlign: 'center'
    //     }
    // })

    //const classes = useStyles(); // calling the useStyles method
    // now we can use this on any tag as className={classes.text1}


    return (
        <div className="signupWrapper">
            <div className="signupCard">
                <Card variant="outlined">
                    <div className='insta-logo'>
                        <img src={insta} alt="" />
                    </div>

                    <CardContent>
                        <Typography className="test1" variant="subtitle1">
                            Signup to see photos and videos from friends
                        </Typography>
                        {true && <Alert severity="error">This is an error alert — check it out!</Alert>}
                        <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth={true} margin="dense" size="small" />
                        <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true} margin="dense" size="small" />
                        <TextField id="outlined-basic" label="Full Name" variant="outlined" fullWidth={true} margin="dense" size="small" />
                        <Button size="small" color="secondary" fullWidth={true} variant="outlined" margin="dense" startIcon={<CloudUploadIcon/>} component="label" >
                            Upload profile image
                            <input type="file" accept='image/*'  hidden />
                        </Button>

                    </CardContent>

                    <CardActions>
                        <Button  color="primary" fullWidth={true} variant="contained">
                            SIGN UP
                        </Button>
                    </CardActions>

                    <CardContent>
                        <Typography className="test1" variant="subtitle1">
                        By signing up, you agree to our Terms, Conditions and Cookies policy.
                        </Typography>
                        

                    </CardContent>
                </Card>

                <Card variant='outlined' className='card2' >
                <CardContent>
                        <Typography className="test1" variant="subtitle1">
                        Having an account ? <Link to="/login" style={{textDecoration:'none'}}>Login</Link>
                        </Typography>
                        

                    </CardContent>

                </Card>
            </div>
        </div>
    );
}
