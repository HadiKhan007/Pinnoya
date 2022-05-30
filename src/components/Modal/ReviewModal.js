import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors, family, size, spacing, WP} from '../../shared/exporter';
import {ReviewCard} from '..';
import CrossIcon from 'react-native-vector-icons/Entypo';

export const ReviewModal = ({modalRef, onPressClose}) => {
  return (
    <RBSheet
      ref={modalRef}
      height={WP('115')}
      openDuration={250}
      customStyles={{
        container: styles.container,
        wrapper: {backgroundColor: 'transparent'},
      }}>
      <TouchableOpacity style={styles.header} onPress={onPressClose}>
        <CrossIcon name={'cross'} size={20} color={colors.b1} />
      </TouchableOpacity>
      <FlatList
        style={styles.listStyle}
        data={[1, 2, 3, 4, 5]}
        renderItem={() => {
          return <ReviewCard />;
        }}
        showsVerticalScrollIndicator={false}
      />
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
    alignItems: 'center',
    paddingHorizontal: WP('4'),
  },
  header: {
    width: '100%',
    alignItems: 'flex-end',
    padding: 5,
  },
  listStyle: {
    paddingVertical: 10,
  },
});
