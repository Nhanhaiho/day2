import logo from './logo.svg';
import './App.css';
import Header from './Components/Layouts/Header';
import Content from "./Components/Contents/Content";
import SideBar from './Components/Contents/SideBar';
import Footer from './Components/Layouts/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
        <SideBar backgroundColor="yellow"></SideBar>
        <Content></Content>
        <SideBar backgroundColor="purple"></SideBar>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
