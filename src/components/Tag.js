import React from "react";
import styled from "styled-components";
import { spacing } from "../styles/settings/spacing";
import { rem } from "polished";
import {size, height} from "../styles/settings/font";

const Tag = (props) => {
    return(
        <TagArea color={props.color}>{props.type}</TagArea>
    );
}

const TagArea = styled.span`
    display: inline-block;
    width: fit-content;
    padding: ${rem(spacing.xtiny)} ${rem(spacing.tiny)};
    border-radius: ${rem(spacing.small)};
    font-family: 'Poppins', sans-serif;
    font-size: ${rem(size.medium)};
    line-height: ${rem(height.small)};
    font-weight: bold;
    color: white;
    font-weight: bold;
    background: ${props => props.color || "red"};
    text-transform: capitalize;
`;

export default Tag;