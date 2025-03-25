# Task 1

Implement a new component ProductInfo to show information about a Product and its Parts.

* Product: ID, Product-Name, Status, Parts
* Parts: ID, Name
  * If a Product does not have any Parts display the text "No Parts assigned to the Product".

Show a list of all Products on the dashboard.

# Task 2

Implement the UI-mask to create a new Product in the ProductEditComponent.
A product has:
* an ID (primary key)
* a Name (required, 10-255 characters)
* a Status (required, on of ACTIVE, INACTIVE, IN_DESIGN)

Parts can be omitted for now.

Show an error message if the user-input is not valid.

Implement the ProductManagementComponent.saveProduct() to log the new Product to the console.

# Task 3

How would you rework the ProductEditComponent to use a ControlValueAccessor?
Refactor also the ProductManagementComponent to work with the changes.