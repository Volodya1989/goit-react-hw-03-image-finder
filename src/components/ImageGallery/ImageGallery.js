import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';
// import { FcSearch } from 'react-icons/fc';
// import { IconContext } from 'react-icons';

const ImageGallery = ({ data, onClick }) => {
  console.log();
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
        // <>
        //   <IconContext.Provider
        //     value={{
        //       display: 'flex',
        //       className: 'search-icon',
        //       size: '40em',
        //       marginLight: '150%',
        //     }}
        //   >
        //     <FcSearch className="search-icon" />
        //     {/* <div>Type in to see an Awesome Images</div> */}
        //   </IconContext.Provider>
        // </>
      )}
    </List>
  );
};
export default ImageGallery;
