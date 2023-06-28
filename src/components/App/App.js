import { Component } from 'react';
import { Container } from './App.styled';
// import Button from "components/Button";
// import ImageGallery from "components/ImageGallery";
// import Loader from "components/Loader";
// import Modal from "components/Modal";
import Searchbar from 'components/Searchbar';
export class App extends Component {
  render() {
    return (
      <Container>
        <Searchbar />
        React App
      </Container>
    );
  }
}

export default App;
