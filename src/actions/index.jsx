import axios from 'axios';

export const FETCH_ABOUTS = 'FETCH_ABOUTS';
export const FETCH_BENEFITS = 'FETCH_BENEFITS';
export const FETCH_IMAGES = 'FETCH_IMAGES';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'en311piqqwz2';
const API_KEY = 'c301965a87801b9470f65c458f22bfb3a31926384bc5b59822b946aaa4c5d69d';

export function fetchAbouts(locale) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=about&locale=${locale}`);
  return {
    type: FETCH_ABOUTS,
    payload: request
  };
}

export function fetchBenefits(locale) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=benefit&locale=${locale}`);
  return {
    type: FETCH_BENEFITS,
    payload: request
  };
}

export function fetchImages(locale) {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=image`);
  return {
    type: FETCH_IMAGES,
    payload: request
  };
}