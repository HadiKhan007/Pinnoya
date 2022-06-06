import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../components';
import styles from './styles';
const AboutUs = ({navigation}) => {
  return (
    <>
      <AppHeader
        backIcon={true}
        title={'About Us'}
        onPressBack={() => {
          navigation?.goBack();
        }}
      />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.titleStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              fringilla feugiat dui turpis congue egestas nibh enim aliquet. Nam
              arcu nec viverra sit mauris. Mauris aliquet sit sit praesent. Sed
              metus, quis massa sed eget vitae, sagittis. Neque phasellus
              faucibus vestibulum arcu dui. At senectus eget praesent semper
              tincidunt rhoncus, donec in. Diam non morbi et mi quisque montes,
              lectus. Viverra in porttitor lorem enim egestas massa massa porta
              neque. Turpis turpis pretium, facilisis arcu turpis blandit
              scelerisque. Turpis nulla id amet eu tellus sit dignissim. Eros
              nibh mus eleifend bibendum bibendum sollicitudin amet aliquam.
              Eget ut duis vel at interdum neque neque. Tellus volutpat turpis
              in ullamcorper eros aliquet aliquet dolor nibh. Eu pulvinar enim,
              purus sit lacus rhoncus dolor. Lectus leo diam montes, mi odio
              amet tincidunt. Interdum erat lacus amet risus viverra urna
              tempus. Amet et neque nunc enim. Orci amet nunc, fames nec lacus
              urna, tellus, quisque. Sit aliquet fusce duis nibh elementum eget
              augue sollicitudin. Risus elit risus, sem tristique. Pellentesque
              augue libero, tellus mattis suscipit ipsum pharetra tristique.
              Lectus risus, interdum ut lectus. Aliquam nec nunc auctor cursus
              imperdiet. Elementum neque risus, curabitur vulputate ligula
              facilisis. Quis consequat eget et, in donec venenatis pretium et.
              Id lectus orci quis mattis consectetur nunc gravida enim. Purus
              arcu semper non tempus cras est justo, non gravida. Congue
              volutpat interdum quis blandit sit facilisi in donec ante.
              Consequat et lectus condimentum eget. Mauris elementum augue
              pulvinar justo donec in turpis. Vestibulum id vehicula massa
              varius. Tellus velit enim mollis quis risus. Blandit mauris
              viverra et enim nisi odio blandit quis. Praesent viverra vulputate
              risus purus.
            </Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default AboutUs;
