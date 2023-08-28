const key = '59pe61cOEUP3lEeNtRozneKwruo20IkW';

const baseURL = 'api.tomtom.com';

const extension = 'json';

const codes = {
  generalHealthService: '9663',
  hospital: '7321',
  clinic: '7321',
  pharmacy: '7326',
};

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

  if (region) term += ` ${region}`;

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
    let tempCode = codes.hospital;
    if (code == 'Pharmacy') tempCode = codes.pharmacy;
    else if (code == 'Clinic') tempCode = codes.clinic;

    const encodeCode = encodeURI(tempCode);
    finalUrl += `&categorySet=${encodeCode}`;
  } else finalUrl += `&categorySet=${code}`;

  console.log('--- URL: ', finalUrl);
  return finalUrl;
};

const buildStaticMapURL = (lon, lat) => {
  const coordinate = encodeURI(String(lon) + ',' + String(lat));
  return `https://${baseURL}/map/1/staticimage?key=${key}&zoom=15&center=${coordinate}&format=png&layer=basic&style=night&view=IN&language=en-GB`;
};

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

const getStaticImage = (lon, lat) => {
  const url = buildStaticMapURL(lon, lat);
  return url;
};

export { getPlaces, getStaticImage };
