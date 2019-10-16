import React from 'react';
import Layout from './Containers/Layout';
import Map from './Components/Map';
import Sidebar from './Components/Sidebar';

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./Modules/store"

function App() {
  return (
    <ReduxProvider store={configureStore()}>
      <div className="App">
        <Layout sidebar={<Sidebar />} main={<Map />} />
      </div>
    </ReduxProvider>
  );
}

export default App;
