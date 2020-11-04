import styled from "styled-components";

export const Section = styled.section`
  background: #${(props) => props.background};
  padding-top: 1em;
`;

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;
