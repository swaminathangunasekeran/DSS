import React from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {

    return(
    <footer className='footer'>
        <div>
            <div>©2022 &nbsp;  <FavoriteIcon fontSize='small'/> &nbsp;  MaREI,the SFI Research Centre for Energy, Climate and Marine </div>
            <div><a>Privacy Policy </a></div>
            <div><a>Disclaimer</a></div>
        </div>
    </footer>)
}

export default Footer;