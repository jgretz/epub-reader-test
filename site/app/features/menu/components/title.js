import React from 'react';
import {connect} from 'react-redux';
import {Icon} from 'semantic-ui-react';

import {toggleVisible} from '../actions';

import {visibleSelector} from '../selectors';
import {activeBookSelector} from '../../reader/selectors';

const title = ({visible, book, toggleVisible}) => {
  const iconName = visible ? 'arrow left' : 'sidebar';

  return (
    <div className="menu">
      <Icon name={iconName} className="clickable" onClick={toggleVisible} />

      <h1>
        {book.title}
      </h1>
    </div>
  );
};

const mapStateToProps = state => ({
  visible: visibleSelector(state),
  book: activeBookSelector(state),
});

export default connect(mapStateToProps, {toggleVisible})(title);
