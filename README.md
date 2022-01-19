This app is built using Next.js and MongoDB

It implement CRUD operations using api.

1. To run this project, you should have Node.js installed.
2. `npm install` to install all packages
3. `npm run dev` to serve project at localhost:3000

CRUD Instructions:
1. Create

    Url: http://localhost:3000/api/addItem
    
    params: @name
            @number
            
    Ex: http://localhost:3000/api/addItem?name=apple&&number=9
    
    This will create an item to databse if this item is not exsist in db.
    
    If this item exsist in db, number will be incremented by updating that entry.

2. Read

    Url: http://localhost:3000/api/inventory
    
    It will show the inventory list in db.

3. Update

    Achieved in Create and Delete

4. Delete

    Url: http://localhost:3000/api/deleteItem
    
    params: @name
    
    if name is the item name, that item will be deleted.
    
    if name is all, whole inventory will be deleted.
    
    Ex: http://localhost:3000/api/deleteItem?name=apple
    
        http://localhost:3000/api/deleteItem?name=all


Download CSV Instructions

1. Go to http://localhost:3000/home
2. Click Download Button
3. A csv format inventory list will be downloaded.

Reference:

Next.js Basics: https://nextjs.org/learn/basics/create-nextjs-app

Integrate MongoDb into Next.js: https://www.mongodb.com/developer/how-to/nextjs-with-mongodb/

Copyright: Peiyi Jiang

jpeiyi.com
