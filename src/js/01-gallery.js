// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems

  .map(
    galleryItem =>
      `<a class="gallery__item" href="${galleryItem.original}">
            <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
        </a>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', markup);

// ===========================================================================

new SimpleLightbox('.gallery a', {
  /* options */
  captionsData: 'alt',
  captionDelay: 250,
});
