import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ data }) => {
  console.log('data', data);

  return (
    <List>
      {data.length > 0 ? (
        data.map(({ id, webformatURL }) => {
          return <ImageGalleryItem key={id} webformatURL={webformatURL} />;
        })
      ) : (
        <div>Type in to see an Awesome Images</div>
      )}
    </List>
  );
};
export default ImageGallery;
