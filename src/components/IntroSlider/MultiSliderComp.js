import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {appIcons, colors, family, size} from '../../shared/exporter';

export const MultiSliderComp = ({value, onValuesChange, h1, h2, max, min}) => {
  const [markerOne, setMarkerOne] = useState(true);
  const [markertwo, setMarkertwo] = useState(true);
  return (
    <View style={styles.container}>
      <MultiSlider
        enableLabel={true}
        customLabel={index => {
          if (index.oneMarkerPressed) {
            setMarkerOne(true);
          } else if (index.twoMarkerPressed) {
            setMarkertwo(true);
          }
          return (
            <>
              <Text
                style={[
                  styles.valueOneText,
                  {left: markerOne ? index.oneMarkerLeftPosition : 0},
                ]}>
                {value[0]}
              </Text>

              <Text
                style={[
                  styles.valueText,
                  {
                    left: markertwo
                      ? index.twoMarkerLeftPosition
                      : index.twoMarkerValue,
                  },
                ]}>
                {value}
              </Text>
            </>
          );
        }}
        containerStyle={styles.contentContainer}
        values={value}
        customMarkerLeft={() => {
          return (
            <View>
              <Image source={appIcons.circle} style={styles.markerStyle} />
            </View>
          );
        }}
        snapped={true}
        customMarkerRight={() => {
          return (
            <View>
              <Image source={appIcons.circle} style={styles.markerStyle} />
            </View>
          );
        }}
        min={min}
        sliderLength={290}
        max={[max]}
        trackStyle={styles.trackStyle}
        selectedStyle={{backgroundColor: colors.p1}}
        onValuesChange={onValuesChange}
        isMarkersSeparated={true}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.tinyText}>{h1}</Text>
        <Text style={styles.tinyText}>{h2}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  tinyText: {
    color: colors.p1,
    fontSize: size.tiny,
    fontFamily: family.Ubuntu_Medium,
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    bottom: 10,
    paddingHorizontal: 10,
  },
  trackStyle: {
    height: 10,
    backgroundColor: colors.p2,
    borderRadius: 10,
  },
  markerStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
    top: 5,
  },
  valueText: {
    color: colors.p1,
    bottom: -50,
  },
  valueOneText: {
    color: colors.p1,
    bottom: -70,
  },
});
