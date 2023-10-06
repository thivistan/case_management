# categories Directory

The "categories" directory contains JSON files representing various category data objects.

# categories JSON Object

A JSON object in this directory represents a category in 211LA.org, including the label of that category and link to that category. It also contains subcategories
that is in a specific resource screen (e.g. Dental category in Healthcare screen). Each subcategory includes a label, a URL, a list of locations where services
within that subcategory can be found, and a list of links relevant to that subcategory.

## categories Object Structure

- `global_label` (string, required): The main label for the category.
- `global_url` (string, required): The main url for the category.

## subcategories Object Structure

Each location object within the `subcategories` array includes the following properties:

- `label` (string, required): The label or name of the category.
- `image` (string, required): The string pointing to the image of the category.
- `url` (string, required): A URL that links to the 211la.org resource page of that category (e.g. the link to dental care on 211la).
- `links` (array, optional): An array of link objects, each containing details about a specific link within the category.
- `locations` (array, optional): An array of location objects, each containing details about a specific service location within the category.

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

## Link Object Structure

Each link object within the `links` array includes the following properties:

- `text` (string, required): The text that represents the hyperlink.
- `link` (string, required): The link that will be opened when the user clicks on it.

### Example Entry

from healthcare.json:

```json
{
  "global_label": "Healthcare",
  "global_url": "https://211la.org/resources/subcategory/healthcare",
  "subcategories": [
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
        }
        // Additional location entries for this category
      ],
      "links": [
        {
          "title": "Test Title",
          "image": "image.link",
          "link": "url"
        }
        // Additional links can be inserted here
      ]
    }
    // Additional subcategories can be inserted here
  ]
}
```
