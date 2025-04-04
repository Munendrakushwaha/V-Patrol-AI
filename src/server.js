// src/server.js
import app from './app.js';
import { config } from './config.js'; // Import the config

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));