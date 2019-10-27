import React from 'react';
import './App.css';
import BookShelf from '../BookShelf/BookShelf';
import MenuLayout from '../../components/navigation/MenuLayout/MenuLayout';

function App() {
  return (
    <div className="App">
      <MenuLayout>
        <BookShelf />
      </MenuLayout>
    </div>
  );
}

export default App;
