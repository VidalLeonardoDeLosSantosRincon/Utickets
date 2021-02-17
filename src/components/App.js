import './App.css';

//components
import {Header} from "./global/Header";
import {Footer} from "./global/Footer";
import {Content} from "./global/Content";

function App({children}) {
  return (
    <div className="App">
        <Header/>
        <Content>
          {children}
        </Content>
        <Footer/>
    </div>
  );
}
export default App;
