import React from 'react';
import './App.css';
import BookShelf from '../BookShelf/BookShelf';
import { Container } from '@material-ui/core';
import Slider from '../../components/Slider/Slider';
import Menu from '../../components/navigation/Menu/Menu';

function App() {
  return (
    <div className="App">
      
      <Menu />
      <Container style={{marginTop: 20}} maxWidth="lg">
        <BookShelf />
      </Container>
    </div>
  );
}

export default App;
