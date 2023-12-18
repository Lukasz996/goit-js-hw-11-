import { getPhoto } from './js/api';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
let page = 1;

const form = document.querySelector('#search-form');
const loadMoreBtn = document.querySelector('.load-more');
const inputText = document.querySelector('.text');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', onSearch);
loadMoreBtn.addEventListener('clik', onloadMore);
loadMoreBtn.getElementsByClassName.display = ' none';

function createMarkup(image) {
  const result = image
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<div class="photo-card item">
      <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" loading="lazy" height="390" width="600"/>
</a>
      <div class="info">
        <p class="info-item">
          <b>Likes: ${likes}</b>
        </p>
        <p class="info-item">
          <b>Views: ${views}</b>
        </p>
        <p class="info-item">
          <b>Comments: ${comments}</b>
        </p>
        <p class="info-item">
          <b>Downloads: ${downloads}</b>
        </p>
      </div>
    </div>`
    )
    .join('');
  return result;
}


