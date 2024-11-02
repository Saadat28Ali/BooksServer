![Static Badge](https://img.shields.io/badge/Node-JS-green)
![Static Badge](https://img.shields.io/badge/Mongo-DB-brown)


# BooksServer
A Nodejs server for accessing a books database powered by MongoDB.

# Usage
Query an online instance using a HTTP GET request that follows the following format
```
<Server Address>/api/search?searchby=<Field to search by>&value=<Value to match in the field>&pageno=<Page no>&pagesize=<Page size>
```
- The fields that can be used for searching are Title, Author and Category
- Page no and page size are used for pagination in frontend apps. Here they can be used for skipping and limiting
-- To skip 's' number of entries, put pageno = 1 and pagesize = s
-- To limit the result to 'l' number of entries, put pagesize = l

# Technologies used
- NodeJS
- MongoDB
