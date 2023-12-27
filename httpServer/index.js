const http = require("http");

//creating a server
const server = http.createServer((req, res) => {
  //console.log(req.url);

  if (req.url == "/") {
    res.end("hello madam  home");
  } else if (req.url == "/about") {
    res.end("hello madam about");
  } else if (req.url == "/contact") {
    res.end("hello madam contact");
  } else
  {
      res.writeHead(404, {"content-type" : "text/html"} );
      res.end("<h1>error 404</h1>");
    }
});

//assiging a port
server.listen(5000, "127.0.0.1", () => {
  console.log(" iam at to the port 5000");
});
