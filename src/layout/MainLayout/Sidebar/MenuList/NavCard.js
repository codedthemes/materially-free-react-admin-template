// material-ui
import { Button, Card, CardMedia, CardContent, Link, Stack, Typography } from '@mui/material';

// assets
import avatar from 'assets/images/sidebar.png';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => {
  return (
    <Card sx={{ bgcolor: 'rgb(250, 250, 250)', border: '1px solid rgb(230, 235, 241)', m: 2 }}>
      <CardContent>
        <Stack alignItems="center" spacing={2.5}>
          <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
          <Stack alignItems="center">
            <Typography variant="h5">Materially Pro</Typography>
            <Typography variant="h6" color="secondary" textAlign="center">
              Checkout Materially Premium Features
            </Typography>
          </Stack>
          <Button
            component={Link}
            target="_blank"
            href="https://codedthemes.com/item/materially-reactjs-admin-dashboard/?utm_source=free_demo&utm_medium=codedthemes&utm_campaign=button_download_premium"
            variant="contained"
            color="primary"
            size="small"
          >
            Download Premium
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default NavCard;
