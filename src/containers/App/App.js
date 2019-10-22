import React from 'react';
import './App.css';

import '../../components/BookShelf/BookShelf';
import BookShelf from '../../components/BookShelf/BookShelf';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md" >
        <BookShelf />
      </Container>
    </div>
  );
}

export default App;
