import { Box, useMediaQuery, useTheme } from "@mui/material"
import Lottie from "react-lottie"
import antLoad from '../assets/running-ant.json'

export const Loading = () => {
    const theme = useTheme()
    const smDown = useMediaQuery(theme.breakpoints.down('sm'))
    let Width = smDown ? 200 : 400
    let Height = smDown ? 200 : 400


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: antLoad,
    }
    return (
        <Box sx={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Lottie
                options={defaultOptions}
                width={Width} height={Height}
            />
        </Box >
    )
}