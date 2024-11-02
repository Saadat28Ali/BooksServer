// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

async function GET(request, response) {

    const searchBy = request.query.searchby;
    const searchValue = request.query.value;
    const pageNo = parseInt(request.query.pageno);
    const pageSize = parseInt(request.query.pagesize);

    let result = null;
    if (["title", "author", "category"].includes(searchBy)) {

        result = await searchBooksBy(searchBy, RegExp("^"+searchValue, "i"), pageNo, pageSize);
        return response.status(200).send(result);
    }
    return response.status(200).send("The api is working");
}

export default GET;