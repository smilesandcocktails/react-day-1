import React from 'react';

class Navigation extends React.Component {

  render() {
    console.log(`this is from home ${this.props.navs}`)
    let navList = this.props.navs.map ((item, index) => {
        return <li key={index}>{item}</li>
      })

    return (
      <div>
        <ul>
          {navList}
        </ul>
      </div>
    );
  }

}

export default Navigation;
