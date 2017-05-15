import React from 'react';
import Navigation from '../navigation/Navigation'
import Body from '../body/Body'

class Home extends React.Component {

  render() {
    return (
      <div>
          <h1>{this.props.startupName}</h1>
          <Navigation navs={this.props.navs} />
          <Body />
      </div>
    );
  }
}

export default Home;
