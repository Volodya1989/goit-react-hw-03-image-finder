import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ data }) => {

  return (
    <List>
      {data.length > 0 ? (
        data.map(({ id, webformatURL, tags }) => {
          return <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />;
        })
      ) : (
        <div>Type in to see an Awesome Images</div>
      )}
    </List>
  );
};
export default ImageGallery;
