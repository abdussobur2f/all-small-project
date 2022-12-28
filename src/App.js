 import React from 'react'

 import 'bootstrap/dist/css/bootstrap.min.css';
//  import FromHandal from './component/FromHandal';
//  import BasicExample from './component/BasicExample';
import './App.css';

// function App() {
// const [dark , setDark] = useState({
//   color:'green'
// })
// const Update =()=> {
//   if(dark.color==='green'){
//     setDark({color:'black'})
//   }
// }
 

//   return (
//       <div>
//         <FromHandal/>
//         <BasicExample mode={dark} update={Update} />
//       </div>
    
//   );
// }
//  import Home from './TodoApp/Home';
// import Curseul from './TodoApp/Cursosal/Curseul';
// import Onsite from './TodoApp/Cursosal/Onsite';
// import Accoridian from './TodoApp/Cursosal/Accoridian';
 import Acc from './accordian/Acc';
 
 const App = () => {
  return (
    <div>
      <Acc/>
 
    </div>
  )
}

export default App
