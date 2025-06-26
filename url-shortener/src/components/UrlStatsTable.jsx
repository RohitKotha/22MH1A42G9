import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';

export default function UrlStatsTable({ stats }) {
  return (
    <>
      <Typography variant="h6" gutterBottom>Shortened URL Stats</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Short URL</TableCell>
            <TableCell>Original URL</TableCell>
            <TableCell>Expiry</TableCell>
            <TableCell>Clicks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stats.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.shortUrl}</TableCell>
              <TableCell>{item.originalUrl}</TableCell>
              <TableCell>{item.expiry || '30 mins default'}</TableCell>
              <TableCell>{item.clicks}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}