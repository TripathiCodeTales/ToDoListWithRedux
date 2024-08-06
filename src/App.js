import logo from "./logo.svg";
import "./App.css";
import ToDo from "./ToDo";
import { Provider } from "react-redux";
import Store from "./Redux/Store";

function App() {
  return (
    <Provider store={Store}>
      <ToDo />
    </Provider>
  );
}

export default App;
