import '../App.css';
import { SpaceMerchant, PowerHouse, STPC, Blundgeon, CeValuate, GroundWard, UE2DCollisionTool, GemScape, WaveBreaker } from '../components/Project';
import { Stack } from '@mui/material';



function Home() {
  return (
    <div className="App" >
      <header className="App-header">
        <Stack >
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
