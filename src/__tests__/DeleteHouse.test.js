import React from "react";
import '@testing-library/jest-dom';
import TestRenderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import DeleteHouse from "../components/DeleteHouse";

describe('DeleteHouse', () => {
    it('renders correctly', () => {
        const tree = TestRenderer.create(<DeleteHouse />).toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('renders the DeleteHouse component', () => {
        render(<DeleteHouse />);
        expect(screen.getByText('DELETE HOUSE')).toBeInTheDocument();
    });
    }
);