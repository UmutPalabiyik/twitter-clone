import "./App.scss";
import Banner from "./components/Header";
import Main from "./components/Main";
import Widgets from "./components/Widgets";


function App() {
  return (
    <div className="App">
      <Banner />
      <Main />
      <Widgets />
    </div>
  );
}

export default App;
