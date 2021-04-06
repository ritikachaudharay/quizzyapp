import './App.css';
import Header from './Components/header';
import Rules from './Pages/Rules';
import store from './reduxStore/store.js';
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Rules />
      </Provider>
    </>
  );
}

export default App;
