import React from "react";
import styled from "styled-components";
import { spacing } from "../styles/settings/spacing";
import { grayscale } from "../styles/settings/colors";
import { rem } from "polished";
import { FooterContainer } from "./layout/layout.styles";

const Footer = () => {
    return(
        <FooterArea>
            <FooterContainer>
                <FooterImage src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
                <FooterDivider />
                <FooterImage src="descarga.png"/>
            </FooterContainer>
        </FooterArea>
    );
}

const FooterArea = styled.footer`
    height: 62px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background-color: white;
    z-index: 3;
    border-top: 1px solid ${grayscale.lightGray};
`;

const FooterImage = styled.img`
    margin: ${rem(spacing.small)};
    height: 42px;
`;

const FooterDivider = styled.hr`
    height: 36px;
    width: 1px;
    border: 1px solid ${grayscale.lightGray};
    margin-left: 0;
    margin-right: 0; 
`;

export default Footer;