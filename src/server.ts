import {
    createServer,
    IncomingMessage,
    ServerResponse

} from "node:http"

/**
 * The port on which the server is supposed to run
 */
const PORT = 3000

// Active the server on PORT
createServer(function (req: IncomingMessage, res: ServerResponse): void{
    // Set headers, and status code 200
    res.writeHead(200, {'Content-Type': 'text/plain'})
    // Ending the response with end()
    res.end('Hello World!')
    console.log(req)
    
}).listen(PORT, function(){console.log(`[INFO][server]: is start on port ${PORT}`)})