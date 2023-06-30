import { Item } from './ImageGalleryItem.styled';
const ImageGalleryItem = ({ webformatURL, activeImg, tags, onClick }) => {
  // console.log(_id);

  return (
    <Item onClick={e => onClick(e, activeImg)}>
      <img src={webformatURL} alt={tags} />
    </Item>
  );
};
export default ImageGalleryItem;
