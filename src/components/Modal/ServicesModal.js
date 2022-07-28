import React from 'react';
import {View, StyleSheet} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
const ServiceModal = ({tabRef}) => {
  return (
    <RBSheet
    ref={tabRef}
      height={scrHeight / 1.2}
      openDuration={250}
      customStyles={{
        container: styles.container1,
        wrapper: {
          backgroundColor: 'transparent',
        },
      }}>
        <View>
            <Text>hma</Text>
        </View>
      </RBSheet>
  );
};
export default ServiceModal;
const styles = StyleSheet.create({
  container1: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    // backgroundColor: colors.white,
    height: WP(115),
    width: WP(100),
    overflow: 'hidden',
  },
});
