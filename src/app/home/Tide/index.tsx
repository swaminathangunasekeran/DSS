import React,{ useState } from 'react' ; 
import MareiBox from '../../../common/MareiBox';
import WaterIcon from '@mui/icons-material/Water';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm , SubmitHandler} from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';

type Inputs = {
    cpofTurbine:number,
    waterDepth:number,
    tideRange:number,
    turbineRadius:number,
    waterDensity:number,
    meanVelocity:number
  };


const Tide:React.FC =  () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [outputEnergy, setOutputEnergy] = useState<number>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const sweptAreaTide = 3.14 * (Math.pow(data.turbineRadius , 2));
        const energy = (0.5) * (data.waterDensity) * (Math.pow(data.meanVelocity ,3)) * (data.cpofTurbine) * sweptAreaTide;
        setOutputEnergy(energy);
    }

    return (
    <>
    <MareiBox heading={'Tide'}  Logo={WaterIcon}>
        <p>Calculate Total Energy created by Tide</p>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)} className={'formGroup'}>
                <div className={'formbox'}>
                    <div>
                    <TextField sx={{ width: '100%' }} {...register('cpofTurbine', {required: true,pattern:/[0-9]+/})} id="cpofTurbine" label="Cp of Turbine" variant="standard"/>
                    {errors.cpofTurbine && (
                    <FormHelperText className='errorText'>cpofTurbine is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField sx={{ width: '100%' }} {...register('waterDepth', {required: true,pattern:/[0-9]+/})}  id="waterDepth" label="Water Depth" variant="standard" />
                    {errors.waterDepth && (
                    <FormHelperText className='errorText'>waterDepth is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField sx={{ width: '100%' }} {...register('tideRange', {required: true,pattern:/[0-9]+/})}   id="tideRange" label="Tide range" variant="standard"/>
                    {errors.tideRange && (
                    <FormHelperText className='errorText'>waterDepth is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField sx={{ width: '100%' }} {...register('turbineRadius', {required: true,pattern:/[0-9]+/})}  id="turbineRadius" label="Turbine Radius" variant="standard" />
                    {errors.turbineRadius && (
                    <FormHelperText className='errorText'>turbineRadius is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField sx={{ width: '100%' }} {...register('waterDensity', {required: true,pattern:/[0-9]+/})}  id="waterDensity" label="Water Density" variant="standard" />
                    {errors.waterDensity && (
                    <FormHelperText className='errorText'>waterDensity is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField sx={{ width: '100%' }} {...register('meanVelocity', {required: true,pattern:/[0-9]+/})}  id="meanVelocity" label="Mean velocity" variant="standard" />
                    {errors.meanVelocity && (
                    <FormHelperText className='errorText'>meanVelocity is not valid</FormHelperText>
                    )}
                    </div>
                
                </div>
                <Button type='submit' size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form>
                {outputEnergy &&
                  <p className='outputEnergy'>Energy created by Solar(W) {outputEnergy}</p>
                }   
            </Box>
    </MareiBox>
    </>)
}

export default Tide;