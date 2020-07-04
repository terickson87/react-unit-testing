import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom";
import ReactTestUtils from 'react-dom/test-utils';
import TestRenderer from 'react-test-renderer';

import Button from './Button';


afterEach(cleanup);

it("renders without crashing", () => {
   const div = document.createElement("div");
   ReactDOM.render(<Button />, div);
 });

 it("renders Button Correctly 1", () => {
   const {getByTestId} = render(<Button label="click me please"/>);
   expect(getByTestId("Button")).toHaveTextContent("click me please");
 });
 
 it("renders Button Correctly 2", () => {
   const {getByTestId} = render(<Button label="save"/>);
   expect(getByTestId("Button")).toHaveTextContent("save");
 });

it("Matches Snapshot 1", () => {
   const tree = TestRenderer.create(<Button label="save"/>).toJSON();
   expect(tree).toMatchSnapshot();
})

it("Matches Snapshot 2", () => {
  const tree = TestRenderer.create(<Button label="click me please"/>).toJSON();
  expect(tree).toMatchSnapshot();
})