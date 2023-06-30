import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ data, onClick }) => {
  console.log();
  return (
    <List>
      {data.length > 0 ? (
        data.map(({ id, webformatURL, tags, largeImageURL }, index) => {
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
        <div>Type in to see an Awesome Images</div>
      )}
    </List>
  );
};
export default ImageGallery;
