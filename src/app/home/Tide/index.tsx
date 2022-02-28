import React  from 'react' ; 
import MareiBox from '../../../common/MareiBox';
import WaterIcon from '@mui/icons-material/Water';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Tide:React.FC =  () => {

    return (
    <>
    <MareiBox heading={'Tide'}  Logo={WaterIcon}>
        <p>Calculate Total Energy created by Tide</p>
            <Box>
                <form className={'formGroup'}>
                <div className={'formbox'}>
                <TextField id="cpofTurbine" label="Cp of Turbine" variant="standard"/>
                <TextField id="waterDepth" label="Water Depth" variant="standard" />
                <TextField id="tideRange" label="Tide range" variant="standard"/>
                <TextField id="turbineRadius" label="Turbine Radius" variant="standard" />
                <TextField id="waterDensity" label="Water Density" variant="standard" />
                <TextField id="meanVelocity" label="Mean velocity" variant="standard" />
                </div>
                <Button size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form>  
            </Box>
    </MareiBox>
    </>)
}

export default Tide;