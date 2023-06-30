import { Item } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, _id, tags, onClick }) => {
  return (
    <Item onClick={webformatURL => onClick(webformatURL)}>
      <img src={webformatURL} alt={tags} />
    </Item>
  );
};
export default ImageGalleryItem;
