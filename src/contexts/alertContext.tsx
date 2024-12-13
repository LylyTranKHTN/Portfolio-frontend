import { Card } from '@components';
import React from 'react';

type AlertStatus = 'success' | 'error';

interface AlertContextType {
  showAlert: (status: AlertStatus, message: string) => void;
  hideAlert: () => void;
}

const AlertContext = React.createContext<AlertContextType | undefined>(
  undefined
);

type AlertAction = {
  type: 'SHOW_ALERT' | 'HIDE_ALERT';
  message?: string;
  status?: AlertStatus;
};

interface AlertState {
  type: 'SHOW_ALERT' | 'HIDE_ALERT';
  status?: AlertStatus;
  message?: string;
}

const alertReducer = (state: AlertState, action: AlertAction): AlertState => {
  switch (action.type) {
    case 'SHOW_ALERT':
      return {
        ...state,
        type: action.type,
        message: action.message,
        status: action.status,
      };
    case 'HIDE_ALERT':
    default:
      return {
        ...state,
        type: action.type,
        message: '',
      };
  }
};

interface AlertProviderProps {
  children: React.ReactNode;
}

const AlertProvider = ({ children }: AlertProviderProps) => {
  const [state, dispatch] = React.useReducer(alertReducer, {
    type: 'HIDE_ALERT',
  });

  // hide alert after 5 seconds
  React.useEffect(() => {
    if (state.message) {
      const timer = setTimeout(() => {
        dispatch({ type: 'HIDE_ALERT' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [state.message]);

  const showAlert = (status: AlertStatus, message: string) => {
    // sroll to top
    window.scrollTo(0, 0);
    dispatch({ type: 'SHOW_ALERT', message, status });
  };

  const hideAlert = () => {
    dispatch({ type: 'HIDE_ALERT' });
  };

  const className =
    state.status === 'success'
      ? 'border-green-500 bg-green-200 text-green-600'
      : 'border-red-600 bg-red-200 text-red-600';

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {state.type === 'SHOW_ALERT' && (
        <Card className={className}>
          <div className="columns-2 flex">
            <span className="w-full">{state.message}</span>
            <button
              className="w-2 h-2 border-none hover:font-extrabold"
              onClick={hideAlert}
            >
              x
            </button>
          </div>
        </Card>
      )}
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = (): AlertContextType => {
  const context = React.useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlert must be used within an AlertProvider');
  }
  return context;
};

export { AlertProvider, useAlert };
