import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

interface propsType {
  title: string;
  onPress(): void;
  loading?: boolean;
}
const LoginButton = ({title, onPress, loading}: propsType) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="green"
          style={styles.buttonText}
        />
      ) : (
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={0.6}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      )}
    </>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 25,
    backgroundColor: 'green',
    width: 120,
    alignItems: 'center',
    borderRadius: 3,
    justifyContent: 'center',
    alignContent: 'center',
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 23,
    padding: 3,
    fontWeight: '600',
  },
});
