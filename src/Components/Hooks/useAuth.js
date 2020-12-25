import { useEffect, useState } from 'react';

export function useAuth(authFirebase) {
  const [authentification, setAuthentification] = useState(null);

  const auth = authFirebase();
  const provider = new authFirebase.GoogleAuthProvider();

  const logIn = () => auth.signInWithPopup(provider);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setAuthentification(user);
      }
    });
  }, [authentification]);

  return { authentification, logIn };

}