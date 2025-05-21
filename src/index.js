const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('🟢 API is live!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const { exec } = require('child_process');

app.get('/formats', (req, res) => {
  const videoUrl = req.query.url;
  if (!videoUrl) {
    return res.status(400).json({ error: 'Missing URL parameter' });
  }

  exec(`yt-dlp -J "${videoUrl}"`, (error, stdout, stderr) => {
    if (error) {
      return res.status(500).json({ error: 'Failed to fetch formats', details: stderr });
    }

    try {
      const data = JSON.parse(stdout);
      const formats = data.formats.map(f => ({
        itag: f.format_id,
        ext: f.ext,
        quality: f.quality_label || f.abr || 'unknown',
        url: f.url
      }));
      res.json({ title: data.title, formats });
    } catch (err) {
      res.status(500).json({ error: 'Failed to parse yt-dlp output' });
    }
  });
});
