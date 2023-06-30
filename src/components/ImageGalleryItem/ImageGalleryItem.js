import { Item } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <Item>
      <img src={webformatURL} alt={tags} />
    </Item>
  );
};
export default ImageGalleryItem;
