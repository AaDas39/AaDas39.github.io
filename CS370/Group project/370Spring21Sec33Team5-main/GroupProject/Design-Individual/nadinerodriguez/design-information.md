The GroceryListManager UML class has 4 classes: Item, ItemType, User, and GroceryList.

ItemType class:
- ItemType class is the parent class of the Item class.
- An ItemType has a itemTypeId for uniqueness and a itemTypeName.
- The setName() method allows one to edit or change the ItemType name.
- The getName() method allows one to get the name of the ItemType.
- The getNameItems() method allows one to get the name of the Items.

Item class:
- An Item has a itemId for uniqueness.
- An item has an itemName so users can type and search for the item.
- The setName() method allows one to edit or change the Item name.
- The getName() method allows one to get the name of the Item.
- Users can change/specify the item's quantity for the item by using either the setQuantity() method or the getQuantity() method.

User class:
- Allows users to register for an account or login using the userID and password.
- Users can also delete GroceryList using the deleteList() method.
- Users can create GroceryList using the createList() method.

GroceryList class:
- A GroceryList has a groceryListId for uniqueness and a groceryListName.
- The setName() method allows one to edit or change the GroceryList name.
- The getName() method allows one to get the name of the GroceryList.
- Allows users to clear all the check-off marks in a GroceryList using the uncheckAllItems() method.
-It allows a user to delete item(s) from the GroceryList using the deleteItem() method.
- It also allows a user to add item(s) to the GroceryList using the addItem() method.
