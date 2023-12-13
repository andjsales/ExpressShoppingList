# Express Shopping List Exercise

### GET /items 
- this should render a list of shopping items.
- [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]

### POST /items 
- this route should accept JSON data and add it to the shopping list.
- {“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}

### GET /items/:name
- this route should display a single item’s name and price
- {“name”: “popsicle”, “price”: 1.45}

### PATCH /items/:name
- this route should modify a single item’s name and/or price
- {“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}

### DELETE /items/:name
- this route should allow you to delete a specific item from the array
- {message: “Deleted”}
