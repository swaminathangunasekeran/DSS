import React  from 'react' ; 
import MareiBox from '../../../common/MareiBox';
import AirIcon from '@mui/icons-material/Air';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Wind:React.FC =  () => {

    return (
    <>
    <MareiBox heading={'wind'}  Logo={AirIcon}>
    <p>Calculate Total Energy created by Wind</p>
            <Box>
                <form className={'formGroup'}>
                <div className={'formbox'}>
                <TextField id="cpTurbine" label="Turbine Cp" variant="standard"/>
                <TextField id="poleHeight" label="Pole Height" variant="standard" />
                <TextField id="turbineRadius" label="Turbine Radius" variant="standard"/>
                <TextField id="airDensity" label="Air Density" variant="standard" />
                <TextField id="meanVelocity" label="Mean Velocity" variant="standard" />
                </div>
                <Button size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form>  
            </Box>
    </MareiBox>
    </>)
}

export default Wind;