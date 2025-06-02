import PropTypes from 'prop-types';

// material-ui
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import MainCard from './MainCard';

// ==============================|| FLAT CARD ||============================== //

export default function SmallFlatCard({ items }) {
  return (
    <MainCard content={false}>
      <Grid
        container
        spacing={0}
        sx={(theme) => {
          const cols = { xs: 1, sm: 3, lg: 6 }; // Number of columns per row at each breakpoint
          return {
            alignItems: 'center',
            '& > *': { borderLeft: 1, borderBottom: 1, borderColor: 'divider' },
            // Remove left border for the first item in each row
            [`& > *:nth-of-type(${cols.xs}n + 1)`]: {
              [theme.breakpoints.down('sm')]: { borderLeft: 'none' }
            },
            [`& > *:nth-of-type(${cols.sm}n + 1)`]: {
              [theme.breakpoints.between('sm', 'lg')]: { borderLeft: 'none' }
            },
            [`& > *:nth-of-type(${cols.lg}n + 1)`]: {
              [theme.breakpoints.up('lg')]: { borderLeft: 'none' }
            },
            // Remove bottom border for last row
            [`& > *:nth-last-of-type(-n+${cols.xs})`]: {
              [theme.breakpoints.down('sm')]: { borderBottom: 'none' }
            },
            [`& > *:nth-last-of-type(-n+${cols.sm})`]: {
              [theme.breakpoints.between('sm', 'lg')]: { borderBottom: 'none' }
            },
            [`& > *:nth-last-of-type(-n+${cols.lg})`]: {
              [theme.breakpoints.up('lg')]: { borderBottom: 'none' }
            }
          };
        }}
      >
        {items.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: item.type === 'dashboard' ? 6 : 4, lg: item.type === 'dashboard' ? 6 : 2 }} sx={{ p: 3 }}>
            <Stack direction="row" sx={{ alignItems: 'center', justifyContent: { xs: 'flex-start', sm: 'space-between' }, gap: 1 }}>
              <Typography variant="subtitle2">{item.label}</Typography>
              <Typography variant="h5" sx={{ color: item.color }}>
                {item.value}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </MainCard>
  );
}

SmallFlatCard.propTypes = { items: PropTypes.object };
