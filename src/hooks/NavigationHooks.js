/* eslint-disable import/prefer-default-export */
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

export const useCustomBackAction = (navigation, handleBack) => {
  useEffect(() => {
    const focusSubscription = navigation.addListener('didFocus', () => (
      BackHandler.addEventListener('hardwareBackPress', handleBack)
    ));

    const blurSubscription = navigation.addListener('willBlur', () => (
      BackHandler.removeEventListener('hardwareBackPress', handleBack)
    ));

    return () => {
      focusSubscription.remove();
      blurSubscription.remove();
    };
  }, [navigation, handleBack]);
};
