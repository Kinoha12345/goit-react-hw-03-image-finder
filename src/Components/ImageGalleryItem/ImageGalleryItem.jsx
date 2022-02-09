import { Component } from "react";
import PropTypes from 'prop-types';
class ImageGalleryItem extends Component {
  render() {
    return this.props.images.map((el) => 
      <li className="ImageGalleryItem" onClick={()=>{this.props.onModalOpen(el.largeImageURL)}} key={el.id}>
        <img className="ImageGalleryItem-image" src={el.webformatURL} alt="" />
      </li>
    );
  }
}

ImageGalleryItem.prototypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired)
}

export default ImageGalleryItem;