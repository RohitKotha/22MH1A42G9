import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { validateUrl } from '../utils/validators';
import { shortenUrl } from '../services/api';
import { useAppLogger } from './LoggerProvider';

export default function UrlInputForm({ onShorten }) {
  const [urls, setUrls] = useState([""]);
  const logger = useAppLogger();

  const handleInputChange = (i, value) => {
    const newUrls = [...urls];
    newUrls[i] = value;
    setUrls(newUrls);
  };

  const handleSubmit = async () => {
    for (let url of urls) {
      if (!validateUrl(url)) {
        logger.error('Invalid URL:', url);
        return;
      }
    }
    try {
      const results = await Promise.all(urls.map(url => shortenUrl(url)));
      onShorten(results);
    } catch (err) {
      logger.error('Shortening failed', err);
    }
  };

  return (
    <Box>
      <Typography variant="h6">Enter up to 5 URLs:</Typography>
      {urls.map((url, index) => (
        <TextField
          key={index}
          label={`URL ${index + 1}`}
          value={url}
          onChange={(e) => handleInputChange(index, e.target.value)}
          fullWidth
          margin="normal"
        />
      ))}
      {urls.length < 5 && (
        <Button onClick={() => setUrls([...urls, ""])}>+ Add another</Button>
      )}
      <Button variant="contained" onClick={handleSubmit}>
        Shorten URLs
      </Button>
    </Box>
  );
}
