import { posterImages } from "../../utils/image"
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Image from "mui-image";
import { width } from "@mui/system";


const Items = ({ props }) => {

    return (

        <Image fit='cover' src={props.image} alt="" />

    )
};



const ImageCarousel = () => {
    return (

        <Carousel >
            {
                posterImages.map((item) => {

                    return (
                        <Items key={item.id} props={item} />

                    );

                })
            }
        </Carousel>

    );
}

export default ImageCarousel;