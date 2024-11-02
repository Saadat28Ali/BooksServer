import { MongoClient, ServerApiVersion } from "mongodb";
import "dotenv/config";

const uri = process.env.CONNECTION_URI;

const client = new MongoClient( uri, {
    serverApi: {
        version: ServerApiVersion.v1, 
        strict: true, 
        deprecationErrors: true, 
    }
});

async function testrun() {
    try {
        await client.connect();
        
        const database = client.db("Books");
        const collection = database.collection("Books");

        const query = {author: "Vaclav Hubinger"};

        const book = await collection.find(query).limit(1).toArray();
        console.log(book[0]);

    } finally {
        await client.close();
    }
}

async function searchBooksBy(fieldToMatch, requiredValue, pageNo, pageSize) {
    try {
        await client.connect();

        const database = client.db("Books");
        const collection = database.collection("Books");

        let query = {};
        query[fieldToMatch] = requiredValue;
        let queryOptions = {};
        queryOptions.sort = fieldToMatch;

        const queryResult = await collection.find(query, queryOptions).skip(pageNo*pageSize).limit(pageSize).toArray();

        return queryResult;
    } finally {
        await client.close();
    }
}

export { searchBooksBy };

