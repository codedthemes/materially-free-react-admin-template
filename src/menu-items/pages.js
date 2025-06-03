// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import ChromeReaderModeOutlinedIcon from '@mui/icons-material/ChromeReaderModeOutlined';
import TranslateIcon from '@mui/icons-material/Translate';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import HourglassEmptyRoundedIcon from '@mui/icons-material/HourglassEmptyRounded';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const icons = {
  NavigationOutlinedIcon,
  ChromeReaderModeOutlinedIcon,
  TranslateIcon,
  SecurityOutlinedIcon,
  MonetizationOnOutlinedIcon,
  ErrorOutlineRoundedIcon,
  HourglassEmptyRoundedIcon,
  HelpOutlineOutlinedIcon
};

// ==============================|| MENU ITEMS - PAGES ||============================== //

const pages = {
  id: 'pages',
  title: 'pages',
  caption: 'prebuild-pages',
  type: 'group',
  icon: icons.NavigationOutlinedIcon,
  children: [
    {
      id: 'sample-page',
      title: 'Sample Page',
      type: 'item',
      url: '/sample-page',
      icon: icons.ChromeReaderModeOutlinedIcon
    },
    {
      id: 'auth',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.SecurityOutlinedIcon,
      children: [
        {
          id: 'login-1',
          title: 'login',
          type: 'item',
          url: '/pages/auth/login',
          target: '_blank'
        },
        {
          id: 'register',
          title: 'register',
          type: 'item',
          url: '/pages/auth/register',
          target: '_blank'
        }
      ]
    },
    {
      id: 'documentation',
      title: 'Documentation',
      type: 'item',
      url: 'https://codedthemes.gitbook.io/materially-react-material-documentation/',
      icon: icons.HelpOutlineOutlinedIcon,
      chip: {
        label: 'Help?',
        color: 'primary'
      },
      external: true,
      target: '_blank'
    }
  ]
};

export default pages;
