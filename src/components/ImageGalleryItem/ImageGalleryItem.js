import { Item } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL }) => {
  console.log('webformatURL', webformatURL);
  return (
    <Item>
      <img src={webformatURL} alt="" />
    </Item>
  );
};
export default ImageGalleryItem;
