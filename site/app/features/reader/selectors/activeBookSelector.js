import {createSelector} from 'reselect';

import activeSelector from './activeSelector';
import booksSelector from './booksSelector';

export default createSelector(activeSelector, booksSelector, (active, books) => books[active]);
