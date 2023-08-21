import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/styles/theme'
import '@/styles/prism.css'

const Website = ({ Component, pageProps }) => {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default Website
