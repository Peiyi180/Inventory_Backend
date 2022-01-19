import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db('shopify');

    // find all records
    const itemArray = await db.collection('inventory').find({}).toArray();
    var record = "Inventory Record\n\nName      Number\n";

    // convert items record to string
    itemArray.forEach(element => {
        var itemInfo = element.name + "     " + element.number + "\n";
        record += itemInfo;
    });
    res.send(record);
}