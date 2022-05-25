import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';

export const LocationModal = () => {
  return (
    <RBSheet
      height={300}
      openDuration={250}
      customStyles={{
        container: {
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}>
      <Text>dasdsa</Text>
    </RBSheet>
  );
};

const styles = StyleSheet.create({});
