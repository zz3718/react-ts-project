import React from 'react';
import Hello from './components/Hello';

function App() {
  const myclickHandle = (data:string) => {
    console.log('event')
    console.log(data)
  }
  return (
    <div className="App">
      <Hello title="标题" onMyClick={myclickHandle}/>
    </div>
  );
}

export default App;
