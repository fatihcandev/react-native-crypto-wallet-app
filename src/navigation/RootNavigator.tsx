import React, { useCallback, useContext, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AUTH_SUCCESS, AUTH_FAIL, AppContext } from 'context';
import { Loading } from 'components';
import { PreAuthNavigator } from './PreAuth';
import { BottomTabNavigator } from './BottomTab';

const RootNavigator = () => {
  const { state, dispatch } = useContext(AppContext);
  const { authLoading, isLoggedIn } = state;

  const getToken = useCallback(async () => {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken !== null) {
        dispatch({
          type: AUTH_SUCCESS,
        });
      } else {
        dispatch({
          type: AUTH_FAIL,
        });
      }
    } catch (error) {
      console.warn(error);
    }
  }, [dispatch]);

  useEffect(() => {
    getToken();
  }, [getToken]);

  return authLoading ? (
    <Loading />
  ) : (
    <NavigationContainer>
      {isLoggedIn ? <BottomTabNavigator /> : <PreAuthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;
