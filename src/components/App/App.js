import { Component } from 'react';
import { Container } from './App.styled';
import getPictures from '../../api/API';
import Button from 'components/Button';
import ImageGallery from 'components/ImageGallery';
import Loader from 'components/Loader';
import Modal from 'components/Modal';
import Notiflix from 'notiflix';

import Searchbar from 'components/Searchbar';
export class App extends Component {
  // static totalPages = [];
  state = {
    pictures: [],
    pageCounter: 1,
    query: '',
    activeImg: '',
    showModal: false,
    loading: false,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, pageCounter } = this.state;
    if (prevState.query !== query || prevState.pageCounter !== pageCounter) {
      this.onGettingImages(query, pageCounter, query);
    }
  }

  async onGettingImages(queryParam, pageCounter) {
    try {
      this.setState({ loading: true });
      const response = await getPictures(queryParam, pageCounter);
      const { hits, totalHits } = await response.data;
      this.setState({ loading: false });

      this.setState(({ pictures }) => {
        return {
          pictures: [...pictures, ...hits],
        };
      });
      // this.totalPages = Math.ceil(Number(totalHits) / 12);
      // console.log(
      //   'load more state',
      //   pageCounter < Math.ceil(Number(totalHits) / 12)
      // );
      this.setState({
        loadMore: pageCounter < Math.ceil(Number(totalHits) / 12),
      });
      // console.log('totalHits', totalHits);

      // console.log('loadMore state', this.state.loadMore);

      if (hits.length === 0) {
        Notiflix.Notify.failure(
          `Images were not found with your query. Please try again!`
        );
      }
      if (this.totalPages === pageCounter) {
        Notiflix.Notify.info(
          `There are no more additonal images with this query...`
        );
      }
      // this.setState({ loading: false });
      // if (!this.state.pictures.length) {
      //   this.setState({ pictures: hits });
      // } else {
      //   this.setState(({ pictures }) => {
      //     return {
      //       pictures: [...pictures, ...hits],
      //     };
      //   });
      // }
    } catch (e) {
      console.log(e);
    }
  }
  onSubmit = query => {
    // console.log('onSubmit is called');
    this.setState({ query: query.trim(), pictures: [], pageCounter: 1 });
  };
  onLoadMore = () => {
    this.setState(({ pageCounter }) => {
      // console.log('pageCounter', pageCounter);
      return { pageCounter: pageCounter + 1 };
    });
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onClick = (_, img) => {
    this.setState({
      activeImg: img,
    });

    this.toggleModal();
  };

  render() {
    const { pictures, showModal, activeImg, loading, pageCounter, loadMore } =
      this.state;
    // const isButtonDisplayed =
    //   pictures.length !== 0 && this.totalPages > pageCounter;

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        {loading && <Loader />}
        <ImageGallery data={pictures} onClick={this.onClick} />
        {/* {isButtonDisplayed && <Button onLoad={this.onLoadMore} />} */}
        {loadMore && <Button onLoad={this.onLoadMore} />}

        {showModal && (
          <Modal activeImg={activeImg} onClose={this.toggleModal} />
        )}
      </Container>
    );
  }
}

export default App;
