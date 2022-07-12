import {
  Alert,
  Container,
  Divider,
  Paper,
  Stack,
  Typography,
} from '@mui/material';

import { Resource } from '../components/Resource';

const range = 90;

export function Index() {
  return (
    <Container>
      <Alert
        sx={{
          my: 4,
        }}
        severity="success"
        variant="filled"
      >
        All Systems Operational
      </Alert>

      <Typography textAlign={'right'} mb={1} variant="body2">
        Uptime over the past {range} days
      </Typography>
      <Paper variant="outlined">
        <Stack spacing={2} p={2} divider={<Divider />}>
          <Resource title="jocat.ru" range={range} />
          <Resource title="log.jocat.ru" range={range} />
          <Resource title="mine-dev.ru" range={range} />
        </Stack>
      </Paper>
    </Container>
  );
}
