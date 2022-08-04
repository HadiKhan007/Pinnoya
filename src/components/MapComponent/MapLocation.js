import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {colors, size, WP, appIcons} from '../../shared/exporter';
import BackArrow from 'react-native-vector-icons/AntDesign';
import {location_list} from '../../shared/utilities/constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, Button} from '../../components';
import {TextInput} from 'react-native-paper';
export const MapLocation = ({
  backIcon,
  onPressBack,
  tabRef,
  title,
  onBlur,
  blurOnSubmit,
}) => {
  const [data, setData] = useState(location_list);

  useEffect(() => {
    console.log('data ', data);
  }, [data]);
  return (
    <>
      <View style={styles.container}>
        {backIcon && (
          <TouchableOpacity onPress={onPressBack} style={styles.arrowStyle}>
            <BackArrow name={'left'} size={20} color={colors.b1} />
          </TouchableOpacity>
        )}
        <Text style={styles.textStyle}>{title}</Text>
      </View>
      <View style={styles.secondContentContainer}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerStyle}>
            <Image source={appIcons.location} style={styles.imageStyle} />
            <Text style={[styles.title]}>Lorem Ispum is simply dummy</Text>
          </View>
          <Text style={styles.subTitle}>
            B-374 Lorem Ispum is simply dummy text of the printing and
            typesetting industry
          </Text>
          <Text style={[styles.title, {marginTop: WP(2)}, {marginLeft: WP(6)}]}>
            Save this address as
          </Text>

          {/* list */}
          <FlatList
            // showsVerticalScrollIndicator={false}
            numColumns={4}
            data={data}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setData(
                      data.map(obj =>
                        obj.id == item?.id
                          ? {...obj, selected: true}
                          : {...obj, selected: false},
                      ),
                    );
                  }}>
                  <LinearGradient
                    colors={
                      item?.selected ? colors.b_gradient : colors.db_gradient
                    }
                    start={{x: 0, y: 1}}
                    end={{x: 0, y: 0}}
                    style={[
                      styles.Button,
                      {
                        borderColor: item?.selected ? colors.g9 : colors.g4,
                      },
                      {borderWidth: item?.selected ? null : 1},
                    ]}>
                    <Text
                      style={{
                        color: item?.selected ? colors.white : colors.g9,
                      }}>
                      {item?.title}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              );
            }}
          />

          {/* Add Address */}
          <Text style={[styles.title, {marginLeft: WP(6)}, {marginTop: WP(1)}]}>
            Add Address
          </Text>

          {/* Card */}

          <View style={styles.boxContainer}>
            <AppInput
              placeholder={'House/Flat/Block No.'}
              placeholderTextColor={colors.g2}
            />
            <AppInput
              placeholder={'Apartment/Road/Area'}
              placeholderTextColor={colors.g2}
            />
            <TextInput
              style={[styles.inputStyle]}
              placeholder={'Direction to reach'}
              placeholderTextColor={colors.g2}
              onChangeText={text => {
                console.log(text);
              }}
              mode={'outlined'}
              outlineColor={colors.g2}
              activeOutlineColor={colors.p1}
              theme={{roundness: 10}}
              dense={true}
              multiline={true}
            />
          </View>
          <Button
            onPressBtn={() => {
              navigation?.navigate('Dashboard');
            }}
            bgColor={colors.b_gradient}
            textColor={colors.white}
            btnText={'Submit'}
          />
        </KeyboardAwareScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('18'),
    justifyContent: 'flex-end',
    position: 'absolute',
    flexDirection: 'row',
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white2,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  imageStyle: {
    resizeMode: 'contain',
    width: WP('10'),
    // marginTop: WP(8),
  },
  headerStyle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  textStyle: {
    position: 'absolute',
    left: 70,
    top: 57,
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  subTitle: {
    maxWidth: WP(80),
    marginLeft: WP(6),
    marginTop: WP(1),
  },
  arrowStyle: {
    top: 60,
    left: 15,
  },
  Button: {
    height: WP('10'),
    width: WP(22),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WP(1),
    overflow: 'hidden',
  },
  Liststyle: {
    width: WP(100),
    flexDirection: 'row',
  },
  boxContainer: {
    paddingVertical: WP('4'),
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: colors.box_shadow,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.27,
    elevation: 8,
    overflow: 'hidden',
  },
  inputStyle: {
    fontSize: size.tiny,
    color: colors.g2,
    paddingHorizontal: WP('3'),
    backgroundColor: colors.white,
    justifyContent: 'center',
    paddingVertical: 5,
    marginVertical: WP('2'),
    height: 150,
  },
});
