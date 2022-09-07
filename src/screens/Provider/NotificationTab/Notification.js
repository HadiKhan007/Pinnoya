// import React, {useRef} from 'react';
// import {View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
// import styles from './styles';
// import {
//   AppHeader,
//   NotificationCard,
//   ProviderNotificationCard,
//   SearchModal,
// } from '../../../components';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// const Notification = () => {
//   const SearchRef = useRef(null);
//   return (
//     <SafeAreaView style={styles.container}>
//       <AppHeader title={'Notification'} />
//       <View style={styles.container}>
//         <View style={styles.contentContainer}>
//           <View style={styles.contentContainer2}>
//             <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
//               <FlatList
//                 data={[1, 2, 3, 4, 5]}
//                 renderItem={({item}) => (
//                   <ProviderNotificationCard
//                     status={'Searching'}
                    // onPress={() => {
                    //   SearchRef.current.open();
                    // }}
//                   />
//                 )}
//               />
//             </KeyboardAwareScrollView>
//           </View>
//         </View>
//       </View>
//       <SearchModal SearchRef={SearchRef} />
//     </SafeAreaView>
//   );
// };
// export default Notification;
