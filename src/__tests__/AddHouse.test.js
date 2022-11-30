import React from "react";
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import AddHouse from "../components/AddHouse";


describe('AddHouse', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(<AddHouse />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders the AddHouse component', () => {
        render(<AddHouse />);
        expect(screen.getByText('Add House')).toBeInTheDocument();
    });
    }
);