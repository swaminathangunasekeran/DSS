import React, { useState }  from 'react' ;
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useForm , SubmitHandler} from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';
import MareiBox from '../../../common/MareiBox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

type Inputs = {
    totalPanelArea:number,
    annualAverageSolar:number,
    efficencySolar:number,
    performanceRatio:number
  };

const Solar:React.FC =  () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [outputEnergy, setOutputEnergy] = useState<number>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        setOutputEnergy(((data.totalPanelArea*data.annualAverageSolar*data.efficencySolar*data.performanceRatio)/100));
    }

    return (
    <>
    <MareiBox heading={'solar'}  Logo={WbSunnyIcon}>
            <p>Calculate Total Energy created by Solar</p>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className={'formGroup'}>
                <div className={'formbox'}>
                <div>
                <TextField  sx={{ width: '100%' }} {...register("totalPanelArea",{required: true,pattern:/[0-9]+/})} id="totalPanelArea" label="Total Pannel Area" variant="standard"/>
                {errors.totalPanelArea && (
                    <FormHelperText className='errorText'>TotalPanelArea is not valid</FormHelperText>
                )}
                </div>    
                <div>
                <TextField sx={{ width: '100%' }} {...register("annualAverageSolar",{required: true,pattern:/[0-9]+/})} id="annualAverageSolar" label="Annual average Solar radiation" variant="standard" />
                {errors.annualAverageSolar && (
                   <FormHelperText className='errorText'> Performance ratio is not valid</FormHelperText>
                )}
                </div>
                <div>
                <TextField  sx={{ width: '100%' }} {...register("efficencySolar",{required: true, pattern:/[0-9]+/})} id="efficencySolar" label="Efficiency % Solar Panel" variant="standard"/>
                {errors.efficencySolar && (
                    <FormHelperText className='errorText'>EfficencySolar input is not valid</FormHelperText>
                )}
                </div>
               <div>
               <TextField  sx={{ width: '100%' }} {...register("performanceRatio",{required: true, pattern:/[0-9]+/})}  id="performanceRatio" label="Performance Ratio" variant="standard" />
                {errors.performanceRatio && (
                   <FormHelperText className='errorText'>Performance input is not valid</FormHelperText>
                )}
               </div>
               
                </div>
                <Button type='submit' size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form> 
                {outputEnergy &&
                  <p className='outputEnergy'>Energy created by Solar(kWh/year) {outputEnergy}</p>
                } 
            </Box>
    </MareiBox>
    </>)
}

export default Solar;