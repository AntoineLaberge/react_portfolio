import React, { useMemo } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/customButton.css"
import { Carousel } from "react-bootstrap";

interface Props {
    images: any;
  }
  
const CustomCarousel: React.FC<Props> = ({ 
    images
    }) => {

    const items = useMemo(
        () => 
            images.map((img : any, id : number) =>  
                <Carousel.Item key={id}>
                    <img
                        className="d-block"
                        src={img}
                        alt=""
                        style={{margin: "auto", height: "500px", width: "auto"}}
                    />
                </Carousel.Item>)
        , [images]
    )
    

    return (
        <Carousel fade>
            
            {items}

        </Carousel>
    );
  }
  
  export default CustomCarousel;