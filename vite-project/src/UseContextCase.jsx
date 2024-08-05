import { useState ,createContext} from 'react';
import './index.css';
import UseContextCaseB from './UseContextCaseB';
import UseContextCaseE from './UseContextCaseE';

export const UserContext = createContext();

function UseContextCase() {

  const [user, setUser] = useState("liu");

  return(
    <div className="box">
      <h1>ContextA</h1>
      <h2>{`hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <UseContextCaseE />
      </UserContext.Provider>
      
      
    </div>
  )
  
}

export default UseContextCase;