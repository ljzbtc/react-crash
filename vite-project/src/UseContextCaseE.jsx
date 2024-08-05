
import './index.css';
import {useContext} from 'react';
import {UserContext} from './UseContextCase';
function UseContextCaseE() {


  const user = useContext(UserContext);

  return(
    <div className="box">
      <h1>ContextE</h1>
      <h2>{`bye  ${user}`}</h2>

    </div>
  )
  
}

export default UseContextCaseE;