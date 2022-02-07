import { Component } from "react";

class ImageGalleryItem extends Component {
  render() {
    return this.props.images.map((el) => 
      <li className="gallery-item" key={el.id}>
        <img src={el.previewURL} alt="" />
      </li>
    );
  }
}
export default ImageGalleryItem;