import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import MenuBottom from "../components/MenuBottom";
import { SafeAreaView } from "react-native-safe-area-context";
import useLocation from "../hooks/useLocation";

const HomeScreen = ({ navigation }) => {
  const { text, location } = useLocation();
  const [geoLocation, setGeoLocation] = useState([]);

  useEffect(() => {
    setGeoLocation(location);
    console.log("geoLocation", geoLocation);
  }, [geoLocation, location]);
  return (
    <SafeAreaView style={styles.container}>
      <MapView
        initialRegion={{
          latitude: Number(geoLocation?.coords?.latitude) || 47.391217,
          longitude: Number(geoLocation?.coords?.longitude) || 0.6892237,
          longitudeDelta: 0.045,
          latitudeDelta: 0.045,
        }}
        showsCompass={true}
        rotateEnabled={false}
        showsTraffic={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.MapView}
      />
      <View style={styles.bottomWidget}>
        <View style={styles.whereContainer}>
          <Text>{text}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  MapView: {
    flex: 1,
  },
  bottomWidget: {
    position: "absolute",
    bottom: 0,
    width: "95%",
    marginHorizontal: "2.5%",
    backgroundColor: "#fff",
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    zIndex: 5,
  },
  whereContainer: {
    margin: "2.5%",
    backgroundColor: "#f1f1f1",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: "2.5%",
    paddingVertical: 8,
    marginBottom: 20,
  },
  whereTo: {
    fontSize: 22.5,
    color: "#000",
  },
});
