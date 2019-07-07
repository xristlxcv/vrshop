import React from "react";

const State = {
  info: "Hello.Welcome to eshop ",
  id: 0
};

const listeners = new Set();

function updateComponents() {
  for (const cb of listeners.values()) {
    cb();
  }
}

export function infoProduct(id) {
  let infos = [
    { info: "Milwakee Bucks", id: 1 },
    {
      info: "Cleveland Cavaliers",
      id: 2
    },
    { info: "Philadelphia Sixers", id: 3 },
    { info: "Toronto Raptors", id: 4 },
    { info: "Huston Rockets", id: 5 }
  ];

  if (id === 1) {
    console.log(id);
    State.info = infos[0].info;
    State.id = infos[0].id;
    updateComponents();
  }
  if (id === 2) {
    console.log(id);
    State.info = infos[1].info;
    State.id = infos[1].id;
    updateComponents();
  }
  if (id === 3) {
    console.log(id);
    State.info = infos[2].info;
    State.id = infos[2].id;
    updateComponents();
  }
  if (id === 4) {
    console.log(id);
    State.info = infos[3].info;
    State.id = infos[3].id;
    updateComponents();
  }
  if (id === 5) {
    console.log(id);
    State.info = infos[4].info;
    State.id = infos[4].id;
    updateComponents();
  }
}

export function connect(Component) {
  return class Wrapper extends React.Component {
    state = {
      info: State.info,
      id: State.id
    };

    _listener = () => {
      this.setState({
        info: State.info,
        id: State.id
      });
    };

    componentDidMount() {
      listeners.add(this._listener);
    }

    render() {
      return (
        <Component {...this.props} info={this.state.info} id={this.state.id} />
      );
    }
  };
}
