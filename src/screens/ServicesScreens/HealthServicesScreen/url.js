/**
 * File with various functionalities to interact with the Map API.
 */

const key = '59pe61cOEUP3lEeNtRozneKwruo20IkW';

const baseURL = 'api.tomtom.com';

const extension = 'json';

const codes = {
  generalHealthService: '9663',
  hospital: '7321',
  clinic: '7321',
  pharmacy: '7326',
};

/**
 * Function to build the fuzzy/basic search URL.
 * @param {String} phrase the phrase/query to search for
 * @param {Number} userLon the user's longtitude
 * @param {Number} userLat the user's latitude
 * @param {Number} distanceMiles the user's preference for the places' distance
 * @param {String} code the specific type of establishment to search for
 * @param {String} address the address to search for
 * @param {Object} region the region to search for in the format {label: String, value: String}
 * @returns a string URL that will make a GET request to the API.
 */
const buildPlaceURL = (
  phrase,
  userLon = null,
  userLat = null,
  distanceMiles = null,
  code,
  address = null,
  region = null
) => {
  let term = phrase;

  if (address) term += ` ${address}`;

  if (region) term += ` ${region.value}`;

  const encodePhrase = encodeURI(term);

  const url = `https://${baseURL}/search/2/search/${encodePhrase}.${extension}?key=${key}`;
  let finalUrl = url;

  if (userLon && userLat) {
    const encodeLon = encodeURI(userLon);
    const encodeLat = encodeURI(userLat);
    finalUrl += `&lat=${encodeLat}&lon=${encodeLon}`;
  }

  if (distanceMiles) {
    // convert miles to meter rounded
    const distanceMeters = Math.round(parseFloat(distanceMiles) * 1609.344);
    const encodeMeters = encodeURI(distanceMeters);
    finalUrl += `&radius=${encodeMeters}`;
  }

  if (code != codes.generalHealthService) {
    finalUrl += encodeURI('&categorySet=');

    let tempCode = codes.hospital;
    if (code.includes('Clinic') || code.includes('Hospital'))
      finalUrl += encodeURI(`${codes.hospital},`);
    if (code.includes('Pharmacy')) finalUrl += encodeURI(`${codes.hospital}`);
  } else finalUrl += `&categorySet=${code}`;

  return finalUrl;
};

/**
 * Function to make a GET request/fetch the search results from the API.
 * @param {String} phrase the phrase/query to search for
 * @param {Number} userLon the user's longtitude
 * @param {Number} userLat the user's latitude
 * @param {Number} distanceMiles the user's preference for the places' distance
 * @param {String} code the specific type of establishment to search for
 * @param {String} address the address to search for
 * @param {Object} region the region to search for in the format {label: String, value: String}
 * @param {String} sortBy the type of sorting done to the result
 * @returns a JSON object that contains the search results.
 */
const getPlaces = async (
  phrase,
  userLon = null,
  userLat = null,
  distanceMiles = null,
  code = codes.generalHealthService,
  address = null,
  region = null,
  sortBy = null
) => {
  const url = buildPlaceURL(phrase, userLon, userLat, distanceMiles, code, address, region);
  const response = await fetch(url);
  const result = await response.json();
  const allPlaces = await result.results;

  if (sortBy === 'WHAT') {
    allPlaces.sort((a, b) => {
      if (a.poi.name < b.poi.name) return -1;
      else if (a.poi.name > b.poi.name) return 1;
      return 0;
    });
  } else if (sortBy === 'DISTANCE' && userLon && userLat) {
    allPlaces.sort((a, b) => {
      if (a.dist < b.dist) return -1;
      else if (a.dist > b.dist) return 1;
      return 0;
    });
  } else if (sortBy === 'RECOMMENDED') {
    allPlaces.sort((a, b) => {
      if (a.score > b.score) return -1;
      else if (a.score < b.score) return 1;
      return 0;
    });
  }

  return allPlaces;
};

export { getPlaces };
