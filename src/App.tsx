import React, { FC, useEffect, useReducer } from "react";
import { Container, Box, Divider } from "@material-ui/core";
import StockTable from "./Components/StockTable";
import { setupSockets, cleanupSockets } from "./Service";
import { reducer, initialState } from "./Reducer";

const App: FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState as never);
  //because of the blank array this will only run once at initial mounting of the app component
  useEffect(() => {
    setupSockets(dispatch);
    return () => {
      cleanupSockets();
    };
  }, []);

  return (
    <Container maxWidth="md">
      <Box className="App">
        <h1>Flow Stocks UI</h1>
        <Divider />
        <StockTable appState={state} appDispatch={dispatch} />
      </Box>
    </Container>
  );
};

export default App;
