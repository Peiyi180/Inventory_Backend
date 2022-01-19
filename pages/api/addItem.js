import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('shopify');

    const name = req.query.name;
    var itemNumber = req.query.number;

    if (name === undefined) {
        res.send('Please attach name parameter to url');
        return
    }

    if (itemNumber === undefined) {
        res.send('Please attach number parameter to url')
        return
    }

    itemNumber = parseInt(itemNumber); // convert string to int

    const itemInDb = await db.collection('inventory').find({
        "name": name.toLowerCase()
    }).toArray();

    const itemExsist = itemInDb.length != 0;
    

    if (itemExsist) { // increase item number
        itemNumber += parseInt(itemInDb[0].number);
        // update item in db
        await db.collection('inventory').updateOne(
            {
                "name": name.toLowerCase()
            },{
                $set: {
                    "number": itemNumber
                }
            }
        )
        res.send('update ' + name.toLowerCase() + ' success');
    } else { // create a new item
        await db.collection('inventory').insertOne({
                "name": name.toLowerCase(),
                "number": itemNumber,
            });
        res.send('create ' + name.toLowerCase() + ' success');
    }
}