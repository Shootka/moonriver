import './App.css';
import Bottom from "./staticPages/Bottom/Bottom";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./routes/AppRoutes";
import {useDispatch} from "react-redux";

function App() {
  const dispatch = useDispatch()
  return (
    <div className="App">
      <NavBar/>
      <div onClick={() => dispatch({type: "TOGGLE_MENU", payload: false})}>
        <AppRoutes/>
        <Bottom/>
      </div>
    </div>
  );
}

export default App;
