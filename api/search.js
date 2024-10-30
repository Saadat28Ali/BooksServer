// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

function GET(request, response) {
    
    const searchBy = request.query.searchby;
    const searchValue = request.query.value;

    if (["title", "author", "category"].includes(searchBy)) {
        searchBooksBy(searchBy, RegExp("^"+searchValue, "i")).then(
            (result) => {
                response.status(200).send(result);
            }
        )
    }
    
    // response.status(400).send("Error occurred");
}

export default GET;