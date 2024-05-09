import { useState, useEffect } from 'react';
import { searchImages } from 'components/searchImages';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Notiflix from 'notiflix';


export const App = () => {
  const [photo, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  useEffect(()=>{
      setIsLoading(true)
      searchImages()
          .then(response => response.json())
          .then(photo => {
            console.log(photo)
            setPhoto(photo)
          })
          .catch(err => {
            console.log(err);
            Notiflix.Notify.failure('Sorry, something went wrong');
          })
          .finally(() => {
            setIsLoading(false)
          });
  },[])


  const openModal = (e) => {
    setLargeImageURL(e.target.dataset.source)
  }

  const closeModal = () => {
    setLargeImageURL('')
  }

    return (
      <div>
        <ImageGallery 
          state={{photo, isLoading, largeImageURL}}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
    );
}
