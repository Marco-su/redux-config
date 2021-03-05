import { Provider } from "react-redux";
import generateStore from "./Store/store";

import "./App.css";
import UsersList from "./components/UsersList";

function App() {
  return (
    <Provider store={generateStore()}>
      <div className="App">
        <UsersList />
      </div>
    </Provider>
  );
}

export default App;
