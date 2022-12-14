import React from "react";
import "./App.css";
import AppRouter from "./AppRouter/AppRouter";
import Loader from "./components/Loader/Loader";
import { isLoadingSelector } from "./selectors/statusSelector";
import loadingList from "./helpers/ActionTracker";
import { useAppSelector } from "./hooks/useAppSelector";

function App() {
  const load = useAppSelector((state) => isLoadingSelector(loadingList, state));

   
  return (
    <>
      <Loader show={load} />
      <div className="App">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
