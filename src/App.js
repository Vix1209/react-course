import React from 'react';

import Button from './component/button';

import Darkmode from './component/darkmode';

// Header below is a component function created and is then referred to in the app component, which is now rendered to index.js, to index.html and further to the browser 
const Header =() => {
  return (
    <h1>
      Hello World
    </h1>
  )
}

const App = (props) => {
  return (
    <div>
      <Header />
      
      {/* the title attribute AKA prop, declared in the Index.js file, is being utilized here */}
      I am new to react, I am learning little by little. First, {props.title}. We move!!

      <Button />

      <Darkmode />
    </div>
  );
}

export default App;
