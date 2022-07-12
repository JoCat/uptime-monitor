import { Box, Chip, Paper, Stack, Typography } from '@mui/material';

interface Props {
  /**
   * Days count
   * @default 90
   */
  range?: number;
  /**
   * Recomended size for the chip.
   * 1-2: for 30 days
   * 1-5: for 60 / 90 days
   * @default 5
   */
  size?: number;
  /**
   * Resource title
   */
  title: string;
}

const Dot = ({ size = 5 }: Pick<Props, 'size'>) => {
  return (
    <Box
      sx={{
        backgroundColor: 'success.main',
      }}
      width="100%"
      height={`${size * 0.5}rem`}
      borderRadius={4}
    ></Box>
  );
};

export function Resource({ range = 90, size = 5, title }: Props) {
  return (
    <Paper sx={{ p: 2 }}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">{title}</Typography>
        <Chip label="Operational" color="success" variant="outlined" />
      </Box>
      <Stack direction="row" spacing={0.5} pt={2}>
        {Array(range)
          .fill({})
          .map((_, i) => (
            <Dot key={i} size={size} />
          ))}
      </Stack>
    </Paper>
  );
}
