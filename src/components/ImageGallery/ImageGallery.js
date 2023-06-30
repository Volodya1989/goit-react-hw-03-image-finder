import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
const ImageGallery = ({ data, onClick }) => {
  console.log();
  return (
    <List>
      {data.length > 0 ? (
        data.map(({ id, webformatURL, tags }, index) => {
          return (
            <ImageGalleryItem
              key={id}
              _id={id}
              webformatURL={webformatURL}
              tags={tags}
              onClick={webformatURL => onClick(webformatURL)}
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
