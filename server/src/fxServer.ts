import WebSocket from 'ws';
import { FX_SERVER_PORT } from './constants';
import Currency from './Currency';
import FX from './FX';
import FXObject from './FXObject';
import TickerHandler from './TickerHandler';

const currencies = new TickerHandler<FXObject>();
currencies.addTicker(new FX(Currency.DOLLARS, Currency.EURO, 0.85, 0.95));
currencies.addTicker(new FX(Currency.DOLLARS, Currency.POUNDS, 0.74, 0.78));
currencies.addTicker(new FX(Currency.DOLLARS, Currency.FRANCS, 0.96, 1.00));
currencies.addTicker(new FX(Currency.EURO, Currency.POUNDS, 0.83, 0.86));
currencies.addTicker(new FX(Currency.EURO, Currency.FRANCS, 1.060, 1.075));
currencies.addTicker(new FX(Currency.POUNDS, Currency.FRANCS, 1.24, 1.28));

const fxServer = (): () => void => {
  const fxServer = new WebSocket.Server({ port: FX_SERVER_PORT });

  fxServer.on('listening', () => {
    console.log(`Started FX server on ws://0.0.0.0:${FX_SERVER_PORT}`);
  });

  fxServer.on('connection', (ws) => {
    console.log('New FX client!');
    currencies.subscribe((next) => ws.send(JSON.stringify(next)));
  });

  fxServer.on('error', (err) => {
    console.error(err);
  });

  return () => {
    console.log('Stopping FX server');
    fxServer.close();
    currencies.stop();
  };
};

export default fxServer;
