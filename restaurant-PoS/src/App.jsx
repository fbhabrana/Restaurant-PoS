import react from "react";
import "./index.css";
import AppBar from "./Components/AppBar";
import TableList from "./Components/TableList";
import Categories from "./Components/Categories";
import CartLayout from "./Components/CartLayout";

function App() {
  return (
    <>
      <div>
        <AppBar />
      </div>

      <div>
        <CartLayout />
        {/* <Categories />
        <TableList /> */}
      </div>
    </>
  );
}

export default App;
