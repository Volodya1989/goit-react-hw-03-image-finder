import { Component } from 'react';
import { Container } from './App.styled';
import getPictures from '../../api/API';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
// import Loader from "components/Loader";
// import Modal from "components/Modal";

import Searchbar from 'components/Searchbar';
export class App extends Component {
  state = {
    pictures: [],
    query: '',
    pageCounter: 1,
  };

  componentDidMount() {}
  componentDidUpdate(_, prevState) {
    const { query, pageCounter } = this.state;

    if (prevState.query !== query && query !== '') {
      this.onGettingImages(query, pageCounter);
    }
    if (prevState.pageCounter !== pageCounter) {
      this.onGettingImages(query, pageCounter);
    }
  }

  async onGettingImages(queryParam, pageCounter) {
    try {
      const response = await getPictures(queryParam, pageCounter);
      const { hits } = await response.data;

      if (!this.state.pictures.length) {
        this.setState({ pictures: hits });
      } else {
        this.setState(({ pictures }) => {
          return {
            pictures: [...pictures, ...hits],
          };
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  onSubmit = query => {
    this.setState({ query });
  };
  onLoadMore = () => {
    this.setState(({ pageCounter }) => {
      return { pageCounter: pageCounter + 1 };
    });
  };

  render() {
    const { pictures } = this.state;
    const isButtonDisplayed = pictures.length !== 0;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery data={pictures} />
        {isButtonDisplayed && <Button onLoad={this.onLoadMore} />}
      </Container>
    );
  }
}

export default App;
