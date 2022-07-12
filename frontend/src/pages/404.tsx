import { Box, Link, Typography } from '@mui/material';

export function Page404() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Typography variant="h1" component="span">
        404
      </Typography>
      <Typography variant="h4" component="h1" my={2}>
        Page not found
      </Typography>
      <Link
        href="/"
        underline="none"
        variant="overline"
        sx={{
          '&:hover': {
            color: 'primary.light',
          },
        }}
      >
        Go to homepage
      </Link>
    </Box>
  );
}
