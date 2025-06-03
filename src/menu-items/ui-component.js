// assets
import HardwareOutlinedIcon from '@mui/icons-material/HardwareOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import FontDownloadIcon from '@mui/icons-material/FontDownload';

// ==============================|| MENU ITEMS - UI COMPONENT ||============================== //

const uiComponent = {
  id: 'utils',
  title: 'utils',
  type: 'group',
  icon: HardwareOutlinedIcon,
  children: [
    {
      id: 'util-icons',
      title: 'Icons',
      type: 'item',
      url: 'https://mui.com/material-ui/material-icons/',
      icon: AppsOutlinedIcon,
      external: true,
      target: '_blank'
    },
    {
      id: 'typography',
      title: 'Typography',
      type: 'item',
      url: '/components/typography',
      icon: FontDownloadIcon
    }
  ]
};

export default uiComponent;
