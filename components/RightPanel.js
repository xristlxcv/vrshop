import React from "react";
import {
  Animated,
  asset,
  NativeModules,
  StyleSheet,
  Text,
  View,
  VrButton
} from "react-360";

import { connect } from "../Store";

class RightPanel extends React.Component {
  state = {
    data: {
      teams: "Here is the products informations"
    },
    confirmPurchase: " You don't make a purchase yet.Press buy to buy a product"
  };
  buyProduct(id) {
    {
      this.setState({ confirmPurchase: id + "T-shirt was completed" });
    }
  }

  showInfo(info) {
    console.log(info);
    if (info === "Milwakee Bucks") {
      this.setState({
        data: {
          teams: "Milwakee Bucks Nike-T shirt-Mens- Total price: 40,00 $"
        }
      });
    }
    if (info === "Cleveland Cavaliers") {
      this.setState({
        data: {
          teams: "Cleveland Cavaliers Nike-T shirt-Mens-Total price: 70,00 $"
        }
      });
    }
    if (info === "Philadelphia Sixers") {
      this.setState({
        data: {
          teams: "Philadelphia Sixers Nike-T shirt-Mens -Total price: 55,00 $"
        }
      });
    }
    if (info === "Toronto Raptors") {
      this.setState({
        data: {
          teams: "Toronto Raptors Nike- T shirt-Mens- Total price: 60,00 $"
        }
      });
    }
    if (info === "Huston Rockets") {
      this.setState({
        data: {
          teams: "Huston Rockets Adiddas- T-shirt-Mens -Total price: 50,00 $"
        }
      });
    }
  }

  componentDidMount() {
    this.showInfo(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.info !== this.props.info) {
      this.showInfo(this.props.info);
    }
  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{
              width: 300,
              height: 600
            }}
          >
            <Text> {this.state.data.teams}</Text>

            {this.state.data.teams !== "Here is the products informations" ? (
              <View>
                <View style={styles.greetingBox}>
                  <VrButton onClick={() => this.buyProduct(this.props.info)}>
                    <Text style={styles.greeting}>Buy</Text>
                  </VrButton>
                </View>
                <Text style={styles.purchase}>
                  {this.state.confirmPurchase}
                </Text>
              </View>
            ) : null}
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
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "green",
    borderColor: "#639dda",
    borderWidth: 2,
    width: 100,
    height: 90,
    marginTop: 150,
    marginLeft: 50
  },
  greeting: {
    width: 50,
    fontSize: 30,
    backgroundColor: "black"
  },
  purchase: {
    marginTop: 250
  }
});

const ConnectedRightPanel = connect(RightPanel);

export default ConnectedRightPanel;
