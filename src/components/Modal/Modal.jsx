import { useEffect } from 'react';
import css from './Modal.module.css'

export const Modal = ({largeImageURL, closeModal}) => {
  useEffect(() =>  {
      const onKeydownEsc = (e) => {
          if (e.code === 'Escape') closeModal()
      }
      window.addEventListener('keydown', onKeydownEsc);
      return () => {
          window.removeEventListener('keydown', onKeydownEsc);
      }
  },[closeModal])

    return (
        <div className={css.Overlay} onClick={closeModal}>
            <div className="Modal">
                <img src={largeImageURL} alt="" width="600" />
            </div>
        </div>
    );
}
