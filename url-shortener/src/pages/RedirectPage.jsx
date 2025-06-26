import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RedirectPage() {
  const { shortcode } = useParams();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('shortened') || '[]');
    const match = stored.find((item) => item.shortcode === shortcode);
    if (match) {
      window.location.href = match.originalUrl;
    } else {
      alert('Short URL not found');
    }
  }, [shortcode]);

  return null;
}
