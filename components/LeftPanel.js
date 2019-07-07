import React from "react";
import { AppRegistry, StyleSheet, Text, View, Image, asset } from "react-360";
import Products from "./products";
import { connect, nextProduct, infoProduct } from "../Store";

class LeftPanel extends React.Component {
  state = {
    data: [
      { id: 1, value: "MILEPTY.png" },
      { id: 2, value: "cleveland.png" },
      { id: 3, value: "phila.png" },
      { id: 4, value: "raptors.png" },
      { id: 5, value: "rockets.png" }
    ]
  };
  handleText = pid => {
    infoProduct(pid);
  };
  render() {
    return (
      <View style={styles.panel}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              width: 250,
              height: 600
            }}
          >
            <Text> Instructions</Text>
            <Text style={{ marginTop: "100" }}>
              Click on t-shirt image to show on the right panel infos about the
              products and appear a 3d-model of t-shirt
            </Text>
          </View>
          <View
            style={{
              width: 1000,
              height: 600,
              backgroundColor: "green"
            }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              {this.state.data.map(element => (
                <Products
                  key={element.id}
                  value={element.value}
                  id={element.id}
                  onText={this.handleText}
                />
              ))}
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)"
  }
});

const ConnectedLeftPanel = connect(LeftPanel);

export default ConnectedLeftPanel;
