# API use case

    BASE_URL = 'http(s)://api.skirmesh.net/resources/ 
    
URL extensions are guided by the table desired.  (e.g. device, users, playerProfile, etc.)

# GET (SELECT) requests

Use HTML arguments to query desired parameters.

    api.skirmesh.net/resources/device?address=0013A200418D31A4 
    
Passing unique attributes will result in unique queries (singular results).
Passing no parameters will return the full table.
Passing multiple parameters to narrow results to a single row will return a list.

# POST (INSERT) / PUT (UPDATE) requests

Use the base URL, but pass arguments as data under the JSON tag. This is due to passing booleans that do not convert directly otherwise.  (i.e. True != true)

All returned objects are in JSON format.

