import React, { useState } from 'react';
import UrlInputForm from '../components/UrlInputForm';
import UrlStatsTable from '../components/UrlStatsTable';
import { Container } from '@mui/material';

export default function ShortenerPage() {
  const [stats, setStats] = useState([]);

  const handleShorten = (results) => {
    const newStats = results.map((r) => ({
      shortUrl: r.shortUrl,
      originalUrl: r.originalUrl,
      expiry: r.expiry,
      clicks: 0,
    }));
    setStats([...stats, ...newStats]);
  };

  return (
    <Container>
      <UrlInputForm onShorten={handleShorten} />
      <UrlStatsTable stats={stats} />
    </Container>
  );
}
