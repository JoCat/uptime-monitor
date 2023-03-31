import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@mui/material';

import { useUser } from '../../hooks/useUser';
import logo from '../../logo.png';

export function Login() {
  const { login } = useUser();

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const username = data.get('username') as string;
    const password = data.get('password') as string;
    const response = await login(username, password);
    try {
      await login(username, password);
    } catch (error) {
      console.error(error);
      // Swal.fire(error, '', 'error');
    }
  };

  return (
    <Container>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <form onSubmit={onSubmit}>
          <Paper
            sx={{
              display: 'flex',
              flexDirection: 'column',
              padding: '2rem',
              minWidth: '300px',
            }}
          >
            <img src={logo} width="150px" style={{ margin: 'auto' }} />
            <Typography
              variant="h3"
              fontWeight={300}
              component="h1"
              textAlign="center"
              my={2}
            >
              Login
            </Typography>
            <TextField
              fullWidth
              sx={{ my: 2 }}
              size="small"
              label="Username"
              variant="standard"
              name="username"
              type="text"
              required
            />
            <TextField
              fullWidth
              sx={{ my: 2 }}
              size="small"
              label="Password"
              variant="standard"
              name="password"
              type="password"
              required
            />
            <Button type="submit" sx={{ mt: 4 }} size="large">
              Login
            </Button>
          </Paper>
        </form>
      </Box>
    </Container>
  );
}
