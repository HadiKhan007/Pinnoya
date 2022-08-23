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
import {colors, size, WP, appIcons, family} from '../../shared/exporter';
import BackArrow from 'react-native-vector-icons/AntDesign';
import {location_list} from '../../shared/utilities/constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppInput, Button} from '../../components';
import {TextInput} from 'react-native-paper';

export const MapLocation = ({backIcon, onPressBack, title, onPress}) => {
  const [data, setData] = useState(location_list);
  useEffect(() => {}, [data]);
  return (
    <View style={styles.mainContainer}>
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
            <Text style={styles.title}>Lorem Ispum is simply dummy</Text>
          </View>
          <Text style={styles.subTitle}>
            B-374 Lorem Ispum is simply dummy text of the printing and
            typesetting industry
          </Text>
          <Text style={styles.heading}>Save this address as</Text>

          <FlatList
            numColumns={4}
            data={data}
            contentContainerStyle={{paddingHorizontal: WP('2')}}
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

          <Text style={styles.heading}>Add Address</Text>

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
              onChangeText={text => {}}
              mode={'outlined'}
              outlineColor={colors.g2}
              activeOutlineColor={colors.p1}
              theme={{roundness: 10}}
              dense={true}
              multiline={true}
            />
          </View>

          <View style={styles.buttonView}>
            <Button
              onPressBtn={onPress}
              bgColor={colors.b_gradient}
              textColor={colors.white}
              btnText={'Confirm Location'}
            />
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeView: {flex: 1},
  mainContainer: {flex: 1.5},
  container: {
    position: 'absolute',
    flexDirection: 'row',
  },
  secondContentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: WP('4'),
  },
  imageStyle: {
    resizeMode: 'contain',
    width: 25,
    height: 25,
  },
  headerStyle: {
    flexDirection: 'row',
  },
  title: {
    fontSize: size.large,
    color: colors.b1,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: size.large,
    color: colors.b1,
    marginVertical: WP('2'),
    marginLeft: WP('3'),
    fontFamily: family.Poppins_Medium,
  },
  textStyle: {
    position: 'absolute',
    left: 60,
    top: -220,
    fontSize: size.large,
    color: colors.b1,
    fontFamily: family.Poppins_Medium,
  },
  subTitle: {
    maxWidth: WP(80),
    marginLeft: WP('3'),
    marginTop: WP('1'),
    color: colors.g1,
  },
  arrowStyle: {
    top: -218,
    left: 15,
  },
  Button: {
    height: WP('10'),
    width: WP('21.5'),
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: WP('1'),
    overflow: 'hidden',
  },
  Liststyle: {
    width: WP(100),
    flexDirection: 'row',
  },
  boxContainer: {
    width: WP(87),
    paddingVertical: WP('4'),
    borderRadius: 10,
    backgroundColor: colors.white,
    padding: 20,
    shadowColor: Platform.OS == 'ios' ? '#00000080' : '#000000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    shadowRadius: Platform.OS == 'ios' ? 8 : 24,
    elevation: Platform.OS == 'ios' ? 0 : 12,
    marginLeft: WP(2.5),
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
  buttonView: {
    alignItems: 'center',
    marginVertical: WP('4'),
  },
});
