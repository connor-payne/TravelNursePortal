import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Routes from './routes';

const App = (props) => {

  return (
    <BrowserRouter>
      <Routes {...props}/>
    </BrowserRouter>
  )

}

ReactDOM.render(<App />, document.getElementById('root'));
