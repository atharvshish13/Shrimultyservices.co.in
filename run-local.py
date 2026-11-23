from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from threading import Timer
import webbrowser


HOST = "127.0.0.1"
PORT = 8765

server = ThreadingHTTPServer((HOST, PORT), SimpleHTTPRequestHandler)
url = f"http://{HOST}:{PORT}/media.html"
print(f"Serving the media page at {url}. Press Ctrl+C to stop.")
Timer(0.5, webbrowser.open, args=(url,)).start()

try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
