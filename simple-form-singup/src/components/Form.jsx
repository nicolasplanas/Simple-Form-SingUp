import { Button, TextField, Checkbox, FormGroup, FormControlLabel, Typography } from "@mui/material"
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';

function Form() {
    return(
        <div className="form">

            <HttpsOutlinedIcon color="secondary"/>

            <Typography variant="h5">
                Sing up
            </Typography>

            <div className="name">
                    <TextField 
                        label="First Name *" 
                        variant="outlined"
                    />
                    <TextField
                        label="Last Name *"
                        variant="outlined"
                    />
            </div>

            <div className="email-password-width">
                <TextField
                    fullWidth
                    label="Email Address *"
                    variant="outlined"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password *" 
                    variant="outlined"
                />
            </div>

            <FormGroup className="checkbox-width">
                <FormControlLabel control={<Checkbox/>} label="I want to receive inspiration, marketing promotions and updates via email."/>
            </FormGroup>
            <Button fullWidth variant="contained">SING UP</Button>
            <a href="https://www.screenlogin.com/" target="_blank">Already have an account? Sing in</a>
            <p>Copyright © <u>Your Website</u> 2023</p>
        </div>
    )
}

export default Form