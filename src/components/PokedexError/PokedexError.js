import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { ERROR } from 'helpers/ScreenParams';
import PokedexHeader from 'components/common/PokedexHeader';

const PokedexError = ({ navigation }) => {
  const error = navigation.getParam(ERROR, '');

  return (
    <View style={styles.container}>
      <PokedexHeader />
      <View style={styles.errorContainer}>
        <Text style={styles.error}>{error}</Text>
      </View>
    </View>
  );
};

PokedexError.propTypes = {
  navigation: PropTypes.object.isRequired,
};

PokedexError.navigationOptions = () => ({
  gesturesEnabled: false,
});

export default PokedexError;
