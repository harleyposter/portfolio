import '../../App.css';
import { Container, Stack } from '@mui/material';
import { Features } from '../../components/Features';
import { theme } from '../../components/Theming';
import { Video } from '../../components/Video';
import { ImageDisplay } from '../../components/ImageDisplay';

import TBLogo from '../../assets/TurnBreakLogo.png'
import TBCapture from '../../assets/TurnBreak/TBSS1.png'
import TBInv from '../../assets/TurnBreak/TBSS2.png'
import TBTurnBreak from '../../assets/TurnBreak/TBSS3.png'
import TBSummon from '../../assets/TurnBreak/TBSS4.png'
import TBBattle from '../../assets/TurnBreak/TBSS5.png'
import TBResults from '../../assets/TurnBreak/TBSS6.png'

function TurnBreakPage() {
    return (
        <div className="App">
            <header className="App-header">
                <Container style={{ width: 400, backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        TURNBREAK
                    </Container>
                </Container>
                <Container style={{ backgroundColor: "#ffffff50", padding: 5, margin: 20, width: 670 }}>
                    <img src={TBLogo} height={300} alt={"Blungeon Logo"} />
                </Container>
                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        Made by Dapper Dog Digital
                    </Container>
                </Container>
                <Stack width={"80%"}>
                    <Stack direction='row' >

                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", margin: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <Stack>
                                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", marginRight: 10, marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                                    DESCRIPTION
                                </Container>
                                <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h5.fontSize, textAlign: "left" }}>
                                    TurnBreak is a fast paced Creature Collector Roguelike. Face off against opponents in a turn-based elemental rock-paper-scissors combat with buffs, debuffs, and temporary evolutions!
                                    Discover, capture, and unlock new beasts with their own abilities. Create ever-evolving synergies with your team of unique Beasts with special ability triggers.
                                    Grow your team further with consumable upgrades, or change out beasts to refine your strategies. Balance your team to handle different elemental regions.
                                    Use items and cards to further tip battles in your favor. While simple to play and enjoy, TurnBreak is complex and satisfying to master.
                                </Container>
                            </Stack >
                        </ Container >
                        <Features features={["70+ hand designed Beasts with special abilities", "Item management for augmenting your team", "Permanantly unlocking new beasts to start with", "Intelligent, yet fair opponent AI to employ strategy", "Online 1v1 PvP matches with friends"]} />

                    </Stack>
                    <Stack direction='row' >
                        <Video title={"Trailer"} url={"https://www.youtube.com/watch?v=BycbJadfO1s"} />
                        <ImageDisplay title={"Screenshots"} images={[TBTurnBreak, TBInv, TBSummon, TBCapture, TBResults, TBBattle]} cols={1} />
                    </Stack>
                    <Container style={{ backgroundColor: theme.palette.secondary.main + "60", width: "40%", marginBottom: 10, padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                        <Container style={{ backgroundColor: theme.palette.secondary.main + "60", padding: 10, color: theme.palette.text.primary, fontFamily: theme.typography.fontFamily, fontSize: theme.typography.h4.fontSize }}>
                            <a href="https://store.steampowered.com/app/3532720/TurnBreak/" target="_blank" rel="noreferrer" >
                                Play now on Steam!
                            </a>
                        </Container>
                    </Container>
                </Stack>
            </header>
        </div>
    );
}

export default TurnBreakPage;