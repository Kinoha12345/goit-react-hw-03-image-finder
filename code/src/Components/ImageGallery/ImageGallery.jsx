import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

const ImageGalleryList = ({images}) => {
    return ( <ul className="gallery">
    <ImageGalleryItem images={images}/>
  </ul> );
}
 
export default ImageGalleryList;