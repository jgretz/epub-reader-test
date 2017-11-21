import React from 'react';
import {connect} from 'react-redux';
import {ReactReader} from 'truefit-react-reader';

import {activeBookSelector} from '../selectors';
import {makeBookUrl} from '../services';

const reader = ({book}) => (
  <div className="container noselect reader">
    <ReactReader
      key={book.file} // this key is essential to force a remount of the reader so the underlying epub.js is properly reloaded
      url={makeBookUrl(book.file)}
      swipeable
      showToc={false} />
  </div>
);

const mapStateToProps = state => ({
  book: activeBookSelector(state),
});

export default connect(mapStateToProps)(reader);
