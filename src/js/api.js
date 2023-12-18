import axios, { Axios } from 'axios';
import Notiflix from 'notiflix';

export async function getPhoto(input, page) {
  const BASE_URL = 'https://pixabay.com/api/?';
  const API_KEY = '29601510-cb62b0e552e92b2824471424b';

  const querryParams = new URLSearchParams({
    key: `${API_KEY}`,
    q: String(input),
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 'page',
    per_page: '20',
  });

  const rosponse = await Axios.get(`${BASE_URL}${querryParams}`)
  return Response.data
}
