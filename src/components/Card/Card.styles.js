import styled from "styled-components";
import { colors, grayscale } from "../../styles/settings/colors";
import { spacing } from  "../../styles/settings/spacing";
import { rem } from "polished";
import { size, height } from "../../styles/settings/font";
 
export const CardContainer = styled.div`
    position: relative;
    max-height: ${rem(400)};
    max-width: ${rem(300)};
    background-color: ${(props) => colors[props.backgroundColor]}; 
    border-radius: ${rem(spacing.small)};
    box-shadow: 5px 5px 10px ${grayscale.lightGray};
    z-index: 1;
`;

export const CardArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: ${rem(spacing.base)};
`;

export const CardTitle = styled.div`
    display: flex;
    width: 100%;
`;

export const TitleName = styled.h2`
    flex: 1;
    align-items: flex-start;
    font-family: 'Poppins',sans-serif;
    font-size: ${rem(size.xlarge)};
    line-height: ${rem(height.large)};
    font-weight: bold;
    color: white;
    text-transform: capitalize;
`;

export const TitleNumber = styled.h3`
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-size: ${rem(size.larger)};
    line-height: ${rem(height.large)};
    font-weight: bolder;
    color: white;
`;

export const PokemonImage = styled.div`
    border: 0;
    margin-bottom: ${rem(spacing.xtiny)};
`;

export const Image = styled.div`
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 150px;
    background-size: cover;
    z-index: 3;
`;

export const CardInfoArea = styled.div`
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    height: 240px;
    width: 290px;
    background: white;
    border-radius: ${rem(spacing.small)};
    z-index: -1;
`;

export const InformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Poppins', sans-serif;
    margin-top: ${rem(spacing.mini)};
`;

export const InformationHeader = styled.h3`
    justify-content: center;
    align-items: center;
    color: ${(props) => colors[props.backgroundColor]};
    font-size: ${rem(size.large)};
    line-height: ${rem(height.small)};
    font-weight: bold;
`;

export const InformationMeasurements = styled.div`
    display: flex;
    margin-top: ${rem(spacing.mini)};
`;

export const Measurements = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: ${rem(spacing.small)};
`;

export const Measurement = styled.div`
    display: flex;
    justify-content: space-around;
`;

export const MeasurementType = styled.h6`
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    text-align: center;
    margin-top: ${rem(spacing.tiny)};
    color: ${grayscale.mediumGray};
    font-size: ${rem(size.medium)};
    line-height: ${rem(height.small)};
`;

export const Divider = styled.hr`
    border: 1px solid ${grayscale.lightGray};
    height: 48px;
    margin: 0px ${rem(spacing.base)};
`;

export const MeasurementValue = styled.h5`
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
    margin-left: ${rem(spacing.tiny)};
    font-size: ${rem(size.large)};
    line-height: ${rem(height.small)};
`;

export const Description = styled.h5`
    font-size: 10px;
    line-height: 16px;
    margin-top: ${rem(spacing.mini)};
    font-family: 'Poppins', sans-serif;
    font-size: ${rem(size.small)};
    line-height: ${rem(height.small)};
`;

export const TagArea = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
`;