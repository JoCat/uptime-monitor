import { Box, Divider, Link, Typography } from '@mui/material';

export function Footer() {
  return (
    <Box mt={5}>
      <Divider variant="middle" />
      <Typography variant="body2" textAlign="center" my={2}>
        Built with
        {` `}
        <Link
          href="https://github.com/JoCat/uptime-monitor"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Uptime Monitor
        </Link>
      </Typography>
    </Box>
  );
}
