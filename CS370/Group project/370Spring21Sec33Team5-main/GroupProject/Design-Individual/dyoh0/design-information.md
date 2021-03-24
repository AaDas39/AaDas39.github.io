1. A grocery list consists of items the users want to buy at a grocery store. The application must allow users to add items to a list, delete items from a list, and change the quantity of items in the list (e.g., change from one to two pounds of apples).
“Grocery List” was implemented as a class with public operations add_items(), delete_items(), and change_quantity() that add, delete, and change the quantity of items in the list.  


2. The application must contain a database (DB) of items and corresponding item types.
Three classes were added, DB, items, and item types.  Items and item types have composition relationships to DB, as items and item types cannot exist without a database.  They are inherited by the Grocery List class; a grocery list contains both item types and items. 


3. Users must be able to add items to a list by picking them from a hierarchical list, where the first level is the item type (e.g., cereal), and the second level is the name of the actual item (e.g., shredded wheat). After adding an item, users must be able to specify a quantity for that item.
This was implemented into the Grocery List class as public operations “choose_item()” for picking both the item type and item name, and “specify_quantity() for specifying the quantity of that item.  Item Type and Items are also both given name attributes, “item_type” and “item_name”.  


4. Users must also be able to specify an item by typing its name. In this case, the application must look in its DB for items with similar names and ask the users, for each of them, whether that is the item they intended to add. If a match cannot be found, the application must ask the user to select a type for the item and then save the new item, together with its type, in its DB.
Specifying an item by typing its name has already been implemented as “choose_item()”, mentioned in #3.  The private operations “search_similar()”, and “ask_user()” are implemented in the DB class for looking in the DB for similarly-named items, asking the user about the intended item, and asking the user to select a type for the item.  “select_type()”, and “save_new_item()” are saved under the Item Type and Items classes respectively for saving the new item with its type into the DB.


5. Lists must be saved automatically and immediately after they are modified.
Not considered because it does not affect the design directly.


6. Users must be able to check off items in a list (without deleting them).
This was implemented into the Grocery List class as the public operation “check()”.  


7. Users must also be able to clear all the check-off marks in a list at once.
This was implemented into the Grocery List class as the public operation “clear()”.  


8. Check-off marks for a list are persistent and must also be saved immediately.
Not considered because it does not affect the design directly.


9. The application must present the items in a list grouped by type, so as to allow users to
shop for a specific type of product at once (i.e., without having to go back and forth
between aisles).
This was implemented into the Grocery List class as the private operation “present_grouped()”.  


10. The application must support multiple lists at a time (e.g., “weekly grocery list”, “monthly farmer’s market list”). Therefore, the application must provide the users with the ability to create, (re)name, select, and delete lists.
This was implemented into a new class “List Manager” as the public operations “create_list()”, “select_list()”, and “delete_list()”.  Grocery List is also given a name attribute, “list_name” and a new operation “re-name_list()”.


11. The User Interface (UI) must be intuitive and responsive.
Not considered because it does not affect the design directly.