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

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

async function onSearch(event) {
  event.preventDefault();
  page = 1;
  const result = await getPhoto(`${input.value}`, page);
  loadMoreBtn.style.displey = ' block';
  if (result.totalHits === 0) {
    Notiflix.Notify.failure(
      'Sorry, there are no images matching your search query. Please try again.'
    );
    loadMoreBtn.style.display = 'none';
  } else {
    Notiflix.Notify.success(`Hooray! We found ${result.totalHits} images.`);
  }
}

// const markup = createMarkup(result.hits);
// gallery.innerHTML = createMarkup(result.hits);
// lightbox.refresh();

function onloadMore() {
  page += 1;
  getPhoto(input.value, page).then(restponse => {
    gallery.insertAdjacentHTML('beforeend', createMarkup(response.hits));
    lightbox.refresh();
    if (page * 40 >= response.totalHits) {
      Notiflix.Notify.warning(
        "We're sorry, but you've reached the end of search results"
      );
      loadMoreBtn.style.display = 'none';
    }
  });
}
