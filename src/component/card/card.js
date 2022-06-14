import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";


export default function MediaCard({
    id,
    imageThumbnail,
    imageAlt,
    title,
    description
}) {

    let navigate = useNavigate();
    const openGuide = useCallback((dishId) => {
        return async (e) => {
            navigate("/Guide", { state: dishId });
        };
    });

    return (
        <Card sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                // component="img"
                sx={{
                    // 16:9
                    pt: '56.25%',
                }}
                image={imageThumbnail}
                alt={imageAlt}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" noWrap={true}>
                    {title}
                </Typography>
                <Typography noWrap={true}>
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" onClick={openGuide(id)} >View cooking recipe</Button>
            </CardActions>
        </Card>
    );
}
