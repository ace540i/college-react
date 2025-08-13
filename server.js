const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
Update your `package.json` scripts:**

```json
"scripts": {
  "start": "node server.js",
  "build": "react-scripts build",
  "postinstall": "npm run build",
  "test": "react-scripts test --env=jsdom",
  "eject": "react-scripts eject"
}
