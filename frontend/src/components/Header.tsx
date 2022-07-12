import { Box, Typography } from '@mui/material';

import defaultLogoUrl from '../logo.png';

export function Header({
  logoUrl = defaultLogoUrl,
  backgroundColor = '#170934',
  title = 'Uptime Monitor',
  logoAlt = 'Uptime Monitor',
}) {
  return (
    <Box
      sx={{ backgroundColor }}
      display="flex"
      flexDirection="column"
      height="400px"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      gap="1rem"
    >
      <img src={logoUrl} alt={logoAlt} height="200px" />
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
    </Box>
  );
}
