import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ data, onClick }) => {
  return (
    <List>
      {data.length > 0 ? (
        data.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              _id={id}
              webformatURL={webformatURL}
              tags={tags}
              activeImg={largeImageURL}
              onClick={onClick}
            />
          );
        })
      ) : (
        <div></div>
      )}
    </List>
  );
};
export default ImageGallery;
