import React ,{useState}  from 'react' ; 
import MareiBox from '../../../common/MareiBox';
import WavesIcon from '@mui/icons-material/Waves';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm , SubmitHandler} from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';


type Inputs = {
    waterDensity:number,
    accelerationOfGravity:number,
    waveHeight:number,
    wavePeriod:number,
    efficencyOfPTOTurbine:number
  };

const Wave:React.FC =  () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [outputEnergy, setOutputEnergy] = useState<number>();
    const onSubmit: SubmitHandler<Inputs> = data => {
       //  1. wave_power = ((water_density_wave * 9.81 ) / (64 * 3.14)) / ((wave_height**2) * (wave_period))
       //  2. output_power_wave = (pto_efficiency* wave_power)  / 100
       console.log('quadrantofWavePower',data);
       const quotitionofWavePower = (data.waterDensity * 9.81)/(200.96);
        console.log('quadrantofWavePower',quotitionofWavePower);
        const denominator  = (Math.pow(data.waveHeight ,2) * (data.wavePeriod)); 
        console.log('denominator',Math.pow(data.waveHeight ,2));
       const wavePower = ( (quotitionofWavePower)/denominator);
       const output = (data.efficencyOfPTOTurbine * wavePower)/ 100;
       setOutputEnergy(output);
    }

    return (
    <>
    <MareiBox heading={'wave'}  Logo={WavesIcon}>
    <p>Calculate Total Energy created by Wave</p>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}  className={'formGroup'}>
                <div className={'formbox'}>
                    <div>
                    <TextField id="waterDensity" {...register('waterDensity', {required: true,pattern:/[0-9]+/})}  label="Water Density" variant="standard"/>
                    {errors.waterDensity && (
                    <FormHelperText className='errorText'>waterDensity is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField id="accelerationOfGravity" {...register('accelerationOfGravity', {required: true,pattern:/[0-9]+/})}   label="Acceleration by Gravity" variant="standard" />
                    {errors.accelerationOfGravity && (
                         <FormHelperText className='errorText'>accelerationOfGravity is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField id="waveHeight" {...register('waveHeight', {required: true,pattern:/[0-9]+/})}  label="Wave Height" variant="standard"/>
                    {errors.waveHeight && (
                        <FormHelperText className='errorText'>waveHeight is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField id="wavePeriod"  {...register('wavePeriod', {required: true,pattern:/[0-9]+/})}  label="Wave period" variant="standard" />
                    {errors.wavePeriod && (
                        <FormHelperText className='errorText'>wavePeriod is not valid</FormHelperText>
                    )}
                    </div>
                    <div>
                    <TextField id="efficencyOfPTOTurbine" {...register('efficencyOfPTOTurbine', {required: true,pattern:/[0-9]+/})}  label="Efficiency of PTO/Turbine" variant="standard" />
                    {errors.efficencyOfPTOTurbine && (
                        <FormHelperText className='errorText'>efficencyOfPTOTurbine is not valid</FormHelperText>
                    )}
                    </div>
                </div>
                <Button type="submit" size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form>  
                {outputEnergy &&
                  <p className='outputEnergy'>Energy created by Solar(W) {outputEnergy}</p>
                }  
            </Box>
    </MareiBox>
    </>)
}

export default Wave;