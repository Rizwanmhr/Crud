import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import TableData from "./crudOperation/TableData";
import FetchData from "./crudOperation/FetchData";
import EditData from "./crudOperation/EditData";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <Router>
        <Switch>
          <Route path="/" element={<TableData setProgress={setProgress} />} />
          <Route
            path="/fetchdata"
            element={<FetchData setProgress={setProgress} />}
          />
          <Route
            path="/editData/:id"
            element={<EditData setProgress={setProgress} />}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
