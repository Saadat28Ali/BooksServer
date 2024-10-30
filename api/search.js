// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

function GET(request, response) {
    response.status(200).send("Hello");
}

export default GET;