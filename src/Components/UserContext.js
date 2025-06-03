import React, { createContext, useState, useEffect, useContext } from 'react';
import { supabase } from '../supabaseClient';

export const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    isSignedUp: false,
    name: "",
    email: "",
    id: null,
    preferences: null,
    profile: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (signed in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      setUser({
        isSignedUp: false,
        name: "",
        email: "",
        id: null,
        preferences: null,
        profile: null
      });
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
}; 