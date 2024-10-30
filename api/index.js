// module imports
import express from "express";

// script imports
import {searchBooksBy} from "../public/scripts/serverFetch.js";

const port = 5000;
const app = express();

app.get("/api/", (request, response) => {

    const searchBy = request.query.searchby;
    const searchValue = request.query.value;

    console.log(searchBy, searchValue);

    if (["title", "author", "category"].includes(searchBy)) {
        searchBooksBy(searchBy, RegExp("^"+searchValue, "i")).then(
            (result) => {
                console.log(result);
            }
        )
    }

    response.send("This is the home");
})

app.listen(port, () => {console.log(`Server listening on port: ${port}`)});