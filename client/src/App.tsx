import React from 'react';
import Form from './store/component/Form';
import Posts from './store/component/Posts';



function App() {
  return (
    <div className="flex flex-row justify-around gap-4 p-6 m-4 border-2 border-gray-400 ">
      <Posts/>
<Form/>
    </div>
  );
}

export default App;
