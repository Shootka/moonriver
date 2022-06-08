import './App.css';
import Bottom from "./staticPages/Bottom/Bottom";
import NavBar from "./components/NavBar/NavBar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AppRoutes/>
      <Bottom/>
    </div>
  );
}

export default App;
