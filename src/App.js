import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./Store";
import Container from "./Container";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
