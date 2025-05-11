import "./Gallery.css";


import waterfall from "./images/nature/waterfall.png";
import arctic from "./images/nature/arctic.png";
import desert from "./images/nature/desert.png";
import ocean from "./images/nature/ocean.png";
import mountains from "./images/nature/mountains.png";
import roads from "./images/nature/roads.png";
import trees from "./images/nature/trees.png";

import f1 from "./images/modern/f1.png";
import ferrari from "./images/modern/ferrari.png";
import nyc from "./images/modern/nyc.png";
import pinknblue from "./images/modern/pinknblue.png";
import telephone from "./images/modern/telephone.png";

import tylerdurden from "./images/cinematic/tylerdurden.png";
import hatman from "./images/cinematic/hatman.png";
import oldmancar from "./images/cinematic/oldmancar.png";
import wiseman from "./images/cinematic/wiseman.png";
import guitarguy from "./images/cinematic/guitarguy.png";
import { useEffect, useState, useRef } from "react";



const Gallery = () => {
    const nature = [waterfall, arctic, desert, ocean, mountains, roads, trees];
    const modern = [f1, ferrari, nyc, pinknblue, telephone];
    const cinematic = [tylerdurden, hatman, oldmancar, wiseman, guitarguy];

    const clickHandle = (e) => {
        if(e.target.zoom) {
            e.target.style.animationName = "zoomIn"
        }
        else {
            e.target.style.animationName = "zoomOut"
        }
        e.target.zoom = !e.target.zoom;
    }
    
    return ( 
        <div className = "GalleryBody">
        <div className = "Gallery-Header">
            Best Shots of Peter McKinnon - 2025
        </div>
        <div className = "Gallery-Images">
            <div>
                <h2>
                Nature
            </h2>
            <div className = "Image-Scroller" style = {{display: "flex", flexDirection: "row"}}>
                {
                    nature.map((image, index) => {
                        return (
                                <img src = {image} alt = "Nature" className = "image-small" onClick = {clickHandle} id = {'1' + index} zoom = {0}/>
                        )
                    })
                }
                </div>
            </div>
            <h2>
                Modern
            </h2>
                 <div className = "Image-Scroller">
                {
                    modern.map((image, index) => {
                        return (
                                <img src = {image} alt = "Nature" className = "image-small" onClick = {clickHandle} id = {'2' + index} zoom = {0}/>
                        )
                    })
                }
                </div>
            <h2>
                Cinematic
            </h2>
                 <div className = "Image-Scroller">
                {
                    cinematic.map((image, index) => {
                        return (
                                <img src = {image} alt = "Nature" className = "image-small" onClick = {clickHandle} id = {'3' + index} zoom = {0}/>
                        )
                    })
                }
                </div>
        </div>
        <div style = {{textAlign: "center", fontSize: "12px", color: "gray", marginTop: "20px"}}>
            Posted by Rishab Kundu, 09/05/2025, 08:37 PM
        </div>
        </div>
     );
}
 
export default Gallery;