# categories Directory

The "categories" directory contains JSON files representing various category data objects. 

# categories JSON Object

A JSON object in this directory represents a list of categories that are in a specific resource screen (e.g. Dental category in Healthcare screen). Each category includes a label, a URL, and a list of locations where services within that category can be found.

## categories Object Structure

- `label` (string): The label or name of the category.
- `url` (string): A URL that links to the 211la.org resource page of that category (e.g. the link to dental care on 211la).
- `locations` (array): An array of location objects, each containing details about a specific service location within the category.

## Location Object Structure

Each location object within the `locations` array includes the following properties:

- `name` (string, required): The name of the service location.
- `address` (string, optional): The address of the service location.
- `lat` (number, optional): The latitude coordinate of the service location.
- `lon` (number, optional): The longitude coordinate of the service location.
- `phone` (string, optional): The contact phone number for the service location.
- `hours` (string, optional): The operating hours of the service location.
- `email` (string, optional): The email address for the service location.
- `website` (string, optional): The website URL for the service location.

### Example Category Entry

from healthcare.json:

```json
{
  "label": "Medical Care",
  "url": "https://211la.org/resources/search?keyword=Healthcare%20%3E%20Medical%20Care%20%281018%29&landing=1&keyword_hidden=Healthcare%20%3E%20Medical%20Care%20%281018%29&website_categorization=1",
  "locations": [
    {
      "name": "Parktree Community Health Center",
      "address": "750 S Park Ave, Pomona, CA 91766",
      "lat": 34.052825,
      "lon": -117.753981,
      "phone": "(909) 630-7196",
      "hours": "8am - 5pm"
    },
    // Additional location entries for this category
  ]
}
```