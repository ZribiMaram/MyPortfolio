import React from "react";
import tcpc20241 from "../../../src/tcpc20241.jpg"; // Import your images
import tcpc2024 from "../../../src/tcpc2024.jpg"; // Import your images
import tcpcc from "../../../src/tcpcc.jpg"; // Import your images
import tct from "../../../src/tct.jpg"; // Import your images
import {
    ImageWrapper,
    TechnologiesGrid,
    ContactWrapper,
} from "./CommunityElements";
import ScrollAnimation from "react-animate-on-scroll";

const images = [
    { id: 1, src: tcpc20241, alt: "image1" },
    { id: 2, src: tcpc2024, alt: "image2" },
    { id: 2, src: tcpcc, alt: "image4" },
    { id: 3, src: tct, alt: "image3" },
    // Add more images as needed
];
function Community() {
    return (
        <ContactWrapper id="community">
            <div className="Container">
                <div className="SectionTitle">Community life</div>
                <div className="BigCard">

                    <TechnologiesGrid>
                        {images.map((image) => (
                            <ScrollAnimation animateIn="fadeInLeft" key={image.id}>
                                <ImageWrapper>
                                    <img src={image.src} alt={image.alt} />
                                </ImageWrapper>
                            </ScrollAnimation>
                        ))}
                    </TechnologiesGrid>

                </div>

            </div>

        </ContactWrapper>
    );
}

export default Community;
