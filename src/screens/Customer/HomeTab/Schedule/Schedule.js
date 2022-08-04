import React, {useState} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {appImages, colors, appIcons} from '../../../../shared/exporter';
import {AppHeader} from '../../../../components';
import styles from './styles';
import StarIcon from 'react-native-vector-icons/Ionicons';
import {Schedule_List} from '../../../../shared/utilities/constant';
import {TouchableOpacity} from 'react-native';
import TickIcon from 'react-native-vector-icons/Feather';
import {ScheduleListCard} from '../../../../components/Cards/ScheduleListCard/ScheduleListCard';

const Schedule = ({navigation}) => {
  const [data, setData] = useState(Schedule_List);
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
              <Text style={styles.h1}>Irene foks</Text>
              <TouchableOpacity style={styles.btnCon}>
                <TickIcon name="check" size={8} color={colors.white} />
              </TouchableOpacity>
            </View>
            <View style={styles.rightIcon}>
              <StarIcon name={'star'} color={colors.s1} />
              <StarIcon name={'star'} color={colors.s1} />
              <StarIcon name={'star'} color={colors.s1} />
              <StarIcon name={'star'} color={colors.s1} />
              <StarIcon name={'star'} color={colors.s1} />
              <Text style={styles.text}>5.0</Text>
            </View>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
            data={data}
            renderItem={({item, index}) => {
              return (
                <ScheduleListCard
                onPressable={()=>{
                  navigation.navigate('DateTimePicker',{
                    title: item.title
                  })
                }}
                  title={item.title}
                  subtitle={item.subtitle}
                  img={item?.expanded ? null : appIcons.arrowIcon}
                  isExpanded={item?.expanded}
                  onPressExpanded={() => {
                    console.log('item', item);
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
    </>
  );
};
export default Schedule;
