#!/usr/bin/env python3
"""
Simple HTTP Server for serving files from the current directory.
Run this script in any directory to serve its files via HTTP.

Usage:
    python file_server.py [port]

    port: Optional port number (default is 8000)
"""

import http.server
import socketserver
import os
import sys

def run_server(port=8000):
    """Run a simple HTTP server on the specified port."""
    
    # Set the current directory as the serving directory
    handler = http.server.SimpleHTTPRequestHandler
    
    # Create the server
    with socketserver.TCPServer(("", port), handler) as httpd:
        print(f"Access domcke-lab page at: http://localhost:{port}/domcke-lab.html")
        print(f"Serving files from: {os.getcwd()}")
        print("Press Ctrl+C to stop the server")
        
        try:
            # Keep the server running until interrupted
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopped.")

if __name__ == "__main__":
    # Get port from command line argument if provided
    port = 8000
    if len(sys.argv) > 1:
        try:
            port = int(sys.argv[1])
        except ValueError:
            print(f"Invalid port number: {sys.argv[1]}")
            print("Using default port 8000")
    
    run_server(port)