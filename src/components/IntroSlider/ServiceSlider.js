import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {colors, family, size, WP, appIcons} from '../../shared/exporter';
import {MultiSliderComp} from './MultiSliderComp';
import {ScreenWidth} from 'react-native-elements/dist/helpers';

export const ServiceSlider = () => {
  const [value, setValue] = useState([100]);
  const [state, setState] = useState([0, 0]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.worktxt}>Work Area</Text>
        <MultiSlider
          enableLabel={true}
          customLabel={index => {
            return (
              <Text
                style={[
                  styles.customLabelTxt,
                  {
                    left: index.oneMarkerValue
                      ? (value * (ScreenWidth - 60)) / 100 - 15
                      : 0,
                  },
                ]}>
                {value}m
              </Text>
            );
          }}
          containerStyle={styles.contentContainer}
          values={value}
          customMarker={() => {
            return (
              <View>
                <Image source={appIcons.circle} style={styles.markerStyle} />
              </View>
            );
          }}
          min={0}
          sliderLength={290}
          max={100}
          trackStyle={styles.trackStyle}
          selectedStyle={{backgroundColor: colors.p1}}
          onValuesChange={val => {
            setValue(val);
          }}
        />

        <Text style={styles.Pricetxt}>Price per hour</Text>
        <MultiSliderComp
          value={state}
          onValuesChange={val => {
            setState(val);
          }}
          h1={'₱2'}
          h2={'₱50'}
          max={50}
          min={2}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WP('90'),
    paddingVertical: WP('5'),
    paddingHorizontal: 20,
  },
  markerStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    top: 5,
  },
  trackStyle: {
    height: 10,
    backgroundColor: colors.p2,
    borderRadius: 10,
  },
  worktxt: {
    fontSize: size.normal,
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
  },
  customLabelTxt: {
    fontSize: size.small,
    color: colors.p1,
    bottom: -50,
  },
  contentContainer: {
    alignItems: 'center',
  },
  Pricetxt: {
    fontSize: size.normal,
    fontFamily: family.Poppins_Medium,
    color: colors.b1,
    marginVertical: 10,
  },
});
