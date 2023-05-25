import './App.css';
import React , {useState} from 'react'
import Editor from './components/Editor';
import Previewer from './components/Previewer';

const App = () => {


  const [state, setState] = useState();


  const onChangeHandler = (e) => {
    const html = e.target.value;
     setState(html);
  }

  return (
    <div className="App">
       <div className='container'>
         <div className='item'>
            <Editor onChange={onChangeHandler}/>
         </div>
         <div className='item'>
            <Previewer html={state}/>
         </div>
       </div>
    </div>
  );
}

export default App;
