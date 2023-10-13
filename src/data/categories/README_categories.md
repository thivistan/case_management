# categories Directory

The "categories" directory contains JSON files representing various category data objects.

# categories JSON Object

A JSON object in this directory represents a resource in 211LA.org (e.g. Health). It also contains all the categories
that is in a specific resource screen (e.g. Dental category in Healthcare screen). Each category includes a label, a URL, and a list of resources
that can either be a location or a redirect link.

## categories Object Structure

Each subcategory object within the `categories` array includes the following properties:

- `label` (string, required): The label or name of the category.
- `image` (string, required): The string pointing to the image of the category.
- `url` (string, required): A URL that links to the 211la.org resource page of that category (e.g. the link to dental care on 211la).
- `resources` (array, optional): An array of resources objects, each containing details about a specific service resource within the category. Can be a redirect link or a resource location.

## Resource Object Structure

Each resource object within the `resources` array must follow one of the two following template:

Template 1:
- `name` (string, required): The name of the service resource.
- `address` (string, optional): The address of the service resource.
- `lat` (number, optional): The latitude coordinate of the service resource.
- `lon` (number, optional): The longitude coordinate of the service resource.
- `phone` (string, optional): The contact phone number for the service resource.
- `hours` (string, optional): The operating hours of the service resource.
- `email` (string, optional): The email address for the service resource.
- `website` (string, optional): The website URL for the service resource.

Template 2:
- `name` (string, required): The name of the service resource.
- `link` (string, optional): The redirect link of the service resource.

### Example Entry

```json
[
  {
    "label": "Medical Care",
    "url": "https://211la.org/resources/search?keyword=Healthcare%20%3E%20Medical%20Care%20%281018%29&landing=1&keyword_hidden=Healthcare%20%3E%20Medical%20Care%20%281018%29&website_categorization=1",
    "resources": [
      // A resource can be a location.
      {
        "name": "Parktree Community Health Center",
        "address": "750 S Park Ave, Pomona, CA 91766",
        "lat": 34.052825,
        "lon": -117.753981,
        "phone": "(909) 630-7196",
        "hours": "8am - 5pm"
      },
      // A resource can also be a redirect link.
      {
        "name": "YouTube Link",
        "link": "http://www.youtube.com",
      }
      // Additional resources can be inserted here
    ]
  }
  // Additional categories can be inserted here
]
```
