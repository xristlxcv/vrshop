import React from "react";
import { AppRegistry, StyleSheet, Text, View, Image, asset } from "react-360";

class Products extends React.Component {
  state = {
    img: this.props.value
  };
  render() {
    return (
      <View
        style={styles.panelimages}
        onInput={() => this.props.onText(this.props.id)}
      >
        <Image style={styles.images} source={asset(this.state.img)} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  panelimages: {
    width: 150,
    height: 150,
    marginTop: 200,
    backgroundColor: "white"
  },
  images: {
    width: 150,
    height: 150
  }
});

export default Products;
