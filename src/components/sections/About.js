import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const About = () => (
  <StaticQuery
    query={graphql`
      query {


        ceremony_argo: file(
          sourceInstanceName: { eq: "ceremony" }
          name: { eq: "argo" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        reception_firstflight: file(
          sourceInstanceName: { eq: "reception" }
          name: { eq: "firstflight" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_fast: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "fast" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_learn: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "learn_yourself" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }

        art_ideas: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "ideas" }
        ) {
          childImageSharp {
            fluid(maxWidth: 760) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section className={`section`} id="about">
        <Container className={`container`}>
          <div class="columns">
            <div class="column">
              <h2 class="is-size-2">The wedding</h2>
                <p>The ceremony will take place on the Argo Navis. [pic of Argo from website] We will be leaving the dock at 5:00pm and having a short ceremony and cocktail hour at sail.</p>
                <p>Bight Marina 0, Margaret St, Key West, FL 33040</p>
            </div>
            <div class="column">
              <Art>
                <Img fluid={data.ceremony_argo.childImageSharp.fluid} />
              </Art>
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <h2 class="is-size-2">The reception</h2>
              <p>The reception will be held at the First Flight Island Restaurant and Brewery starting at 7:30. Join us upstairs in the Tree-Top Deck for dinner, drinks and dancing!</p>
              <p>301 Whitehead St, Key West, FL 33040</p>
            </div>
            <div class="column">
              <Art>
                <Img fluid={data.reception_firstflight.childImageSharp.fluid} />
              </Art>
            </div>
          </div>
        </Container>
      </Section>
    )}
  />
);

const Grid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-gap: 40px;
  text-align: right;
  align-items: center;
  justify-items: center;
  margin: 24px 0;

  ${props =>
    props.inverse &&
    `
    text-align: left;
    grid-template-columns: 2fr 3fr;
  `}

  h2 {
    margin-bottom: 16px;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    text-align: left;
    margin-bottom: 96px;

    &:last-child {
      margin-bottom: 24px;
    }

    ${props =>
      props.inverse &&
      `
        ${Art} {
          order: 2;
        }
    `}
  }
`;

const Art = styled.figure`
  margin: 0;
  max-width: 380px;
  width: 100%;
`;

export default About;
