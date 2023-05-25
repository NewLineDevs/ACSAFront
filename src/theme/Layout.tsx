import React from 'react'
import { Header } from '../shared/components/Header'
import { Box } from '@mui/material'
import { ILayoutProps } from '../shared/interfaces/interfaces'

export const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
        <>
            <Box height="100%" display="flex" flexDirection="column">
                <Box>
                    <Header />
                </Box>
                <Box flex={1} overflow="auto" mt="50px" padding='2px'>
                    {children}
                </Box>
            </Box>
        </>
    )
}
