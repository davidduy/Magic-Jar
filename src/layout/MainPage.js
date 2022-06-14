import React, { useState, useEffect } from 'react';
import axios from "axios"

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import TextField from "@mui/material/TextField";
import Carousel from "../component/carousel/carousel"
import Card from '../component/card/card';

export default function Album() {

    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState("");

    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: { from: '0', size: '30', tags: 'under_30_minutes' },
        headers: {
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
            'X-RapidAPI-Key': '71d8ac9db8msh765b6e2b1b48a92p1961f6jsn6b2d3bb049ed'
        }
    };

    useEffect(() => {

        const getMenu = async () => {
            await axios.request(options).then(response => {
                setData(response.data.results);
            })
        }
        getMenu();

    }, []);

    //Search by title
    const filteredData = data.filter((el) => {
        //if no input the return the original
        if (inputText.input === '') {
            return el;
        }
        //return the item which contains the user input
        else {
            return el.name.toLowerCase().indexOf(inputText) > -1
        }
    })
    return (
        <div>
            <Carousel />
            <div className='container'>
                <div className="d-flex justify-content-center text-center" >
                    <TextField
                        style={{
                            width: "50%",
                            fontSize: "50px"
                        }}
                        id="outlined-basic"
                        onChange={(e) => setInputText(e.target.value.toLowerCase())}
                        variant="standard"
                        label="Search by name of dish"
                        fullWidth
                        InputProps={{ style: { fontSize: 20 } }}
                        InputLabelProps={{ style: { fontSize: 20 } }}
                    />
                </div>
            </div>

            <Container sx={{ py: 8 }} maxWidth="lg">

                <Grid container spacing={4}>
                    {filteredData.map((item) => (
                        <Grid item key={item.id} xs={12} sm={6} md={4}>
                            <Card
                                id={item.id}
                                imageThumbnail={item.thumbnail_url}
                                imageAlt={item.name}
                                title={item.name}
                                description={item.description}
                            />
                        </Grid>
                    ))}
                </Grid>
                <hr />
            </Container>
        </div>
    );
}
