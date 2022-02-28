import React, { Suspense } from "react";
import * as ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from "react-router-dom";
import theme from "./theme";
import Home from './app/home/index';
import { Header, SideMenu, Footer } from './common/Common'
import './style/app.scss';
import ThemeProvider from '@mui/system/ThemeProvider';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function render() {
    ReactDOM.render(
        <>
            <Suspense
                fallback={<h1>Loading form...</h1>}
            ></Suspense>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Header />
                    <Grid container spacing={2} mb={6}>
                        <Grid item xs={6} md={3}  sx={{ overflow: 'hidden' }}>
                        <SideMenu  />
                        </Grid>
                        <Grid item xs={6} md={8}>
                        <HashRouter>
                            <Routes>
                                <Route path="/" element={<Home />} />
                            </Routes>
                        </HashRouter>
                        </Grid>
                        <Box className={'styleBox'} sx={{ bgcolor: 'primary.main' }} />
                    </Grid>
                    <Footer />
                </div>
            </ThemeProvider>
        </>
        , document.body);
}

render();