import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('shopify');

    // Currently supporting 2 delete methods
    // 1. Delete a item
    // 2. Delete whole inventory when name == all

    const name = req.query.name;

    if (name === undefined) {
        res.send('Please attach name parameter to url');
        return
    }

    if (name != "all") {
        await db.collection('inventory').deleteOne({
            "name": name.toLowerCase()  // delete this item
        })
    } else {
        await db.collection('inventory').deleteMany({});    // delete all items
    }

    res.send('delete ' + name + ' success');
}