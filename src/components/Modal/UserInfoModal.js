import React, {useRef} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {
  DescriptionBox,
  ServiceFeeBox,
  TitleHeading,
  UserInfoBox,
  AuthHeading,
} from '..';
import {colors, spacing, WP} from '../../shared/exporter';

export const UserInfoModal = ({modalRef, height, onPressBtn}) => {
  return (
    <RBSheet
      ref={modalRef}
      height={height}
      openDuration={250}
      customStyles={{
        container: styles.container,
        wrapper: {backgroundColor: 'transparent'},
      }}>
      <View style={styles.contentContainer}>
        <View style={styles.borderStyle} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <UserInfoBox />
          <DescriptionBox />
          <View style={spacing.my4}>
            <TitleHeading title={'Payment'} />
            <AuthHeading
              title={'Add a voucher'}
              flexDirection={true}
              icon={true}
              marginLeft={WP('3')}
            />
            <ServiceFeeBox onPressBtn={onPressBtn} />
          </View>
        </ScrollView>
      </View>
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    padding: 10,
  },

  borderStyle: {
    borderWidth: 3,
    borderColor: colors.g6,
    alignSelf: 'center',
    width: '15%',
    marginTop: 5,
  },
  contentContainer: {
    paddingHorizontal: WP('4'),
  },
});
