// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

async function GET(request, response) {
    
    const searchBy = request.query.searchby;
    const searchValue = request.query.value;


    if (["title", "author", "category"].includes(searchBy)) {

        const result = await searchBooksBy(searchBy, RegExp("^"+searchValue, "i"));
        return response.status(200).send(result);

        // searchBooksBy(searchBy, RegExp("^"+searchValue, "i")).then(
        //     (result) => {
        //         return response.status(200).send(result);
        //     }
        // )


    } else return response.status(200).send("No query");
    // return response.status(200).send("HERE");
}

export default GET;