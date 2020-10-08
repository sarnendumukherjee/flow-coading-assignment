import WebSocket from 'ws';
import { EQUITY_SERVER_PORT } from './constants';
import Currency from './Currency';
import Stock from './Stock';
import StockObject from './StockObject';
import TickerHandler from './TickerHandler';

const equities = new TickerHandler<StockObject>();
equities.addTicker(new Stock('AAPL', 'Apple Inc.', Currency.DOLLARS, 250, 300));
equities.addTicker(new Stock('GOOGL', 'Alphabet A (Google)', Currency.DOLLARS, 1000, 1500));
equities.addTicker(new Stock('MSFT', 'Microsoft Corp.', Currency.DOLLARS, 120, 180));
equities.addTicker(new Stock('FLOW', 'Flow Traders NV', Currency.EURO, 20, 25));
equities.addTicker(new Stock('SHELL', 'Royal Dutch Shell', Currency.EURO, 15, 22));
equities.addTicker(new Stock('NG', 'National Grid Plc', Currency.POUNDS, 8, 12));
equities.addTicker(new Stock('LSE', 'London Stock Exchange Group Plc', Currency.POUNDS, 70, 95));
equities.addTicker(new Stock('UBS', 'UBS Group AG', Currency.FRANCS, 8, 12));
equities.addTicker(new Stock('CS', 'Credit Suisse Group AG', Currency.FRANCS, 10, 14));

const equityServer = (): () => void => {
  const equityServer = new WebSocket.Server({ port: EQUITY_SERVER_PORT });

  equityServer.on('listening', () => {
    console.log(`Started equity server on ws://0.0.0.0:${EQUITY_SERVER_PORT}`);
  });

  equityServer.on('connection', (ws) => {
    console.log('New equity client!');
    equities.subscribe((next) => ws.send(JSON.stringify(next)));
  });

  equityServer.on('error', (err) => {
    console.error(err);
  });

  return () => {
    console.log('Stopping equity server');
    equityServer.close();
    equities.stop();
  };
};

export default equityServer;
