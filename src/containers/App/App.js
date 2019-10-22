import React from 'react';
import './App.css';

import '../../components/BookShelf/BookShelf';
import BookShelf from '../../components/BookShelf/BookShelf';
import Container from '@material-ui/core/Container';
import TopMenu from '../../components/navigation/TopMenu/TopMenu';

function App() {
  return (
    <div className="App">
      <TopMenu />
      <Container >
        <BookShelf />
      </Container>
    </div>
  );
}

export default App;
