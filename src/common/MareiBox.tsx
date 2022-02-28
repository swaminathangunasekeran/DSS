import React from 'react';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';
import './common.scss';

interface ParentCompProps {
    heading:string;
    Logo:OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    children: React.ReactNode;
  }

const MareiBox : React.FC<ParentCompProps> = (props) => {
  
    const {children,heading, Logo} = props
    return(
        <Box className={'calcBox'}>
            <Box className={'boxHeader'}  sx={{}}>
            <h2 className='heading'>{heading}</h2>
            <div className='logoBox'><Logo></Logo></div>
            </Box>
            {children}
        </Box>
      
    )
   
    }

export default MareiBox;