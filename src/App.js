import "./App.css";
import CarritoTable from "./Components/CarritoTable";
import Header from "./Components/Header";
import LibrosTable from "./Components/LibrosTable";
import AppProvider from "./Context/AppContext";

function App() {
  
  return (
    <div className="App">
      <Header></Header>
      <div className="tables">
        <AppProvider>
        <LibrosTable></LibrosTable>
        <CarritoTable></CarritoTable>
        </AppProvider>
      </div>
    </div>
  );
}

export default App;

