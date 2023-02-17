import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { galleryImageDataFetch } from './services/galleryImages';
import Button from './Button/Button';
import Loader from './Loader/Loader';

// import PropTypes from 'prop-types';

export class App extends Component {
  state = {
    images: [],
    q: '',
    error: null,
    isLoading: false,
    page: 1,
    perPage: 12,
  };

  // key: '32917844-8e8c51c8f603babcea5f94901',

  handleSubmit = q => {
    this.setState({
      q: q,
      page: 1,
      images: [],
    });
  };
  handleClickBtn = () => {
    this.setState(({ page }) => {
      return { page: page + 1 };
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (prevState.q !== q || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });

        const result = await galleryImageDataFetch(q, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...result],
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { images } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <div>
          {this.state.isLoading && <Loader />}
          <ImageGallery images={images} />
        </div>

        <Button handleClickBtn={this.handleClickBtn} />
      </div>
    );
  }
}

// images={this.props.state.images}

// async componentDidUpdate(prevProps, prevState) {
//   const { q } = this.state;
//   try {
//     if (q !== prevState.q) {
//       const response = await galleryImageDataFetch(this.state.q);
//       const data = await response.json();
//       this.setState({ images: data.hits, isloading: false });
//     }
//   } catch (error) {
//     this.setState({ error, isloading: true });
//   }
// }
