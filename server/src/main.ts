import equityServer from './equityServer';
import fxServer from './fxServer';

const stopEquity = equityServer();
const stopFX = fxServer();

const handleInterrupt = () => {
  stopEquity();
  stopFX();
  process.exit();
};

process.on('SIGTERM', handleInterrupt);
process.on('SIGINT', handleInterrupt);
