import React ,{useState}  from 'react' ; 
import MareiBox from '../../../common/MareiBox';
import AirIcon from '@mui/icons-material/Air';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useForm , SubmitHandler} from "react-hook-form";
import FormHelperText from '@mui/material/FormHelperText';

type Inputs = {
    cpTurbine:number,
    poleHeight:number,
    turbineRadius:number,
    airDensity:number,
    meanVelocity:number
  };


const Wind:React.FC =  () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const [outputEnergy, setOutputEnergy] = useState<number>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        const sweptArea = 3.14 * (Math.pow(data.turbineRadius,2));
        const opwind =  (0.5) * data.airDensity * (Math.pow(data.meanVelocity ,3)) * data.cpTurbine * sweptArea
        setOutputEnergy(opwind)
    }

    return (
    <>
    <MareiBox heading={'wind'}  Logo={AirIcon}>
    <p>Calculate Total Energy created by Wind</p>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}  className={'formGroup'}>
                <div className={'formbox'}>
                    <div>
                        <TextField  sx={{ width: '100%' }} {...register("cpTurbine",{required: true,pattern:/[0-9]+/})} id="cpTurbine" label="Turbine Cp" variant="standard"/>
                        {errors.cpTurbine && (
                            <FormHelperText className='errorText'>CPTurbine is not valid</FormHelperText>
                        )}
                    </div>
                <div>
                    <TextField sx={{ width: '100%' }} {...register("poleHeight",{required: true,pattern:/[0-9]+/})} id="poleHeight" label="Pole Height" variant="standard" />
                    {errors.poleHeight && (
                            <FormHelperText className='errorText'>poleHeight is not valid</FormHelperText>
                    )}
                </div>
                <div>
                    <TextField sx={{ width: '100%' }} {...register("turbineRadius",{required: true,pattern:/[0-9]+/})}  id="turbineRadius" label="Turbine Radius" variant="standard"/>
                    {errors.poleHeight && (
                            <FormHelperText className='errorText'>turbineRadius is not valid</FormHelperText>
                    )}
                </div>
                <div>
                <TextField  sx={{ width: '100%' }} {...register("airDensity",{required: true,pattern:/[0-9]+/})}  id="airDensity" label="Air Density" variant="standard" />
                {errors.airDensity && (
                    <FormHelperText className='errorText'>airDensity is not valid</FormHelperText>
                )}
                </div> 
                <div>
                <TextField sx={{ width: '100%' }} {...register("meanVelocity",{required: true,pattern:/[0-9]+/})}  id="meanVelocity" label="Mean Velocity" variant="standard" />
                {errors.meanVelocity && (
                    <FormHelperText className='errorText'>meanVelocity is not valid</FormHelperText>
                )}
                </div>      
               
                </div>
                <Button  type='submit' size="large" className={'formSubmit'} variant="contained" >Calculate</Button>
                </form> 
                {outputEnergy &&
                  <p className='outputEnergy'>Energy created by Wind(W) {outputEnergy}</p>
                }  
            </Box>
    </MareiBox>
    </>)
}

export default Wind;