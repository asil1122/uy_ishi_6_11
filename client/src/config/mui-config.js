import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 320,
            md: 950,
            lg: 1200,
            xl: 1536,
        },
    },
    components: {
        MuiContainer: {
            styleOverrides: {
                maxWidthXs: {
                    maxWidth: "1300px !important",
                },
                maxWidthXl: {
                    maxWidth: "1144px !important",
                },
                maxWidthLg: {
                    maxWidth: "1400px !important",
                }
            },
        },
    },
});
