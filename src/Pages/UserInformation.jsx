import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from "@mui/material/Button";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import image from '../Assets/man.png'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Root = styled(Box)({
    margin: 0,
    padding: 0,
    "& .mainContainer": {
        padding: "20px",
        backgroundColor: "#f4f7fe",
    }

});

export default function UserInfromation() {
    return (
        <Root>
            <Box className='mainContainer'>

                <Box sx={{ flexGrow: 1, backgroundColor: "#ffffff" }}>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <Button variant="text"><KeyboardBackspaceIcon /> Back</Button>
                        <Button variant="contained">Edit Information</Button>
                    </Box>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Item sx={{
                                width: "335px",
                                height: "422px"
                            }}>
                                <img src={image} width={100} alt="" />
                            </Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>xs</Item>
                        </Grid>
                        <Grid item xs={4}>
                            <Item>x</Item>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Root>

    );
}
