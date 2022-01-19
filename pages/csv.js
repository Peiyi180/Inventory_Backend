import clientPromise from "../lib/mongodb";
import { CSVDownload } from "react-csv";

function Csv({ recordJson }) {
    return (
        <CSVDownload data={recordJson} />
    )
  }
  

export async function getStaticProps() {

    const client = await clientPromise;
    const db = client.db('shopify');

    // find all records
    const itemArray = await db.collection('inventory').find({}).toArray();
    
    var fields = ["name", "number"]
    var recordJson = [fields];

    // convert items record to string
    itemArray.forEach(element => {
        var hm = [
            element.name,
            element.number
        ];
        recordJson.push(hm);
    });


    return {
      props: {
        recordJson,
      },
    }
  }
  
  export default Csv