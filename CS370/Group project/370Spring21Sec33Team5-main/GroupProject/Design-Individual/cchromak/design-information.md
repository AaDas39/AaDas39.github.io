# Design for GroceryListManager

### 1) A grocery list consists of items the users want to buy at a grocery store. The application
must allow users to add items to a list, delete items from a list, and change the quantity
of items in the list (e.g., change from one to two pounds of apples).
To realize this, I designed two classes, GroceryList and Item. The GroceryList class is an aggregation 
of items. With addItem(Item itemName, Integer quantity) a user can add an item and
it's desired amount, with delteItem(Item itemName) a user can delete an item, and with
changeQuantity(Item itemName, Integer newQuantity) a user can update the quantity of an item needed.

### 2) The application must contain a database (DB) of items and corresponding item types.
To realize this, I designed an ItemType class to use in relationship to the Item class. Each Item
has a relationship with an ItemTypen that is a "has a" relationship. Each item must have only
one ItemType while and ItemType can be related to 1 to many items. 

### 3) Users must be able to add items to a list by picking them from a hierarchical list, where
the first level is the item type (e.g., cereal), and the second level is the name of the
actual item (e.g., shredded wheat). After adding an item, users must be able to specify a
quantity for that item.
To realize this, I created a searchItemByName() and a searchItemByType() method within the GroceryList 
class. These will first allow the user to check for items by type and then to drill down and check for
items by name. Once there, they may use the addItem(Item itemName, Integer quantity) method to add an item
to the list and specify a quantity for that item.

### 4) Users must also be able to specify an item by typing its name. In this case, the
application must look in its DB for items with similar names and ask the users, for each
of them, whether that is the item they intended to add. If a match cannot be found, the
application must ask the user to select a type for the item and then save the new item,
together with its type, in its DB.
To realize this, I have the searchItemByName() method. If the item is not found, my application
would enlist the createItem(String itemName, int itemTypeId, String itemQuantityType) method.
Here the user would enter the Itemtype name, which would enlist the ItemType method showItemTypeList().
The user would select from the list or if need be enlist the createItemType(String itemTypeName) method 
to create a new ItemType. Finally they would input a String for the itemQuantityType. This is one 
part of the project that I inferred a need for. It was not outright written in the spec, however because
items are measured in different values I believe it is neccesary to explictly record this value.
For example: apples can be measured in an integer count and liquids, like milk, may be meassured in gallons.

### 5) Lists must be saved automatically and immediately after they are modified.
Not considered because it doesn't affect the design directly.

### 6)  Users must be able to check off items in a list (without deleting them).
To realize this, I created a method checkItemOff(String itemName) that uses an items name as a 
key to input in a HashMap and boolean value of true to represent that it has been checked off.
By default the this value is set to false to represent that it is not checked off.

### 7) Users must also be able to clear all the check-off marks in a list at once.
To realize this, I created the clearAllCheckOffs() within the GrocerList class which would simply iterate
over the HashMap setting all of the values in the key/value pairs to false.

### 8) Check-off marks for a list are persistent and must also be saved immediately.
Not considered because it doesn't affect the design directly.

### 9)  The application must present the items in a list grouped by type, so as to allow users to
shop for a specific type of product at once (i.e., without having to go back and forth
between aisles).
To realize this, I have the searchItemByType() method in the GroceryList class. This method sorts items by type
and can be used to display them by specifc ItemType.

### 10) The application must support multiple lists at a time (e.g., “weekly grocery list”, “monthly
farmer’s market list”). Therefore, the application must provide the users with the ability to
create, (re)name, select, and delete lists.
To realize this, I have a GroceryListManager class. This class is an aggregation of GroceryList Objects.
With the createNewList(String listName) method a user can create a new list passing a name. This method will also 
increase the quantity field by one to track the amount of GroceryList objects. They can rename any list using the 
renameList(String listName, String newListName) method, and delete a list using the deleteList(String listName)
method, which will also decrement the aunatity field. Finally they can select a specific list using
selectList(String listName).

### 11) The User Interface (UI) must be intuitive and responsive
Not considered because it doesn't affect the design directly.