import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('button can be found', () => {
  render(<App />)
  const button = screen.getByText('Add')
  expect(button).toBeInTheDocument();
})

test('button can be clicked', () => {
  render(<App />)
  const button = screen.getByText('Add');
  fireEvent.click(button)
})

test('add todo desc', () => {
  render(<App />)
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Get coffee' } })
})

test('add todo date', () => {
  render(<App />)
  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '11.05.2022' } })
})

test('add todo', () => {
  render(<App />)
  const desc = screen.getByPlaceholderText('Description');
  fireEvent.change(desc, { target: { value: 'Get coffee' } })

  const date = screen.getByPlaceholderText('Date');
  fireEvent.change(date, { target: { value: '11.05.2022' } })

  const button = screen.getByText('Add')
  fireEvent.click(button);

  const tableCell = screen.getByText(/get coffee/i)
  expect(tableCell).toBeInTheDocument();
})