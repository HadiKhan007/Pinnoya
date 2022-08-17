import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {List, TextInput} from 'react-native-paper';
import {
  appIcons,
  colors,
  family,
  size,
  WP,
  appImages,
} from '../../shared/exporter';
import StarRating from 'react-native-star-rating';
import {Button} from '..';

export const CompleteComp = ({rating, setRating, onPressBack}) => {
  return (
    <View>
      <List.Section>
        <List.Accordion
          title={'Order details'}
          titleStyle={styles.titleStyle}
          style={styles.accorStyle}>
          <Text style={styles.subTitleStyle}>
            Pellentesque in ipsum id orci porta dapibus. Ipsum id orci porta
            dapibus.
          </Text>
        </List.Accordion>
      </List.Section>
      <View style={styles.aiRow}>
        <Text style={styles.smHeading}>Leave a Review</Text>
        <StarRating
          disabled={false}
          maxStars={5}
          rating={rating}
          selectedStar={rating => {
            setRating(rating);
          }}
          fullStar={appIcons.star}
          emptyStar={appIcons.emptyStar}
          starSize={18}
        />
      </View>
      <TextInput
        style={[styles.inputStyle]}
        placeholder={'Type Something'}
        placeholderTextColor={colors.g2}
        onChangeText={text => {}}
        mode={'outlined'}
        outlineColor={colors.white2}
        activeOutlineColor={colors.p1}
        theme={{roundness: 10}}
        dense={true}
        multiline={true}
      />
      <View style={styles.emjView}>
        <TouchableOpacity>
          <Image source={appImages.emoji} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={appImages.emoji2} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={appImages.emoji3} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={appImages.emoji4} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={appImages.emoji5} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={appImages.emoji6} style={styles.emojiIcon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={appIcons.attach} style={styles.attachIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.aiCenter}>
        <Button
          onPressBtn={onPressBack}
          btnText={'Send'}
          bgColor={colors.b_gradient}
          textColor={colors.white}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  accorStyle: {
    backgroundColor: colors.white,
    padding: 0,
  },
  subTitleStyle: {
    color: colors.g1,
    fontSize: size.xsmall,
    fontFamily: family.Ubuntu_Light,
    paddingHorizontal: 10,
  },
  aiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: WP('2.2'),
    marginTop: WP('2'),
    justifyContent: 'space-between',
  },
  smHeading: {
    fontSize: size.normal,
    color: colors.b1,
    fontFamily: family.Ubuntu_Medium,
  },
  desStyle: {
    height: 120,
    backgroundColor: colors.white2,
    borderRadius: 10,
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    paddingHorizontal: WP('3'),
    backgroundColor: colors.white2,
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: WP('2'),
    height: 105,
  },
  aiCenter: {
    alignItems: 'center',
  },
  emjView: {flexDirection: 'row', justifyContent: 'space-evenly'},
  attachIcon: {
    height: 19,
    width: 19,
    marginLeft: 45,
    marginHorizontal: WP(-5),
    marginBottom: WP(4),
  },
  emojiIcon: {
    height: 19,
    width: 19,
  },
});
