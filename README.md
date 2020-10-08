Flow Traders Coding Challenge
=============================

Welcome to Flow Traders’s Coding Challenge!
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It comes with a Node.js server that is connected via a WebSocket to the front-end.


Exercise
--------

In this coding challenge, we would like to build a trading UI for international stocks.
To provide the best insight into the stock prices and in order to compare them with each other, we would like to see all prices in Euro (EUR).

We have a market data server available that is able to stream relevant stock prices to us.
Unfortunately, it provides the price of the stock in its source currency.
You need to connect a second service, which provides data of the foreign exchange (FX) market.
The second service streams the exchange rates of specific currency pairs.

The market data server provided exposes two different WebSocket connections:

- **Port 8001:** FX data provided for currency pairs; provides USD/EUR, EUR/CHF, and EUR/GBP.<br/>
  The interface for it looks like this:
  ```typescript
  interface FXObject {
    from: string;        // The source currency code
    to: string;          // The target currency code
    rate: number;        // The exchange rate
    reverseRate: number; // The reverse exchange rate
  }
  ```
- **Port 8002:** Stock price data provided for different international companies.<br/>
  The interface for it looks like this:
  ```typescript
  interface StockObject {
    id: string;       // The exchange identifier for the stock
    name: string;     // The full name of the company 
    currency: string; // The currency of the stock price
    price: number;    // The stock price
  }
  ```

You can find the WebSocket clients in `src/index.tsx`.

Your objective is to use React in order to render all the stock prices.
Each stock should display its price in both Euro (EUR) and the original source currency.
It is required that every time the stock price or FX rate ticks (i.e. the price or the exchange rate changes), the UI is updated.


Requirements
------------

- You can use TypeScript or EcmaScript
- You can use any library that you can find on NPM, please add it to your `package.json`
- It should be a React app
- Use Git and submit the `.git` directory
- Testing and use of code quality tools is optional
- Please don't spend more than 2 hours on this exercise
- Bonus points for applying some CSS ;-)


Bonus
-----

Not bored with the challenge yet?<br/>
As a bonus exercise, add a dropdown which allows the user to select the currency in which they can see the stock prices.


Running the Server
------------------

The server is a simple Node.js app and should work with Node.js 8+.
Preferably, you can run the server with **Docker**:

    docker run --rm -p 8001:8001 -p 8002:8002 -it --name flow-exchange-server $(docker build -q server)

Alternatively, change into the `server` directory and run the start script with Yarn or NPM:

    yarn start

or

    npm start


Available Scripts
-----------------

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
