//@flow
import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class PictureView extends PureComponent<> {
  render() {
    return (
      <View style={styles.containerPictures}>
        <View style={styles.containerRow}>
          <View style={styles.imgsLeft}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              1
            </Text>
          </View>
          <View style={styles.imgsRight}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              2
            </Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.imgsLeft}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              3
            </Text>
          </View>
          <View style={styles.imgsRight}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              4
            </Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.imgsLeft}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              5
            </Text>
          </View>
          <View style={styles.imgsRight}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              6
            </Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.imgsLeft}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              5
            </Text>
          </View>
          <View style={styles.imgsRight}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              6
            </Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.imgsLeft}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              7
            </Text>
          </View>
          <View style={styles.imgsRight}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              8
            </Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.imgsLeft}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              9
            </Text>
          </View>
          <View style={styles.imgsRight}>
            <Text style={{ fontSize: 15, fontWeight: "bold", color: "#000" }}>
              10
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPictures: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  containerRow: {
    flexDirection: "row",
    marginBottom: 1
  },
  imgsLeft: {
    marginRight: 1,
    width: "50%",
    height: 150,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  },
  imgsRight: {
    marginLeft: 1,
    width: "50%",
    height: 150,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center"
  }
});