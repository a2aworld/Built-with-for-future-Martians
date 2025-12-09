import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all other routes by serving index.html with injected ENV
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  
  fs.readFile(indexPath, 'utf8', (err, htmlData) => {
    if (err) {
      console.error('Error reading index.html', err);
      return res.status(500).send('Server Error');
    }

    // INJECT THE API KEY AT RUNTIME
    // This allows Google Cloud Run environment variables to be passed to the client
    const apiKey = process.env.API_KEY || '';
    
    // Safety check: Don't crash if key is missing, but log warning
    if (!apiKey) {
        console.warn("WARNING: No API_KEY environment variable set!");
    }

    const injectedHtml = htmlData.replace(
      '<!--__ENV__-->',
      `<script>window.env = { API_KEY: "${apiKey}" };</script>`
    );

    res.send(injectedHtml);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Mission Control is active.`);
});