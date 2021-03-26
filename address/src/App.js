import logo from "./logo.svg";
// import "./App.css";
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import "./assets/address.css";
import Address from "./components/Address";
import AddressConfirmationDialog from "./components/AddressConfirmDialog";
import NewAddress from "./components/NewAddress";

function App() {
  return (
    <div className="App">
      {/* <Address /> */}
      <NewAddress />
    </div>
  );
}

export default App;
