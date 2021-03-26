import logo from "./logo.svg";
// import "./App.css";
import "./assets/style.css";
import "./assets/bootstrap.min.css";
import "./assets/address.css";
import Address from "./components/Address";
import AddressConfirmationDialog from "./components/AddressConfirmDialog";
import NewAddress from "./components/NewAddress";
import CustomAddress from "./components/CustomAddress";

function App() {
  return (
    <div className="App">
      {/* <Address /> */}
      {/* <NewAddress /> */}
      <CustomAddress />
    </div>
  );
}

export default App;
