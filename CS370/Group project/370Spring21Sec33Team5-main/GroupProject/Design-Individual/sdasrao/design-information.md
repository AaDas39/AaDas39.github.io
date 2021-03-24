\1. A grocery list consists of items the users want to buy at a grocery store. The application must allow users to add items to a list, delete items from a list, and change the quantity of items in the list (e.g., change from one to two pounds of apples).

\- This is implemented by the class called GroceryList in the UML design which specifies the name, type, description and the quantity of the items as the attributes. There exist methods called add, delete, and changeQuantity which let the user add items to a list, delete items from a list as well as changing to a desired quantity.

\2. The application must contain a database (DB) of items and corresponding item types.

\- This is implemented by the class called Items in the designed UML which is inherited from the class GroceryList. This class contains the list of items and their type which will be stored in the Database through another class called TypeGroup that will be inherited from the Items. The TypeGroup groups the grocery items based on their types. 

\3. Users must be able to add items to a list by picking them from a hierarchical list, where the first level is the item type (e.g., cereal), and the second level is the name of the actual item (e.g., shredded wheat). After adding an item, users must be able to specify a quantity for that item. 

\- To achieve this purpose the class GroceryList can be used here again. The GroceryList class has the method Add which can be used to add items to a list by picking from a hierarchical list. It also contains another method named the changeQuantity which will let the user set the quantity they would like for that particular item. 



\4. Users must also be able to specify an item by typing its name. In this case, the

application must look in its DB for items with similar names and ask the users, for each

of them, whether that is the item they intended to add. If a match cannot be found, the

application must ask the user to select a type for the item and then save the new item,

together with its type, in its DB.

\- For this purpose, there is a class in the UML called the search which allows the user to search for the specific item by its name. Search is being inherited from the class “Item” since it must have the properties such as name, type for the item.  The search class connects back to the Database as it is looking for that item. If such an item is not found, there is another class called the GroceryItemType which creates a new item type with the item name and item type and stores it back to the database for later use. 

\5. Lists must be saved automatically and immediately after they are modified.

\- To obtain this result, a method called SaveList has been added in the GroceryList class which will save the list automatically and immediately after making any changes. 

\6. Users must be able to check off items in a list (without deleting them).

\- To implement this, another method named check is mentioned in the class of “GroceryList” where the user will be able to check off items in a list. However, this will no way delete any checked items as the method doesn’t implement any such requirement. 

\7. Users must also be able to clear all the check-off marks in a list at once.

\- To fulfill this criteria, a method called clearAllCheckMarks has been implemented in the GroceryList class. This method will easily let the user clear all the pre-checkmarked items from a list at once. 

\8. Check-off marks for a list are persistent and must also be saved immediately.

\-  As mentioned previously, the method SaveList will save the list. Hence after calling on the check method, the method SaveList can be called upon immediately so that the check off marks can be saved with no further delay.

\9. The application must present the items in a list grouped by type, so as to allow users to

shop for a specific type of product at once (i.e., without having to go back and forth

between aisles).

\- In order to carry out this requirement, a class of TypeGroup has been added in the UML, which is inherited from the class “items”. This TypeGroup class contains the two attributes of the item’s name and the item’s item.   A method of CreateGroup is implemented which takes two parameters of “item name” and “item type” and successfully puts them in a group. This TypeGroup is then stored in the database so it sorts out the types in groups beforehand as the user tries to find similar items or is in quest for items for only a specific type.

\10. The application must support multiple lists at a time (e.g., “weekly grocery list”, “monthly

farmer’s market list”). Therefore, the application must provide the users with the ability to

create, (re)name, select, and delete lists.

\- For the purpose of this requirement, the ListManager class is useful as it contains the methods of  create, rename, select and delete items from list. 

\11. The User Interface (UI) must be intuitive and responsive.

\- This has not been implemented in the design of the UML because it’s a part of the User Interface (UI) as mentioned in the requirement itself. 

