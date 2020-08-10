import React, { Component } from 'react';
//import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import Footer from './Footer';
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu />
        <div class="container">
        {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
