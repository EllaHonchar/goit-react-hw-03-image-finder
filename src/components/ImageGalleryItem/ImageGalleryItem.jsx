import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import { Component } from 'react';

import s from '../ImageGalleryItem/ImageGalleryItem.module.scss';

export class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleToggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    const { src, tags, largeImageURL } = this.props;

    return (
      <li className={s.imageGalleryItem}>
        <img
          className={s.image}
          src={src}
          alt={tags}
          onClick={this.handleToggleModal}
        />
        {this.state.showModal && (
          <Modal
            onClose={this.handleToggleModal}
            largeImageURL={largeImageURL}
            tags={tags}
          />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

// export function ImageGalleryItem(props) {
//   const { image } = props;

//   const handleOpenModal = () => {
//     this.setState({ openModal: true });
//   };

//   return (
//     <>
//       <li class="gallery-item" onClick={handleOpenModal}>
//         <img src={image} alt={image} />
//         {this.state.isOpenModal} && <Modal />
//       </li>
//     </>
//   );
// }
