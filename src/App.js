import './App.css';
import {Routes,Route, HashRouter} from 'react-router-dom'
import NavigationBar from './Components/Navbar';
import API from './Components/API';
import Slider from './Components/Slider';
import Calculatrice from './Components/Calc';
import Todo from './Components/ToDoList';
import Langcontext from './context/Langcontext';
import Ccontent from './Components/Ccontent';
import Cicones from './Components/Cicones';
import Content from './Components/Content/Content'
import ThemeContextProvider from './context/ThemeContext';


function App() {
   return (
 <div className="App">
  
  <NavigationBar />

<Routes>
<Route path="/Calc" element={< Calculatrice/>}/>
<Route path="/Slider" element={<Slider/>}/>
<Route path="/ToDoList" element={<Todo/>}/>
<Route path="/API" element={<API/>}/>
<Route path="*" element={<h1>404 : this page not found</h1>} />
<Route path="/context/Langcontext" element={
  <Langcontext>
    <Cicones/>
    <Ccontent/>
  </Langcontext>
}   
/>
 </Routes>
 <ThemeContextProvider>
        <Content />
  </ThemeContextProvider>
 </div> );
}
export default App;