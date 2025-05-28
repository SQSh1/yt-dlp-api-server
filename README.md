
🎬 yt-dlp API Server
This is a simple API server built with Node.js and Express that integrates the functionality of yt-dlp to extract video information and available formats from YouTube links.

✨ Features

- Retrieve detailed information about YouTube videos.  
- Fetch available formats (video and audio) for any YouTube URL.  
- Support for multiple formats, including MP4, WebM, and various audio formats.


📋 Prerequisites
Ensure the following are installed before setting up:

- Node.js (version 16 or higher)  
- yt-dlp (installed globally via npm install -g yt-dlp or equivalent)


📥 Installation

1. **Clone the Repository**  
Clone this repository to your local machine:  
```bash
git clone https://github.com/your-username/yt-dlp-api-server.git
cd yt-dlp-api-server
```

2. **Install Dependencies**  
Install the required Node.js packages:  
```bash
npm install
```

3. **Configure Environment Variables**  
Create a .env file in the root directory and add any necessary environment variables (e.g., port number or API keys if needed).

Example .env:
```text
PORT=3000
```

4. **Start the Server**  
Run the server with:  
```bash
npm start
```
The server will start at http://localhost:3000.

🚀 API Endpoints

- **GET /info**  
Returns the API version information.

Response:
```json
{
  "version": "1.0.0"
}
```

- **GET /formats?url={youtube-url}**  
Retrieves available formats for a given YouTube video URL.

Example Usage:  
GET /formats?url=https://www.youtube.com/watch?v=dQw4w9WgXcQ

Response:  
```json
{
  "formats": [
    {
      "itag": "22",
      "quality": "720p",
      "url": "https://video-url.com"
    },
    {
      "itag": "140",
      "quality": "audio",
      "url": "https://audio-url.com"
    }
  ]
}
```

📜 License
# .[MIT License](https://github.com/SQSh1/yt-dlp-api-server/blob/main/License)

⭐ Support
If you find this project helpful, please give it a ⭐ on GitHub and share it with your friends! 🌟
