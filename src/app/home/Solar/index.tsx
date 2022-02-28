import React  from 'react' ;
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import MareiBox from '../../../common/MareiBox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Solar:React.FC =  () => {

    return (
    <>
    <MareiBox heading={'solar'}  Logo={WbSunnyIcon}>
            <p>Calculate Total Energy created by Solar</p>
            <Box>
                <form className={'formGroup'}>
                <div className={'formbox'}>
                <TextField id="totalPanelArea" label="Total Pannel Area" variant="standard"/>
                <TextField id="annualAverageSolar" label="Annual average Solar radiation" variant="standard" />
                <TextField id="efficencySolar" label="Efficiency % Solar Panel" variant="standard"/>
                <TextField id="performanceRatio" label="Performance Ratio" variant="standard" />
                </div>
                <Button size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form>  
            </Box>
    </MareiBox>
    </>)
}

export default Solar;