import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from '@mui/material'


import React from 'react'

const Records = () => {
    return (
        <>
            <Typography variant="h3" align="center">Financial Records</Typography>
            <Paper sx={{width : '100%', overflow: 'hidden'}}>
                <TableContainer sx={{maxHeight: 440, mt: "50px"}}>
                    <Table stickyHeader>
                        <TableHead>
                        <TableRow>
                            <TableCell key="id">
                                Id
                            </TableCell>
                            <TableCell key="name">
                                Name
                            </TableCell>
                            <TableCell key = "amount">
                                Amount
                            </TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell key="id">1</TableCell>
                                <TableCell key="name">Test</TableCell>
                                <TableCell key="amount">$5.00</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                </TableContainer>
            </Paper>
        </>
    )
}
export default Records
