import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import {colors, family, job_list, size, WP} from '../../shared/exporter';
import CrossIcon from 'react-native-vector-icons/Entypo';
import {List} from 'react-native-paper';

export const JobModal = ({modalRef, onPressClose, expanded, onPressAccord}) => {
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
        showsVerticalScrollIndicator={false}
        data={job_list}
        keyExtractor={(item, index) => item.key}
        renderItem={({item, index}) => {
          return (
            <View style={styles.cardContainer}>
              <List.Section style={styles.sectionStyle}>
                <List.Accordion
                  expanded={expanded}
                  onPress={onPressAccord}
                  title={item?.title}
                  style={styles.accorStyle}
                  titleStyle={styles.titleStyle}
                  descriptionStyle={styles.subTitleStyle}
                  description={item.body}>
                  <List.Item
                    title={item.body}
                    style={styles.bodyStyle}
                    titleStyle={styles.subTitleStyle}
                  />
                </List.Accordion>
              </List.Section>
            </View>
          );
        }}
      />
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    backgroundColor: colors.white2,
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
  cardContainer: {
    width: '100%',
  },
  titleStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
    paddingBottom: 5,
  },
  subTitleStyle: {
    fontFamily: family.Ubuntu_Regular,
    fontSize: size.xxxtiny,
    color: colors.g1,
  },
  accorStyle: {
    backgroundColor: colors.white,
  },
  bodyStyle: {
    borderRadius: 5,
    backgroundColor: colors.white2,
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
    marginVertical: 5,
  },
  sectionStyle: {
    overflow: 'hidden',
    borderRadius: 10,
  },
});
