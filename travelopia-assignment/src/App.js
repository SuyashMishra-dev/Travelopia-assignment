import { Suspense } from "react";
import "./App.css";
import Routes from "./Route";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<>Error</>}>
        <Routes />
      </Suspense>
    </div>
  );
}

export default App;
