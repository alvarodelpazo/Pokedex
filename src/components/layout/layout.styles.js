import styled from "styled-components";
import { rem } from "polished";

export const MainContainer = styled.main`
    max-width: ${rem(1300)};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`;

export const HeaderContainer = styled.div`
    max-width: ${rem(1300)};
    display: flex;
    flex: 1;
    margin: 0 auto;
`;

export const FooterContainer = styled.div`
    max-width: ${rem(1300)};
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;