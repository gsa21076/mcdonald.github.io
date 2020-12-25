import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyB9F0AhIMghWDpLmljK5Ph_J_AJSdqdJcg",
  authDomain: "mrdonalds-e4415.firebaseapp.com",
  databaseURL: "https://mrdonalds-e4415-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-e4415",
  storageBucket: "mrdonalds-e4415.appspot.com",
  messagingSenderId: "40764490606",
  appId: "1:40764490606:web:65dcdee8e76d9ea27cb77f"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth),
    openItem = useOpenItem(),
    order = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...order} {...openItem} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem}{...order} />}
    </>

  );
}

export default App;
