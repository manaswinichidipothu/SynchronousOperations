
const http = require('http');

const PORT = process.env.PORT || 10000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Synchronous Operations</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background: #f0f4f8;
                    text-align: center;
                    padding: 60px 20px;
                }
                .container {
                    background: white;
                    max-width: 600px;
                    margin: auto;
                    padding: 35px;
                    border-radius: 12px;
                    box-shadow: 0 4px 15px #0002;
                }
                h1 { color: #087f8c; }
                p { color: #444; line-height: 1.7; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Synchronous Operations</h1>
                <p>Welcome to my JavaScript project!</p>
                <h2>Application is running successfully.</h2>
                <p>This website is deployed using Node.js and Render.</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(PORT, '0.0.0.0', () => {
    console.log(`Website running on port ${PORT}`);
});
