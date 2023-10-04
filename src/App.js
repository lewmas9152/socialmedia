import './App.css';
import Content from './Content';


function App() {


  const theme= localStorage.getItem("theme")
console.log(theme)
  
  return (
    <div className="App" data-theme={theme}>
       
     <Content /> 
     
     
    </div>
  );
}

export default App;
