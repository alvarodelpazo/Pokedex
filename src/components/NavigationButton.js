import React from "react";
import styled from "styled-components";
import { rem } from "polished";
import { spacing } from "../styles/settings/spacing";
import { grayscale } from "../styles/settings/colors";
import { size, height } from "../styles/settings/font";
import { Link } from "react-router-dom";

const NavigationButton = ({ page, content }) => {

    return(
        <>
            <Link to={page}>
                <Button>{content}</Button>
            </Link>
        </>
    );
}

const Button = styled.a`
    padding: ${rem(spacing.mini)} ${rem(spacing.medium)};
    border: 1px solid white;
    border-radius: ${rem(spacing.small)};
    box-shadow: 5px 5px 10px ${grayscale.lightGray};
    background: ${grayscale.darkGray};
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: ${rem(size.larger)};
    font-weight: bold;
    line-height: ${rem(height.large)};
    cursor: pointer;
    margin: ${rem(spacing.xtiny)};
    :hover {
        color:${grayscale.darkGray};
        background-color: white;
        border: 1px solid black;
        transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
`;

export default NavigationButton;