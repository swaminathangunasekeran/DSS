import React  from 'react' ; 
import MareiBox from '../../../common/MareiBox';
import WavesIcon from '@mui/icons-material/Waves';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Wave:React.FC =  () => {

    return (
    <>
    <MareiBox heading={'wave'}  Logo={WavesIcon}>
    <p>Calculate Total Energy created by Wave</p>
            <Box>
                <form className={'formGroup'}>
                <div className={'formbox'}>
                <TextField id="waterDensity" label="Water Density" variant="standard"/>
                <TextField id="accelerationOfGravity" label="Acceleration by Gravity" variant="standard" />
                <TextField id="waveHeight" label="Wave Height" variant="standard"/>
                <TextField id="wavePeriod" label="Wave period" variant="standard" />
                <TextField id="efficencyOfPTOTurbine" label="Efficiency of PTO/Turbine" variant="standard" />
                </div>
                <Button size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form>  
            </Box>
    </MareiBox>
    </>)
}

export default Wave;