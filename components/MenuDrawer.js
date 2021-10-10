import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Avatar from "../assets/avatar.png";

const Link = ({ name, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate(name)}>
    <Text style={styles.link}>{name}</Text>
  </TouchableOpacity>
);

const MenuDrawer = ({ state, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.profilePict} source={Avatar} />
        <Text style={styles.profileName}>Rodolphe Augusto</Text>
      </View>
      <ScrollView style={styles.links}>
        {state.routes.map((route) => (
          <Link key={route.key} name={route.name} navigation={navigation} />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Ride-Sharing</Text>
        <Text style={styles.versionText}>v1.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#000",
    height: 160,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  profileName: {
    color: "#fff",
    fontSize: 15,
  },
  profilePict: {
    borderRadius: 65,
    height: 75,
    width: 75,
    marginRight: 5,
  },
  links: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  },
  link: {
    textAlign: "left",
    padding: 6,
    paddingLeft: 10,
    fontSize: 17.5,
    margin: 5,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  footerText: {
    color: "#000",
  },
  versionText: {
    color: "darkgrey",
  },
});
