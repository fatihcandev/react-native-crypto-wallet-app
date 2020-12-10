import React, { useCallback, useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { AppContext, AUTH_CHECKED } from 'context';
import { Loading } from 'components';
import { PreAuthNavigator } from './PreAuth';
import { BottomTabNavigator } from './BottomTab';

const RootNavigator = () => {
  const { state, dispatch } = useContext(AppContext);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const { authLoading } = state;

  const checkUser = useCallback(
    (fbUser: FirebaseAuthTypes.User | null) => {
      setUser(fbUser);
      dispatch({
        type: AUTH_CHECKED,
      });
    },
    [dispatch],
  );

  useEffect(() => {
    const listener = auth().onAuthStateChanged(checkUser);
    return () => {
      listener();
    };
  }, [checkUser]);

  return authLoading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      {user !== null ? <BottomTabNavigator /> : <PreAuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
