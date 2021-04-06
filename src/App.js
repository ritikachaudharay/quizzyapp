import './App.css';
import Header from './Components/header';
import Rules from './Pages/Rules';
import store from './reduxStore/store.js';
import { Provider } from "react-redux";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Start from './Pages/Start';

function App() {

  const appHistory = createBrowserHistory();

  return (
    <>
      <Router history={appHistory}>
        <Provider store={store}>
          <Header />
          <Switch>
            <Route exact path="/" component={Rules} />
            <Route exact path="/start" component={Start} />
          </Switch>

        </Provider>
      </Router>
    </>
  );
}

export default App;
