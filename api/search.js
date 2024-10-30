// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

function GET(request, response) {
    
    const searchBy = request.query.searchby;
    const searchValue = request.query.value;

    if (["title", "author", "category"].includes(searchBy)) {
        searchBooksBy(searchBy, RegExp("^"+searchValue, "i")).then(
            (result) => {
                return response.status(200).send(result);
            }
        )
    }
    return response.status(200).send("HERE");
}

export default GET;