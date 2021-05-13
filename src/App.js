import "./App.scss";
import Navbar from "./components/Navbar/Navbar.js";
import Main from "./components/MainFlow/Main.js";
import Widgets from "./components/Widgets/Widgets.js";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <Widgets />
    </div>
  );
}

export default App;
