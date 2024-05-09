import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Audio } from 'react-loader-spinner';
import { Modal } from 'components/Modal/Modal';
import css from './ImageGallery.module.css';


export const ImageGallery = ({state, openModal, closeModal}) => {
    const { photo, isLoading, largeImageURL } = state;
    return (
      <div>
        <ul className={css.gallery} onClick={openModal}>
          {photo &&
            photo.map(el => (
              <ImageGalleryItem key={el.id} imageS={el} />
            ))}
        </ul>
        {isLoading && <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
        />}
        {largeImageURL && <Modal largeImageURL={largeImageURL} closeModal={closeModal}/>}
      </div>
    );
}
