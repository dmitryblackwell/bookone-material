import React from 'react';
import './App.css';
import BookShelf from '../BookShelf/BookShelf';
import AppBar from '../../components/navigation/AppBar/AppBar';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Container style={{marginTop: 20}}>
        <BookShelf />
      </Container>
    </div>
  );
}

export default App;
