import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import useLocation from "../hooks/useLocation";

const TripsScreen = () => {
  const { location } = useLocation();
  const [geoLocation, setGeoLocation] = useState([]);

  useEffect(() => {
    setGeoLocation(location);
    console.log("geoLocation", geoLocation);
  }, [geoLocation, location]);
  return (
    <View>
      <Text>latitude : {geoLocation?.coords?.latitude}</Text>
      <Text>longitude :{geoLocation?.coords?.longitude}</Text>
    </View>
  );
};

export default TripsScreen;

const styles = StyleSheet.create({});
