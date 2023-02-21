import logo from './logo.svg';
import './App.css';
import Register from './pages/signup/register';
import Login from './pages/login/login';
import Header from './components/header';
import TakenoteOne from './components/TakenoteOne';
import TakenoteTwo from './components/TakenoteTwo';
import TakenoteThree from './components/TakenoteThree';
import Dashboard from './pages/dashboard/dashboard';
import MiniDrawer from './components/drawer';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import RouterComponent from './router/router';



function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <RouterComponent/>
      </Provider>
      {/* <Register></Register> */}
      {/* <Login></Login> */}
      {/* <Header></Header> */}
      {/* <TakenoteOne></TakenoteOne> */}
      {/* <TakenoteTwo></TakenoteTwo> */}
      {/* <TakenoteThree></TakenoteThree> */}
      {/* <Dashboard></Dashboard> */}
      {/* <MiniDrawer></MiniDrawer> */}

    </div>
  );
}

export default App;
