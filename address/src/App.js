import logo from "./logo.svg";
// import "./App.css";
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import Address from "./components/Address";
import AddressConfirmationDialog from "./components/AddressConfirmDialog";

function App() {
  return (
    <div className="App">
      <Address />
      <AddressConfirmationDialog />
    </div>
  );
}

export default App;
