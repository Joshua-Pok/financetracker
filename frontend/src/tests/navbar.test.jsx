import {describe, it, expect} from "vitest";
import {render, screen } from "@testing-library/react";
import Records from '../components/Records.jsx'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import react from 'react';

describe("table renders correctly", () => {
    it("renders table", () => {
        render(<Records/>);

        expect(screen.getByText('Id')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Amount')).toBeInTheDocument();
    })
})
