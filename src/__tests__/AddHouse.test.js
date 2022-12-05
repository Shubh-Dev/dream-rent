import React from "react";
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import AddHouse from "../components/AddHouse";

describe('AddHouse', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(<AddHouse />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});