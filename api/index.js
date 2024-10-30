// module imports
import express from "express";

// script imports
import { searchBooksBy } from "../public/scripts/serverFetch.js";

const port = 5000;
const app = express();

app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/api/", (request, response) => {

    const searchBy = request.query.searchby;
    const searchValue = request.query.value;

    console.log(searchBy, searchValue);

    if (["title", "author", "category"].includes(searchBy)) {
        searchBooksBy(searchBy, RegExp("^"+searchValue, "i")).then(
            (result) => {
                console.log(result);
                response.status(200).json(result);
            }
        )
    }
})

app.listen(port, () => {console.log(`Server listening on port: ${port}`)});