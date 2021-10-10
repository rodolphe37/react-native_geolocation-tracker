import "react-native-gesture-handler";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import TripsScreen from "./screens/TripsScreen";
import HelpScreen from "./screens/HelpScreen";
import SettingsScreen from "./screens/SettingsScreen";
import MenuDrawer from "./components/MenuDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpoStatusBar style="light" backgroundColor="rgb(85, 4, 135)" />
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <MenuDrawer {...props} />}
          initialRouteName="Home"
        >
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Your Trips" component={TripsScreen} />
          <Drawer.Screen name="Help" component={HelpScreen} />
          <Drawer.Screen name="Settings" component={SettingsScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  title: {
    fontSize: 30,
    marginBottom: 100,
  },
});
