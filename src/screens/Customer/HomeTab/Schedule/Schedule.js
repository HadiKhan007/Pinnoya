import React, {useState, useEffect, useRef} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {
  appImages,
  colors,
  appIcons,
  Schedule_List,
} from '../../../../shared/exporter';
import {
  AppHeader,
  ReviewModal,
  ScheduleListCard,
  Button,
} from '../../../../components';
import styles from './styles';
import {TouchableOpacity} from 'react-native';
import TickIcon from 'react-native-vector-icons/Feather';
import StarRating from 'react-native-star-rating';
import {getServiceProviderDetailAction} from '../../../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/core';

const Schedule = ({navigation, route}) => {
  const [data, setData] = useState(Schedule_List);
  const [rating, setRating] = useState(0);
  const modalRef = useRef(null);
  const isFocused = useIsFocused();
  const {item} = route?.params;
  const dispatch = useDispatch(null);
  console.log(item);

  useEffect(() => {
    if (isFocused) {
      getServiceProviderDetails();
    }
  }, [isFocused]);
  const getServiceProviderDetails = () => {
    try {
      const cbSuccess = res => {
        console.log('RESPONSE ', res);
      };
      const cbFailure = err => {
        console.log('ERROR.. ', err);
      };
      dispatch(
        getServiceProviderDetailAction(
          item?.service_provide?.id,
          cbSuccess,
          cbFailure,
        ),
      );
    } catch (error) {
      console.log('ERROR ', error);
    }
  };
  return (
    <>
      <AppHeader
        backIcon={true}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <Image source={appImages.user} style={styles.imgBg}></Image>
        <View style={styles.secondContentContainer}>
          {/* Header */}
          <View style={styles.aiRowSpace}>
            <View style={styles.aiRow}>
              <Text style={styles.h1}>
                {item?.service_provider?.first_name}
              </Text>
              <TouchableOpacity style={styles.btnCon}>
                <TickIcon name="check" size={8} color={colors.white} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.rightIcon}
              onPress={() => {
                modalRef.current.open();
              }}>
              <StarRating
                disabled={false}
                maxStars={5}
                rating={rating}
                selectedStar={rat => {
                  setRating(rat);
                }}
                fullStar={appIcons.star}
                emptyStar={appIcons.emptyStar}
                starSize={18}
              />
              <Text style={styles.text}>5.0</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainer3}
            data={data}
            renderItem={({item, index}) => {
              return (
                <ScheduleListCard
                  onPressable={() => {
                    navigation.navigate('DateTimePicker', {
                      title: item.title,
                    });
                  }}
                  title={item.title}
                  subtitle={item.subtitle}
                  backIcon={item?.expanded ? false : true}
                  isExpanded={item?.expanded}
                  onPressExpanded={() => {
                    setData(
                      data.map(obj =>
                        obj.id == item?.id
                          ? {...obj, expanded: !obj.expanded}
                          : {...obj, expanded: false},
                      ),
                    );
                  }}
                />
              );
            }}
          />
        </View>
      </View>
      <ReviewModal
        modalRef={modalRef}
        onPressClose={() => {
          modalRef.current.close();
        }}
      />
      <View style={{alignSelf: 'center'}}>
        <Button
          onPressBtn={() => {
            navigation?.navigate('BookingDetail');
          }}
          bgColor={colors.b_gradient}
          btnText={'Schedule Now'}
          textColor={colors.white}
        />
      </View>
    </>
  );
};
export default Schedule;
