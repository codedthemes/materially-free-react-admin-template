import { useMemo } from 'react';
import useSWR, { mutate } from 'swr';

const endpoints = {
  key: 'snackbar'
};

const initialState = {
  action: false,
  open: false,
  message: 'Note archived',
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
  alert: { severity: 'success', variant: 'filled' },
  variant: 'default',
  transition: 'Fade',
  close: false
};

export function useGetSnackbar() {
  const { data } = useSWR(endpoints.key, () => initialState, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });

  const memoizedValue = useMemo(() => ({ snackbar: data }), [data]);

  return memoizedValue;
}

export function openSnackbar(snackbar) {
  // to update local state based on key

  const { action, open, message, anchorOrigin, alert, variant, transition, close } = snackbar;

  mutate(
    endpoints.key,
    (currentSnackbar) => {
      return {
        ...currentSnackbar,
        action: action || initialState.action,
        open: open || initialState.open,
        message: message || initialState.message,
        anchorOrigin: anchorOrigin || initialState.anchorOrigin,
        alert: {
          severity: alert?.severity || initialState.alert.severity,
          variant: alert?.variant || initialState.alert.variant
        },
        variant: variant || initialState.variant,
        transition: transition || initialState.transition,
        close: close || initialState.close
      };
    },
    false
  );
}

export function closeSnackbar() {
  mutate(
    endpoints.key,
    (currentSnackbar) => {
      const resolvedSnackbar = currentSnackbar || initialState; // Fallback to initialState if undefined

      return { ...resolvedSnackbar, open: false };
    },
    false
  );
}
