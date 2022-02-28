import { Container } from '@mui/material';
import React  from 'react' ; 
import Solar from './Solar';
import Wind  from './Wind';
import Tide  from './Tide';
import Wave  from './Wave';
import './home.scss';

const Home :React.FC =  () => {

    return (
    <>
    <Container>
        <Solar/>
        <Wind />
        <Tide/>
        <Wave/>
    </Container>
    </>)
}

export default Home;