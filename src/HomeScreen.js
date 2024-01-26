import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, TextInput } from 'react-native';

//  Assets
const menu = require("./assets/icons/menu.png");
const face = require("./assets/face.png");
const magnifying_glass = require("./assets/icons/magnifying-glass.png");

// Car Assets
const image_V_1 = require("./assets/vehicles/v-1.png");
const image_V_2 = require("./assets/vehicles/v-3.png");
const image_V_3 = require("./assets/vehicles/v-3.png");
const image_V_4 = require("./assets/vehicles/v-4.png");


const HomeScreen = () => {
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

                <View style={styles.elementPallet}>
                    <View style={styles.element}>
                        <Text style={styles.infoArea}></Text>
                        <Text style={styles.infoArea}></Text>
                        <Text style={styles.infoArea}>
                            <Text style={styles.infoArea}></Text>
                        </Text>
                    </View>
                    <View>
                        <Image source={image_V_1} resizeMode="contain" style={styles.vehicleImage} />
                    </View>
                </View>
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
        color: '900',
    },
    typesText: {
        fontSize: 15,
        marginRight: 28,
        fontWeight: '400',
        color: '#696969'
    }
  })