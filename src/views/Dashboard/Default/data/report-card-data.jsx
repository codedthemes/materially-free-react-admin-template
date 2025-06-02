// assets
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MonetizationOnTwoToneIcon from '@mui/icons-material/MonetizationOnTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export const reportCardData = [
  {
    counter: '$30200',
    title: 'All Earnings',
    color: 'warning.main',
    footerData: '10% changes on profit',
    iconPrimary: MonetizationOnTwoToneIcon,
    iconFooter: TrendingUpIcon,
    coloredIcon: true
  },
  {
    counter: '145',
    title: 'Task',
    color: 'error.main',
    footerData: '28% task performance',
    iconPrimary: CalendarTodayOutlinedIcon,
    iconFooter: TrendingDownIcon,
    coloredIcon: true
  },
  {
    counter: '290+',
    title: 'Page Views',
    color: 'success.main',
    footerData: '10k daily views',
    iconPrimary: DescriptionOutlinedIcon,
    iconFooter: TrendingUpIcon,
    coloredIcon: true
  },
  {
    counter: '500',
    title: 'Downloads',
    color: 'primary.main',
    footerData: '1k download in App store',
    iconPrimary: ThumbUpAltTwoToneIcon,
    iconFooter: TrendingUpIcon,
    coloredIcon: true
  }
];
