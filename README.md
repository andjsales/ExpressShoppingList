# Express Shopping List

## Description

This is an Express-based application that models a simple shopping list management system, allowing users to add, retrieve, update, and delete items from their shopping list.

Technologies used: Node.js, Express, JavaScript

## Features

- Add Items: Add items to the shopping list with name and price.
- View Items: Retrieve a list of all items or details of a specific item.
- Update Items: Modify the name or price of an existing item.
- Delete Items: Remove items from the list.

## Setup

1. `npm install`
2. `npm start`

## API Endpoints

##### GET /items 

- this should render a list of shopping items.
- [{“name”: “popsicle”, “price”: 1.45}, {“name”:”cheerios”, “price”: 3.40}]

##### POST /items 

- this route should accept JSON data and add it to the shopping list.
- {“name”:”popsicle”, “price”: 1.45} => {“added”: {“name”: “popsicle”, “price”: 1.45}}

##### GET /items/:name

- this route should display a single item’s name and price
- {“name”: “popsicle”, “price”: 1.45}

##### PATCH /items/:name

- this route should modify a single item’s name and/or price
- {“name”:”new popsicle”, “price”: 2.45} => {“updated”: {“name”: “new popsicle”, “price”: 2.45}}

##### DELETE /items/:name

- this route should allow you to delete a specific item from the array
- {message: “Deleted”}

## Error Handling

Implemented using a custom ExpressError class
