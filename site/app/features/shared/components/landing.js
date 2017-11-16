import React, {Component} from 'react';
import {ReactReader} from 'react-reader';

// https://s3-eu-west-1.amazonaws.com/react-reader/alice.epub

export default class Landing extends Component {
  render() {
    return (
      <div style={{position: 'relative', height: '100%'}}>
        <ReactReader
          url={'http://localhost:4004/books/life-on-the-mississippi.epub'}
          title={'Test'} />
      </div>
    );
  }
}
