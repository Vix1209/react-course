import React from 'react';

// Header below is a component function created and is then referred to in the app component, which is now rendered to index.js, to index.html and further to the browser 
const Header =() => {
  return (
    <h1>
      Hello World
    </h1>
  )
}

const App = () => {
  return (
    <Header />
  );
}

export default App;
