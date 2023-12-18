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

