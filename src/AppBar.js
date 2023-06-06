import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';




export default function ButtonAppBar({ change, check }) {
    return (
        < FormGroup>
            <FormControlLabel control={<Switch defaultChecked onChange={change} checked={check} />} label="DarkMode" />
        </FormGroup>

    );
}