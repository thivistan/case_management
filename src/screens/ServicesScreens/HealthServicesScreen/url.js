const key = '59pe61cOEUP3lEeNtRozneKwruo20IkW';

const baseURL = 'api.tomtom.com';

const extension = 'json';

const hospitalCode = '9663';

const buildPlaceURL = (phrase) => {
  const encode = encodeURI(phrase);
  return `https://${baseURL}/search/2/search/${encode}.${extension}?key=${key}&categorySet=${hospitalCode}`;
};

const buildStaticMapURL = (lon, lat) => {
  const coordinate = encodeURI(String(lon) + ',' + String(lat));
  return `https://${baseURL}/map/1/staticimage?key=${key}&zoom=15&center=${coordinate}&format=png&layer=basic&style=night&view=IN&language=en-GB`;
};

const getPlaces = async (phrase) => {
  const url = buildPlaceURL(phrase);
  const response = await fetch(url);
  const result = await response.json();
  const allPlaces = await result.results;
  return allPlaces;
};

const getStaticImage = (lon, lat) => {
  const url = buildStaticMapURL(lon, lat);
  return url;
};

export { getPlaces, getStaticImage };
