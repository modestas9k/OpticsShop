
import styled from "styled-components";

export const Card = styled.div`
  width: calc(20% - 20px);
  box-sizing: border-box;
  margin: 10px;
  padding: 10px;
  flex-wrap: wrap;
  &:hover {
   box-shadow: 5px 5px 10px 4px rgba(0,0,0,0.33);
  }
  @media (max-width: 1020px) {
    width: calc(25% - 20px);
  }
  @media (max-width: 860px) {
    width: calc(33.33% - 20px);
  }
  @media (max-width: 670px) {
    width: calc(50% - 20px);
  }
  @media (max-width: 440px) {
    width: calc(100% - 20px);
  }
  `;
export const Image = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 230px;
`;

export const ClickBox = styled.div`
`;
export const Title = styled.h3`
  display: block;
  font-weight: 200;
  margin-right: 10px;
`;
export const Price = styled.h4`
  display: block;
  margin-top: 10px;
  font-weight: 400;
`;
export const Start = styled.span`
  font-weight: 200;
  font-size: 0.9em;
  color: #666;;
`;