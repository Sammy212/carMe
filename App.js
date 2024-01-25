import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// HomeScreen Component
const HomeScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#e7e7e7',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>HomeScreen</Text>
    </View>
  )
}


// MapScreen Component
const MapScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#e7e7e7',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>MapScreen</Text>
    </View>
  )
}


// SavedScreen Component
const SavedScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#e7e7e7',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>SavedScreen</Text>
    </View>
  )
}


// SettingScreen Component
const SettingsScreen = () => {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#e7e7e7',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>SettingsScreen</Text>
    </View>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
