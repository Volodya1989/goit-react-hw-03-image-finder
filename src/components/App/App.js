import { Component } from 'react';
import { Container } from './App.styled';
import getPictures from '../../api/API';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

import Searchbar from 'components/Searchbar';
export class App extends Component {
  static totalPages = [];
  state = {
    pictures: [],
    query: '',
    pageCounter: 1,
    showModal: false,
    activeImg: '',
    loading: false,
  };

  componentDidMount() {}
  componentDidUpdate(_, prevState) {
    const { query, pageCounter } = this.state;
    if (prevState.query !== query && query !== '') {
      this.setState({
        pictures: [],
        pageCounter: 1,
      });
      this.onGettingImages(query, pageCounter, query);
    }
    if (prevState.pageCounter !== pageCounter) {
      this.onGettingImages(query, pageCounter, query);
    }
  }

  async onGettingImages(queryParam, pageCounter) {
    try {
      this.setState({ loading: true });
      const response = await getPictures(queryParam, pageCounter);
      const { hits, totalHits } = await response.data;

      this.totalPages = Math.ceil(Number(totalHits) / 12);

      this.setState({ loading: false });
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
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClick = (e, img) => {
    this.setState({
      activeImg: img,
    });

    this.toggleModal();
  };

  render() {
    const { pictures, showModal, activeImg, loading, pageCounter } = this.state;
    const isButtonDisplayed =
      pictures.length !== 0 && this.totalPages > pageCounter;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <Loader />}
        <ImageGallery data={pictures} onClick={this.onClick} />
        {isButtonDisplayed && <Button onLoad={this.onLoadMore} />}

        {showModal && (
          <Modal
            activeImg={activeImg}
            showModal={showModal}
            onClose={this.toggleModal}
          />
        )}
      </Container>
    );
  }
}

export default App;
