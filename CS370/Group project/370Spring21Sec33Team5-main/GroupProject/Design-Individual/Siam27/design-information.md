GroceryListManager Design informtion:

1)The application must allow users to add items to a list, delete items from a list, and change the quantity
of items in the list. 
To realize this requirement, I added to the design a class Grocery list with attributes itemName and the following methods:
addItem() method adds item to the grocery list.
deleteItem() method deletes an item from the grocery list
updateIten() method updates the amount of an item in the grocery list
2)The application must contain a database (DB) of items and corresponding item types .
To realize this requirement, I added to the design a class Database with attributes actualItem,itemType and the following methods:
askUser() method helps to ask user to add an item in it's grocery list
specifyItem() method saves new item in the grocery list
groupByItemType() method groups the item by it's type
supportMultipleLists() method should support multiple lists at a time
SearchItemByType(), if the item is not found then the method asks the user to search it by it's type
specifyItem() method identifies an item by it's type
3)Users must be able to add items to a list by picking them from a hierarchical list.
To realize this requirement, I added to the design a class HierarchicalList with attributes level1,level2 and the following methods:
itemType() method finds all the items by it's type in level 1
actualItem() method finds all the itens by it's name in level 2
also i added a class user with a method addItemToList()
4)Users must also be able to specify an item by typing its name. for each
of them, whether that is the item they intended to add. If a match cannot be found, the
application must ask the user to select a type for the item and then save the new item,
together with its type, in its DB.
To handle this requirement i added the SearchItemByType(),specifyItem() and specifyItem() to database class.
5)Lists must be saved automatically and immediately after they are modified.
To handle this requirement i created saveModified() method to the GroceryList class.
6)Users must be able to check off items in a list
To realize this requirement, I added to the design a class User with attribute userIdfollowing method:
checkOffItems() checks off all the items in a list
7)Users must also be able to clear all the check-off marks in a list at once.
To handle this requirement,i added cIearCheckOff() to the user class.
8)Check-off marks for a list are persistent and must also be saved immediately.
To handle this requirement,i added saveCheckOff() to the GroceryList class.
9)The application must present the items in a list grouped by type, so as to allow users to
shop for a specific type of product at once.
To handle this requirement,i added groupByltemType() to the Database class.
10)The application must support multiple lists at a time (e.g., “weekly grocery list”, “monthly
farmer’s market list”). Therefore, the application must provide the users with the ability to
create, (re)name, select, and delete lists
To handle this requirement, i added the folloing methods to user class:
createList() creates a grocery list
renameList() changes the name of the grocery list created
selectList() method allows user to select a a particular list
deleteList() method allows the user to delete  a list
11)The User Interface (UI) must be intuitive and responsive.
Not considered because it does not affect the design directly.





