// third party
import { merge } from 'lodash-es';

// project imports
import Avatar from './Avatar';
import CardActions from './CardActions';
import CardContent from './CardContent';
import CardHeader from './CardHeader';
import Checkbox from './Checkbox';
import Chip from './Chip';
import FormHelperText from './FormHelperText';
import ListItem from './ListItem';
import ListItemButton from './ListItemButton';
import ListItemIcon from './ListItemIcon';
import Paper from './Paper';
import Popper from './Popper';
import SvgIcon from './SvgIcon';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Avatar(theme),
    CardActions(),
    CardContent(),
    CardHeader(theme),
    Checkbox(theme),
    Chip(theme),
    FormHelperText(theme),
    ListItem(theme),
    ListItemButton(theme),
    ListItemIcon(theme),
    Paper(theme),
    Popper(theme),
    SvgIcon()
  );
}
