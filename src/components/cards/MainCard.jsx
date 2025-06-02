import PropTypes from 'prop-types';
import { useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Divider from '@mui/material/Divider';

// project imports
import { CardVariant } from 'enum';

function MainCard({
  title,
  content = true,
  actions,
  headerAction,
  headerDivider = true,
  headerSX = {},
  actionsDivider = true,
  contentSX = {},
  cardActionsSX = {},
  children,
  variant = { type: CardVariant.DEFAULT },
  sx = {},
  ref,
  ...others
}) {
  const theme = useTheme();

  const cardColors = useMemo(
    () => ({
      primary: theme.palette.primary.main,
      secondary: theme.palette.secondary.main,
      error: theme.palette.error.main,
      warning: theme.palette.warning.main,
      info: theme.palette.info.main,
      success: theme.palette.success.main
    }),
    [theme]
  );

  function CardDivider() {
    return (
      <Divider
        sx={{
          ...(variant &&
            (variant.type === CardVariant.FILLED
              ? { borderColor: 'unset' }
              : variant.type === CardVariant.OUTLINED && variant.color && { borderColor: cardColors[variant.color] }))
        }}
      />
    );
  }

  return (
    <Card
      ref={ref}
      {...(variant && variant.type === CardVariant.OUTLINED && { variant: 'outlined' })}
      sx={{
        ...(variant &&
          (variant.type === CardVariant.FILLED
            ? { bgcolor: cardColors[variant.color || 'primary'], color: 'common.white' }
            : variant.type === CardVariant.OUTLINED && variant.color && { borderColor: cardColors[variant.color] })),
        ...sx
      }}
      {...others}
    >
      {title && (
        <>
          <CardHeader
            title={title}
            {...(headerAction && { action: headerAction })}
            sx={{
              ...(variant && variant.type === CardVariant.FILLED && { '.MuiCardHeader-title': { color: 'common.white' } }),
              ...headerSX
            }}
          />
          {headerDivider && <CardDivider />}
        </>
      )}

      {/* card content */}
      {content ? <CardContent sx={contentSX}>{children}</CardContent> : children}

      {/* card actions */}
      {actions && (
        <>
          {actionsDivider && <CardDivider />}
          <CardActions sx={cardActionsSX}>{actions}</CardActions>
        </>
      )}
    </Card>
  );
}

export default MainCard;

MainCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  content: PropTypes.bool,
  actions: PropTypes.node,
  headerAction: PropTypes.any,
  headerDivider: PropTypes.bool,
  headerSX: PropTypes.object,
  actionsDivider: PropTypes.bool,
  contentSX: PropTypes.object,
  cardActionsSX: PropTypes.object,
  children: PropTypes.any,
  variant: PropTypes.object,
  sx: PropTypes.object,
  ref: PropTypes.object,
  others: PropTypes.any
};
