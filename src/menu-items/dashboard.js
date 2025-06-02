// assets
import NavigationOutlinedIcon from '@mui/icons-material/NavigationOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'materially',
  caption: 'Dashboard',
  icon: NavigationOutlinedIcon,
  type: 'group',
  children: [
    {
      id: 'dashboards',
      title: 'Dashboard',
      type: 'item',
      icon: HomeOutlinedIcon,
      url: '/dashboard/default',
      breadcrumbs: false
    }
  ]
};

export default dashboard;
