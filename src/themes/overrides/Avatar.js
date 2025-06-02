// project imports
import { AvatarSize } from 'enum';

const colors = ['primary', 'secondary', 'success', 'error', 'warning', 'info'];

// ==============================|| AVATAR - SIZE ||============================== //

const avatarSizes = () => ({
  [AvatarSize.BADGE]: { width: 28, height: 28 },
  [AvatarSize.XS]: { width: 34, height: 34 },
  [AvatarSize.SM]: { width: 40, height: 40 },
  [AvatarSize.MD]: { width: 60, height: 60 },
  [AvatarSize.LG]: { width: 72, height: 72 },
  [AvatarSize.XL]: { width: 82, height: 82 }
});

// ==============================|| OVERRIDES - AVATAR ||============================== //

export default function Avatar(theme) {
  const sizeVariants = () => {
    const styles = avatarSizes();

    return Object.values(AvatarSize).map((size) => ({
      props: { size },
      style: styles[size]
    }));
  };

  const colorVariants = colors.map((color) => {
    const paletteColor = theme.palette[color];

    return {
      props: { color },
      style: {
        color: theme.palette.background.paper,
        backgroundColor: paletteColor.main
      }
    };
  });

  return {
    MuiAvatar: {
      defaultProps: {
        color: 'default' // Set the default color here
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { color: 'default' },
              style: {
                color: theme.palette.background.paper,
                backgroundColor: theme.palette.grey[500]
              }
            },
            ...colorVariants,
            ...sizeVariants(),
            {
              props: { type: 'outlined' },
              style: ({ color }) => {
                const paletteColor = color ? theme.palette[color] : null;

                return {
                  border: `2px solid ${paletteColor ? paletteColor.main : theme.palette.grey[500]}`,
                  backgroundColor: 'transparent',
                  color: paletteColor ? paletteColor.main : theme.palette.grey[500]
                };
              }
            }
          ]
        }
      }
    }
  };
}
