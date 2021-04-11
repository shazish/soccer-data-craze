import React from "react";
import { render, screen } from '@testing-library/react';
import { unmountComponentAtNode } from "react-dom";
import Game from './index';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test('render tic toc board', () => {
  render(<Game />, container);
  const sqElement = screen.getByTestId(/aa0/i);
  expect(sqElement).toBeInTheDocument();
});