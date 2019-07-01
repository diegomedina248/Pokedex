import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { sizeStyles as styles } from '../styles';
import strings from 'localization';
import { kgToLbs, mToFt } from 'helpers/UnitConverter';

const PokemonSize = ({ height, weight }) => {
  const meters = height / 10;
  const ft = mToFt(meters);

  const kg = weight / 10;
  const lbs = kgToLbs(kg);

  const heightText = `${ft}ft (${height / 10}m)`;
  const weightText = `${lbs}lbs (${weight / 10}kg)`;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.title}>{strings.height}</Text>
        <Text style={styles.content}>{heightText}</Text>
      </View>
      <View style={styles.item}>
        <Text style={styles.title}>{strings.weight}</Text>
        <Text style={styles.content}>{weightText}</Text>
      </View>
    </View>
  );
};

PokemonSize.propTypes = {
  height: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
};

export default PokemonSize;
