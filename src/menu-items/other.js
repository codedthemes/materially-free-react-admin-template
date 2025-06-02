// assets
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import BlockOutlinedIcon from '@mui/icons-material/BlockOutlined';

// ==============================|| MENU ITEMS - SUPPORT ||============================== //

const other = {
  id: 'support',
  title: 'support',
  type: 'group',
  icon: ContactSupportOutlinedIcon,
  children: [
    {
      id: 'disabled-menu',
      title: 'disabled-menu',
      type: 'item',
      icon: BlockOutlinedIcon,
      disabled: true
    }
  ]
};

export default other;
