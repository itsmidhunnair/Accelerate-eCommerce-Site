import { BrowserRouter } from "react-router-dom";
import Homepage from "./layout/Homepage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </>
  );
}

export default App;
