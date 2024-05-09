export const ImageGalleryItem = ({ imageS }) => {
  return (
    <li key={imageS.id} className="gallery-item">
      <img src={imageS.urls.regular} alt="" data-source={imageS.urls.full} width="400"/>
      <h3>{imageS.alt_description}</h3>
      <span>{imageS.user.name}</span>
    </li>
  );
};
