import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGalleryList = ({images,onModalOpen}) => {
    return ( <ul className="ImageGallery">
    <ImageGalleryItem onModalOpen={onModalOpen} images={images}/>
  </ul> );
}
 
export default ImageGalleryList;