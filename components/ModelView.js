import * as React from "react";
import {
  Animated,
  View,
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  asset
} from "react-360";
import Entity from "Entity";
import AmbientLight from "AmbientLight";
import PointLight from "PointLight";

import { connect, nextProduct, infoProduct } from "../Store";

class ModelView extends React.Component {
  render() {
    return this.props.id > 0 ? (
      <Entity
        source={{ obj: asset("t-shirt.obj") }}
        style={{
          transform: [{ translate: [-3.5, -3.5, -2.8] }],
          color:
            this.props.id === 1
              ? "green"
              : this.props.id === 2
              ? "#8b2323"
              : this.props.id === 3
              ? "#a52a2a"
              : this.props.id === 4
              ? "#333333"
              : this.props.id === 5
              ? "red"
              : null
        }}
      />
    ) : null;
  }
}

const ConnectedModelView = connect(ModelView);

export default ConnectedModelView;
