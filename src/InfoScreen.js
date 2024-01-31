import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Platform } from 'react-native';

//  Assets
const back = require("./assets/icons/left-arrow.png");
const dots = require("./assets/icons/dots.png");

import data from "./dataset/vehicles.json";

// Car Assets
const image_V_1 = require("./assets/vehicles/v-1.png");
const image_V_2 = require("./assets/vehicles/v-2.png");
const image_V_3 = require("./assets/vehicles/v-3.png");
const image_V_4 = require("./assets/vehicles/v-4.png");


const InfoScreen = ({ route }) => {

    const vehicle = data.vehicles.filter(
      (element) => element.id == route.params.id
    ) [0];

    const getImage = (id) => {
      if (id == 1) return image_V_1
      if (id == 2) return image_V_2
      if (id == 3) return image_V_3
      if (id == 4) return image_V_4
  };
  
    return (
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.container}>

          {/* Header Section */}
          <View style={styles.headerSection}>
                <Image 
                  source={back} 
                  resizeMode="contain" 
                  style={styles.menuIconStyle}
                />
                <Text style={styles.HeaderText}>Details</Text>
                <Image 
                  source={dots} 
                  resizeMode="contain" 
                  style={styles.faceIconStyle}
                />
          </View>

          {/* Vehicle Image */}
          <View style={styles.imageSelection}>
            <Image 
              source={getImage(vehicle.id)} 
              resizeMode="contain" 
              style={styles.vehicleImage}
            />
          </View>

          {/* Vehicle Information */}
          <View style={styles.headSection}>
            <View style={styles.topTextArea}>
              <Text style={styles.makemodelText}>{ vehicle.make } {vehicle.model}</Text>
              <Text style={styles.price}><Text style={styles.amount}>${ vehicle.price_per_day }</Text> /day</Text>
            </View>
              <Text style={styles.typetranText}>{ vehicle.type } - { vehicle.transmission }</Text>
          </View>

        </View>
      </SafeAreaView>
    )
  }

  export default InfoScreen;

  const styles = StyleSheet.create({
      SafeArea: {
          flex: 1,
          backgroundColor: "#fff",
      },

      container: {
        flex: 1,
        paddingRight: 20,
        paddingLeft: 20,
      },
      headerSection: {
        ...Platform.select({
            android: {marginTop: 30,}
        }),
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      menuIconStyle: {
        width: 20
      },
      faceIconStyle: {
        width: 20
      },
      HeaderText: {
        fontSize: 24,
        fontWeight: '600',
      },

      imageSelection: {
        width: '100%',
        height: 300,
        justifyContent: "center",
        alignItems: "center",
      },
      vehicleImage: {
        width: 300,
        height: 300,
      },
      headSection: {

      },
      topTextArea: {
        flexDirection: "row",
        justifyContent: 'space-between'
      },
      makemodelText: {
        fontSize: 20,
        fontWeight: "500",
      },
      price: {
        fontWeight: '400',
      },
      amount: {
        fontWeight: 'bold',

      },
      typetranText: {
        marginTop: 3,
        color: '#696969',
        fontWeight: '600',
        fontSize: 12,
      },
  })