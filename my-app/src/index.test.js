import React from "react";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Game from './index';

let container = null;
let sqElement;

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