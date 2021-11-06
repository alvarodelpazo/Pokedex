import React from "react";
import styled from "styled-components";
import { spacing } from "../styles/settings/spacing";
import { grayscale } from "../styles/settings/colors";
import { rem } from "polished";

const SearchBar = ({ setSearch }) => {
    return(
        <SearchBarArea>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.8898 14.6524L12.0963 10.8588C12.0244 10.787 11.9307 10.7495 11.8307 10.7495H11.4182C12.4025 9.60891 12.9994 8.1246 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.1246 12.9994 9.60891 12.4025 10.7495 11.4182V11.8307C10.7495 11.9307 10.7901 12.0244 10.8588 12.0963L14.6524 15.8898C14.7993 16.0367 15.0368 16.0367 15.1836 15.8898L15.8898 15.1836C16.0367 15.0368 16.0367 14.7993 15.8898 14.6524ZM6.49968 11.4994C3.73732 11.4994 1.49993 9.26205 1.49993 6.49968C1.49993 3.73732 3.73732 1.49993 6.49968 1.49993C9.26205 1.49993 11.4994 3.73732 11.4994 6.49968C11.4994 9.26205 9.26205 11.4994 6.49968 11.4994Z" fill="#666666"/></svg>
            <SearchBarInput onChange={e => setSearch(e.target.value)}/>
        </SearchBarArea>
    );
}

const SearchBarArea = styled.div`
    display: flex;
    border: 1px solid ${grayscale.lightGray};
    border-radius: ${rem(spacing.tiny)};
    padding: ${rem(spacing.tiny)};
    width: 500px;
`;

const SearchBarInput = styled.input`
    flex: 1;
    font-size: 16px;
    margin-left: ${rem(spacing.tiny)};
    border: none;
    &:focus {
        outline: none;
    }
`;

export default SearchBar;