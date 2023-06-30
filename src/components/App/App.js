import { Component } from 'react';
import { Container } from './App.styled';
import getPictures from '../../utils/API';
// import Button from 'components/Button';
// import ImageGallery from "components/ImageGallery";
// import Loader from "components/Loader";
// import Modal from "components/Modal";

import Searchbar from 'components/Searchbar';
export class App extends Component {
  static API_STATS = {
    totalHits: null,
    totalPages: [],
    pageCounter: null,
  };
  state = {
    pictures: null,
  };

  componentDidMount() {
    console.log('componentDidMount');
  }
  pageCounter = null;
  totalHits = 0;
  totalPages = [];

  async onGettingImages(queryParam, pageCounter) {
    try {
      console.log(`queryParam`, queryParam);
      const response = await getPictures(queryParam, pageCounter);
      const data = await response.data;
      console.log('data', data);
      console.log('this.State', this.setState({ pictures: data }));

      return this.setState({ pictures: data });
      // totalHits = Number(data.totalHits);

      // totalPages = Math.ceil(Number(data.totalHits) / 40);
    } catch (e) {
      console.log(e);
    }
  }

  //   //getting pictures from public api using axios library
  // async function gettingPhoto(queryParam, pageCounter) {
  //   try {
  //     const response = await API.getPictures(queryParam, pageCounter);
  //     const data = await response.data;
  //     totalHits = Number(data.totalHits);
  //     totalPages = Math.ceil(Number(data.totalHits) / 40);

  //     if (!totalHits || !data.hits.length) {
  //       refs.buttonLoadMore.classList.remove("visible");
  //       message =
  //         "Sorry, there are no images matching your search query. Please try again.";
  //       return notifyFailedMessage(message);
  //     }

  //     if (pageCounter === 1) {
  //       Notiflix.Notify.success(`Hooray! We found ${totalHits} images in total.`);
  //     }
  //     markupOfPictures(data);
  //     if (totalPages === pageCounter) {
  //       refs.buttonLoadMore.classList.remove("visible");
  //       message = "We're sorry, but you've reached the end of search results.";
  //       notifyFailedMessage(message);
  //     }
  //   } catch (e) {
  //     console.log(e.message);
  //     message = "We're sorry, but you've reached the end of search results.";
  //     refs.buttonLoadMore.classList.remove("visible");

  //     notifyFailedMessage(message);
  //   }
  // }

  //   const onSubmit = (e) => {
  //   e.preventDefault();
  //   pageCounter = 1;
  //   const { searchQuery } = e.target.elements;
  //   queryParam = searchQuery.value.trim();

  //   //checking search input field on empty string
  //   if (!queryParam.length) {
  //     message = "Please type in some search key word";
  //     return onEmptyString(message);
  //   }
  //   refs.gallery.innerHTML = "";

  //   gettingPhoto(queryParam, pageCounter);

  //   searchQuery.value = null;
  //   totalHits = 0;
  //   refs.form.reset();

  //   setTimeout(() => {
  //     if (totalPages === pageCounter || !totalPages) {
  //       refs.buttonLoadMore.classList.remove("visible");
  //     } else {
  //       refs.buttonLoadMore.classList.add("visible");
  //     }
  //   }, 500);
  // };

  // function that is called when user would like to get more pictures displayed after initial getCall
  // const onLoadMore = () => {
  //   pageCounter += 1;
  //   gettingPhoto(queryParam, pageCounter);
  // };
  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.onGettingImages} />
        React App
        {/* <Button /> */}
      </Container>
    );
  }
}

export default App;
