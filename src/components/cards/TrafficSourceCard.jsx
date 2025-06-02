import PropTypes from 'prop-types';
// material-ui
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import { GRID_SPACING } from 'config';
import MainCard from './MainCard';

// ==============================|| TRAFFIC SOURCE CARD ||============================== //

export default function TrafficSourceCard({ cardTitle, items }) {
  return (
    <MainCard title={cardTitle}>
      <Stack sx={{ gap: GRID_SPACING }}>
        {items.map((item, index) => (
          <Stack key={index} sx={{ gap: 1 }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
              <Typography variant="body2">{item.label}</Typography>
              <Typography variant="body2" align="right">
                {item.percentage}%
              </Typography>
            </Stack>
            <LinearProgress variant="determinate" aria-label={item.label} value={item.progressValue} color={item.progressColor} />
          </Stack>
        ))}
      </Stack>
    </MainCard>
  );
}

TrafficSourceCard.propTypes = { cardTitle: PropTypes.string, items: PropTypes.object };
