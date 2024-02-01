import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, TextInput, ScrollView, TouchableOpacity } from 'react-native';

//  Assets
const menu = require("./assets/icons/menu.png");
const face = require("./assets/face.png");
const magnifying_glass = require("./assets/icons/magnifying-glass.png");

// Car Assets
const image_V_1 = require("./assets/vehicles/v-1.png");
const image_V_2 = require("./assets/vehicles/v-2.png");
const image_V_3 = require("./assets/vehicles/v-3.png");
const image_V_4 = require("./assets/vehicles/v-4.png");

// Vehicle Data
import data from "./dataset/vehicles.json";


const HomeScreen = ({ navigation }) => {

    const [ vehicles, setVehicles ] = useState(data.vehicles);
    const [ filteredVehicles, setFilteredVehicles ] = useState(data.vehicles);

    const getImage = (id) => {
        if (id == 1) return image_V_1
        if (id == 2) return image_V_2
        if (id == 3) return image_V_3
        if (id == 4) return image_V_4
    }

    const searchVehicles = (keyword) => {
        
        const lowerCasedKeyword = keyword.toLowerCase();

        const results = vehicles.filter(vehicle => {
            return vehicle.make.toLowerCase().includes(lowerCasedKeyword);
        })


        setFilteredVehicles(results);
    }

    return (
      <SafeAreaView style={styles.SafeArea}>
        <View style={styles.container}>

            {/* Header Section */}
            <View style={styles.headerSection}>
                <Image source={menu} resizeMode="contain" style={styles.menuIconStyle}/>
                <Image source={face} resizeMode="contain" style={styles.faceIconStyle}/>
            </View>

            {/* Title Section */}
            <View style={styles.titleSection}>
                <Text style={styles.title}>Rent a Car</Text>
            </View>

            {/* Search Section */}
            <View style={styles.searchSection}>
                <View style={styles.searchPallet}>
                    <TextInput 
                        style={styles.searchInput}
                        placeholder="Search for a Car"
                        onChangeText={(text) => searchVehicles(text)}
                    />
                    <View style={styles.searchIconArea}>
                        <Image 
                            source={magnifying_glass} 
                            resizeMode="contain"
                            style={styles.magnifyingIconStyle}
                        />
                    </View>
                </View>
            </View>

            {/* Types Section */}
            <View style={styles.typesection}>
                <Text style={styles.typesTextActive}>All</Text>
                <Text style={styles.typesText}>SUV</Text>
                <Text style={styles.typesText}>Sedan</Text>
                <Text style={styles.typesText}>MPV</Text>
                <Text style={styles.typesText}>Hatchback</Text>
            </View>

            {/* List Section */}
            <View style={styles.listSection}>
                <Text style={styles.headText}>Most Rented</Text>
                <ScrollView style={styles.elementPallet}>

                    {
                        filteredVehicles.map(vehicle => {
                            return (
                                <TouchableOpacity 
                                    style={styles.element} 
                                    key={vehicle.id} 
                                    activeOpacity={0.8}
                                    onPress={() => navigation.navigate('Info', { id: vehicle.id })}
                                >
                                    <View style={styles.infoArea}>
                                        <Text style={styles.infoTitle}>{vehicle.make} {vehicle.model} </Text>
                                        <Text style={styles.infoSub}>{vehicle.type} {vehicle.transmission}</Text>
                                        <Text style={styles.infoPrice}>
                                            <Text style={styles.infoAmount}>₦{vehicle.price_per_day},000</Text>/day
                                        </Text>
                                    </View>
                                    <View style={styles.imageArea}>
                                        <Image 
                                            source={getImage(vehicle.id)} 
                                            resizeMode="contain" 
                                            style={styles.vehicleImage} 
                                        />
                                    </View>
                                </TouchableOpacity>
                            );
                        })
                    }
                    
                </ScrollView>
            </View>
        </View>
      </SafeAreaView>
    )
  }

  export default HomeScreen;

  const styles = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: "#e7e7e7",
    },
    container: {
        flex: 1,
        paddingRight: 35,
        paddingLeft: 35,
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
        width: 30
    },
    faceIconStyle: {
        width: 40
    },
    titleSection: {
        marginTop: 15,
    },
    title: {
        fontSize: 32,
        fontWeight: "600"
    },
    searchSection: {
        marginTop: 15,
        paddingLeft: 15,
        paddingRight: 15,
        justifyContent: 'center',
    },
    searchPallet: {
        paddingLeft: 10,
        paddingRight: 10,
        flexDirection: 'row',
        borderRadius: 8,
        width: '100%',
        height: 30,
        backgroundColor: 'white'      
    },
    searchInput: {
        width: '89%',
        height: 30,
    },
    searchIconArea: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    magnifyingIconStyle: {
        width: 24,
        height: 24,
        marginRight: -10
    },
    typesection: {
        marginTop: 15,
        flexDirection: 'row',
    },
    typesTextActive: {
        fontSize: 15,
        marginRight: 20,
        fontWeight: 'bold',
    },
    typesText: {
        fontSize: 15,
        marginRight: 28,
        fontWeight: '400',
        color: '#696969'
    },
    listSection: {
        marginTop: 15,
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    elementPallet: {
        width: '100%',
        height: 450,
        // backgroundColor: 'red',
    },
    element: {
        marginBottom: 20,
        height: 100,
        padding: 13,
        borderRadius: 10,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    infoArea: {
        flex: 1,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoSub: {
        fontSize: 12,
        fontWeight: '600',
        color: '#696969',
    },
    infoPrice: {
        position: 'absolute',
        bottom: 0,
        fontSize: 10,
        color: '#696969',
        fontWeight: 'bold'
    },
    infoAmount: {
        fontSize: 12,
        color: 'black',
        fontWeight: '600',
    },
    imageArea: {
        flex: 1,
    },
    vehicleImage: {
        position: 'absolute',
        top: -8,
        left: -15,
        width: '120%',
        height: '120%'
    },
  })