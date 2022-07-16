express has get method which takes two arguments ("url" and callbackfunction)
the call back function then takes two arguments request and response(req,res)


# listen function : accepts two arguments one is port and another is callback function

# Morgan is HTTP request logger middleware for node.js
* Create a new morgan logger middleware function using the given format and options. The format argument may be a string of a predefined name (see below for the names), a string of a format string, or a function that will produce a log entry.

The format function will be called with three arguments tokens, req, and res, where tokens is an object with all defined tokens, req is the HTTP request and res is the HTTP response. The function is expected to return a string that will be the log line, or undefined / null to skip logging.

its has method called use which executes the middleware we made , app.use (middlewarename )