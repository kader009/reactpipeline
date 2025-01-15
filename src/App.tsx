import { useContext } from 'react';
import { ContextApi } from './context/Context';

const App = () => {
  const context = useContext(ContextApi);
  
  if (!context) {
    return <div>Loading...</div>;
  }

  const { name, obj } = context;
  return (
    <div>
      web app : {name} : {obj?.hobby}
    </div>
  );
};

export default App;
