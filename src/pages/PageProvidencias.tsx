
import { Box } from "@mui/material"
import { Layout } from "../theme/Layout"
import { ShowProvidencias } from "../shared/components/ShowProvidencias"

export const PageProvidencias = () => {

    return (
        <>
            <Layout >
                <Box >
                    <ShowProvidencias />
                </Box>
            </Layout>
        </>
    )
}