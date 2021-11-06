import React from "react";
import NavigationButton from "../components/NavigationButton";
import styled from "styled-components";
import { spacing } from "../styles/settings/spacing";
import { rem } from "polished";

function PokemonData() {

    return (
        <>
            <ButtonArea>
                <NavigationButton page="/" content="Return"></NavigationButton>
            </ButtonArea>
        </>
    );
}

const ButtonArea = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${rem(spacing.large)};
    padding-bottom: ${rem(spacing.large)};
`;

export default PokemonData;