// assets
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';
import LocalMallTwoToneIcon from '@mui/icons-material/LocalMallTwoTone';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';

export const revenueCardData = [
  {
    title: 'Revenue',
    value: '$42,562',
    content: '$50,032 Last Month',
    iconPrimary: MonetizationOnTwoToneIcon,
    color: 'warning.main',
    fullWidth: true
  },
  {
    title: 'Orders Received',
    value: '486',
    content: '20% Increase',
    iconPrimary: AccountCircleTwoTone,
    color: 'primary.main',
    fullWidth: false
  },
  {
    title: 'Total Sales',
    value: '1641',
    content: '$1,055 Revenue Generated',
    iconPrimary: LocalMallTwoToneIcon,
    color: 'success.main',
    fullWidth: false
  }
];
