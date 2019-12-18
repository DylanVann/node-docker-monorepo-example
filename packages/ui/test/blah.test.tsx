import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sum } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Sum a={2} b={2} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
