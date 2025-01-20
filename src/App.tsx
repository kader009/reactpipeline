import { useContext, useState } from 'react';
import { ContextApi } from './context/Context';

const App = () => {
  const context = useContext(ContextApi);
  const datas = useState(1);

  if (!context) {
    return <div>Context are not getting here...</div>;
  }

  const { name, obj } = context;
  return (
    <div>
      web app : {name} : {obj?.hobby}
      <span>{datas[0]}</span>
    </div>
  );
};

export default App;
