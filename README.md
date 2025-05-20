# yt-dlp API Server

This is a simple API server built with Node.js and Express that integrates the functionality of yt-dlp to extract video information and formats from YouTube links.

## Features

- Extract YouTube video information.
- Get available formats (video and audio) for any given YouTube URL.
- Supports multiple formats including MP4, WebM, and audio formats.

## Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v16 or higher)
- [yt-dlp](https://github.com/yt-dlp/yt-dlp) (installed globally)

### Installation

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/your-username/yt-dlp-api-server.git
    cd yt-dlp-api-server
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add any required environment variables.

4. Start the server:

    ```bash
    npm start
    ```

   The server will now be running at `http://localhost:3000`.

## API Endpoints

### `GET /info`

Returns API version information.

Example response:

```json
{
  "version": "1.0.0"
}
Run the server with: 

npm start 

The server will start at http://localhost:3000.

🚀 API Endpoints

GET /info

Returns the API version information.

Response: { "version": "1.0.0" } 

GET /formats?url={youtube-url}

Retrieves available formats for a given YouTube video URL.

Example Usage: 

GET /formats?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ 

Response: 

{ "formats": [ { "itag": "22", "quality": "720p", "url": "https://video-url.com" }, { "itag": "140", "quality": "audio", "url": "https://audio-url.com" } ] } 

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

⭐ Support

If you find this project helpful, please give it a ⭐ on GitHub and share it with your friends! 🌟

