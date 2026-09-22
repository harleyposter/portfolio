import '../App.css';
import { SpaceMerchant, PowerHouse, STPC, Blundgeon, CeValuate, GroundWard, UE2DCollisionTool, GemScape, WaveBreaker, TurnBreak } from '../components/Projects';
import { Stack } from '@mui/material';



function Home() {
  return (
    <div className="App" >
      <header className="App-header">
        <Stack >
          {TurnBreak()}
          {SpaceMerchant()}
          {PowerHouse()}
          {STPC()}
          {Blundgeon()}
          {CeValuate()}
          {GroundWard()}
          {UE2DCollisionTool()}
          {GemScape()}
          {WaveBreaker()}
        </Stack>
      </header>
    </div>
  );
}

export default Home;
