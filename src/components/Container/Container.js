// import { Component } from 'react';

// import { galleryImageDataFetch } from 'components/services/galleryImages';
// import { ImageGallery } from 'components/ImageGallery/ImageGallery.jsx';
// import { Searchbar } from 'components/Searchbar/Searchbar';

// export class Container extends Component {
//   state = {
//     image: null,
//     q: '',
//   };

//   handleSubmit = q => {
//     this.setState({
//       q: q,
//     });
//   };

//   async componentDidUpdate(prevProps, prevState) {
//     const { q } = this.state;
//     try {
//       if (prevState.q !== q) {
//         const result = await galleryImageDataFetch(q);
//         this.setState({
//           image: result,
//         });
//       }
//     } catch (error) {
//       this.setState({ error });
//     }
//   }

//   render() {
//     return (
//       <>
//         <Searchbar handleSubmit={this.handleSubmit} />
//         <ImageGallery images={this.props.state.images} />
//       </>
//     );
//   }
// }
