import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Favourite from '../../../screens/Customer/FavouriteTab/Favourite';
const Stack = createStackNavigator();

function FavouriteStack(props) {
  return (
    <Stack.Navigator
      initialRouteName="FavouriteStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Favourite" component={Favourite} />
    </Stack.Navigator>
  );
}

export default FavouriteStack;
