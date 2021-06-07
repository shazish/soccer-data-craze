import React from "react";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Game from './index';

let container = null;
let sqElement;

// https://testing-library.com/docs/react-testing-library/intro
// Helper vid: https://www.youtube.com/watch?v=3e1GHCA3GP0

beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
  render(<Game />, container);  
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('Render tic toc board', () => {
  // render(<Game />, container);

  sqElement = screen.getByTestId(/aa0/i);
  expect(sqElement).toBeInTheDocument();

});

test('Check board functionality', () => {
  sqElement = screen.getByTestId(/aa0/i);
  sqElement.click();
  expect(sqElement).toHaveTextContent("X");
  sqElement = screen.getByTestId(/aa1/i);
  sqElement.click();
  expect(sqElement).toHaveTextContent("O");
});

test('Check board winning situation', () => {
  sqElement = screen.getByTestId(/aa0/i);
  sqElement.click();
  sqElement = screen.getByTestId(/aa1/i);
  sqElement.click();    
  sqElement = screen.getByTestId(/aa3/i);
  sqElement.click();
  sqElement = screen.getByTestId(/aa4/i);
  sqElement.click();
  sqElement = screen.getByTestId(/aa6/i);
  sqElement.click();
  sqElement = screen.getByTestId(/aa7/i);
  sqElement.click();
  expect(sqElement).toHaveTextContent('');
  sqElement = screen.getByTestId(/status/i);
  expect(sqElement).toHaveTextContent('Winner: X');
});