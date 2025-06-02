// material-ui
import Typography from '@mui/material/Typography';

// project imports
import MainCard from 'components/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

export default function SamplePage() {
  return (
    <MainCard title="Sample Page">
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollitanim id est laborum.
      </Typography>
    </MainCard>
  );
}
