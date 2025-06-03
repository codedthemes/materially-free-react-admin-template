import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// project imports
import { APP_DEFAULT_PATH } from 'config';
import menuItems from 'menu-items';

//assets
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';

const homeBreadcrumb = { title: 'Home', url: APP_DEFAULT_PATH, icon: HomeTwoToneIcon };
const flexStyle = { display: 'flex', alignItems: 'center', gap: 0.5 };

// ==============================|| BREADCRUMBS ||============================== //

export default function Breadcrumbs({ data, divider = true, title, icons = false, sx, ...rest }) {
  const location = useLocation();

  const [breadcrumbItems, setBreadcrumbItems] = useState([]);
  const [activeItem, setActiveItem] = useState();

  useEffect(() => {
    if (data?.length) {
      dataHandler(data);
    } else {
      for (const menu of menuItems?.items ?? []) {
        if (menu.type && menu.type === 'group') {
          const matchedParents = findParentElements(menu.children || [], location.pathname);
          dataHandler(matchedParents || []);
          if (matchedParents) break;
        }
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, location]);

  const dataHandler = (data) => {
    const filtered = data;
    // display breadcrumbs if breadcrumbs is set to false
    // const filtered = data.filter((item) => item.breadcrumbs !== false);
    const active = filtered.at(-1);
    const linkItems = filtered.slice(0, -1);
    if (active && active.url != homeBreadcrumb.url) {
      const home = { ...homeBreadcrumb };
      linkItems.unshift(home);
    }
    setActiveItem(active);
    setBreadcrumbItems(linkItems);
  };

  function findParentElements(navItems, targetUrl, parents = []) {
    for (const item of navItems) {
      // Add the current item to the parents array
      const newParents = [...parents, item];

      // Check if the current item matches the target URL
      if (item.url && item.url === targetUrl && targetUrl.includes(item.url)) {
        return newParents; // Return the array of parent elements
      }

      // If the item has children, recurse into them
      if (item.children) {
        const result = findParentElements(item.children, targetUrl, newParents);
        if (result) {
          return result; // Return the result if found in children
        }
      }
    }

    return null; // Return null if no match is found
  }

  if (!activeItem || activeItem.breadcrumbs === false) {
    return null;
  }

  function CoreBreadcrumb() {
    return (
      <Stack>
        <MuiBreadcrumbs aria-label="breadcrumb" {...rest}>
          {breadcrumbItems.length &&
            breadcrumbItems.map((item, index) => (
              <Typography
                {...(item.url && { component: Link, to: item.url })}
                variant="subtitle2"
                color="text.primary"
                sx={{
                  fontSize: '0.75rem',
                  textDecoration: 'none',
                  ...(item.url && { cursor: 'pointer', ':hover': { color: 'primary.main' } }),
                  ...flexStyle
                }}
                key={index}
              >
                {icons && item.icon && <item.icon />} {item.title}
              </Typography>
            ))}
          {activeItem && (
            <Typography variant="subtitle2" color="primary" sx={{ fontSize: '0.75rem', ...(icons && activeItem.icon && flexStyle) }}>
              {icons && activeItem.icon && <activeItem.icon />}
              {activeItem.title}
            </Typography>
          )}
        </MuiBreadcrumbs>

        <Typography variant="h3" sx={{ fontWeight: 500, mt: 1 }}>
          {title || activeItem?.title}
        </Typography>
      </Stack>
    );
  }

  return (
    <Stack>
      <CoreBreadcrumb />
      {divider && <Divider sx={{ mb: 3, mt: 2 }} />}
    </Stack>
  );
}

Breadcrumbs.propTypes = {
  data: PropTypes.array,
  divider: PropTypes.bool,
  title: PropTypes.string,
  icons: PropTypes.bool,
  sx: PropTypes.any,
  rest: PropTypes.any
};
