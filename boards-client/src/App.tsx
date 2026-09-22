import React from 'react';
import './App.css';
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { AppBar, Box, Button, Container, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { theme } from "./components/Theming"
import ADLogo from "./assets/AidanDavidsonLogo3.png"


import SpaceMerchantPage from './pages/projects/SpaceMerchant';
import PowerHousePage from './pages/projects/PowerHouse';
import STPCPage from './pages/projects/SubterraneanPhysicsComplex';
import BlundgeonPage from './pages/projects/Blundgeon';
import CeValuatePage from './pages/projects/CeValuate';
import GroundwardPage from './pages/projects/Groundward';
import UE2DToolPage from './pages/projects/UE2DTool';
import GemScapePage from './pages/projects/GemScape';
import WaveBreakerPage from './pages/projects/WaveBreaker';
import TurnBreakPage from './pages/projects/TurnBreak';



function App() {
    // const [load, setLoad] = useState(false);
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme} >
            {<AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar>
                        <Container style={{ flex: 2, height: 100, padding: 5 }}>
                            <img color={"#fffffff"} height={"100%"} src={ADLogo} alt={"Aidan Davidson"} />
                        </Container>
                        <Box sx={{ flex: 1, display: { xs: 'none', sm: 'block' } }}>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/")}>
                                <Typography variant="h6" color="white" component="div">
                                    Projects
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/SIP")}>
                                <Typography variant="h6" color="white" component="div">
                                    SIP
                                </Typography>
                            </Button>
                            <Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/About")}>
                                <Typography variant="h6" color="white" component="div">
                                    About Me
                                </Typography>
                            </Button>
                            {/*<Button style={{ margin: 2, flex: 2, backgroundColor: "#ff0000aa" }} variant={"text"} onClick={() => navigate("/About")}>
                                <Typography variant="h6" color="white" component="div">
                                    Contact
                                </Typography>
                            </Button>*/}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>}




            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/SIP" element={<UE2DToolPage />} />
                <Route path="/About" element={<About />} />

                <Route path="/TurnBreak" element={<TurnBreakPage />} />
                <Route path="/SpaceMerchant" element={<SpaceMerchantPage />} />
                <Route path="/PowerHouse" element={<PowerHousePage />} />
                <Route path="/SubTerraneanPhysicsComplex" element={<STPCPage />} />
                <Route path="/Blundgeon" element={<BlundgeonPage />} />
                <Route path="/CeValuate" element={<CeValuatePage />} />
                <Route path="/Groundward" element={<GroundwardPage />} />
                <Route path="/UE2DTool" element={<UE2DToolPage />} />
                <Route path="/GemScape" element={<GemScapePage />} />
                <Route path="/WaveBreaker" element={<WaveBreakerPage />} />

                <Route path="*" element={<Navigate to="/" replace />} />

            </Routes>
            <footer > @2026 Aidan Davidson All Rights Reserved</footer>
        </ThemeProvider >

    )
};

export default App;