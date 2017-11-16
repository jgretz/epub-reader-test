import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sidebar, Menu, Icon} from 'semantic-ui-react';
import autobind from 'autobind-decorator';

import {toggleVisible} from '../actions';
import {setActive} from '../../reader/actions';

import {visibleSelector} from '../selectors';
import {booksSelector} from '../../reader/selectors';

class SidebarLeftOverlay extends Component {
  @autobind
  renderBooks() {
    return this.props.books.map((book, index) => {
      const handleClick = () => {
        this.props.toggleVisible();
        this.props.setActive(index);
      };

      return (
        <Menu.Item key={book.file} name={book.title} className="clickable" onClick={handleClick}>
          <Icon name="book" />
          {book.title}
        </Menu.Item>
      );
    });
  }

  render() {
    return (
      <Sidebar.Pushable>
        <Sidebar as={Menu} animation="overlay" width="thin" visible={this.props.visible} icon="labeled" vertical inverted>
          {this.renderBooks()}
        </Sidebar>
        <Sidebar.Pusher className="container">
          {this.props.children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}

const mapStateToProps = state => ({
  visible: visibleSelector(state),
  books: booksSelector(state),
});

export default connect(mapStateToProps, {setActive, toggleVisible})(SidebarLeftOverlay);
