import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        darkgreen: "#25475E",
        lightgreen: "#5C89A8",
        palegreen: "#A6F0D6",
        coolgreen: "#7FD684",
    }
}

const Theme = ({children}) => {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
}

export default Theme
