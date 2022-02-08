import { Component } from "react";
class ImageGalleryItem extends Component {
  render() {
    return this.props.images.map((el) => 
      <li className="ImageGalleryItem" onClick={()=>{this.props.onModalOpen(el.largeImageURL)}} key={el.id}>
        <img className="ImageGalleryItem-image" src={el.webformatURL} alt="" />
      </li>
    );
  }
}
export default ImageGalleryItem;