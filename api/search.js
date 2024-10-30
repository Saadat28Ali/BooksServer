// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

async function GET(request, response) {
    
    const searchBy = request.query.searchby;
    const searchValue = request.query.value;

    let result = null;
    if (["title", "author", "category"].includes(searchBy)) {

        result = await searchBooksBy(searchBy, RegExp("^"+searchValue, "i"));
        // return response.status(200).send(result);

        // searchBooksBy(searchBy, RegExp("^"+searchValue, "i")).then(
        //     (result) => {
        //         return response.status(200).send(result);
        //     }
        // )


    }
    return response.status(200).body(result).send("here");
    // return response.status(200).send("HERE");
}

export default GET;