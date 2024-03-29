import React, { createContext, useEffect, useState } from 'react';
import useFetch from '@hooks/useFetch';
import { useAuth } from './AuthProvider';
import { API_ENDPOINT } from '@utils/config';

const NoteContext = createContext({});

function NoteProvider({ children }) {
  const { user } = useAuth();
  const [note, setNote] = useState({ isLoading: true });
  const [startFetching, status, data] = useFetch();

  useEffect(() => {
    if (user) {
      startFetching({
        url: `${API_ENDPOINT}/users/availableNotes`,
      });
    }
  }, [user]);

  useEffect(() => {
    console.log({ note });
    if (data !== null) {
      setNote(data);
    }
  }, [status, data]);

  return <NoteContext.Provider value={note}>{children}</NoteContext.Provider>;
}

function useNote() {
  const context = React.useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useNote must be used within a NoteProvider');
  }

  return context;
}

export { NoteProvider, useNote };
