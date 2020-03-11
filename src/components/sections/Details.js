import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const Details = () => (
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
      <Section className={`section`} id="details" accent>
        <Container className={`container`}>
          <div class="tile is-ancestor">
            <div class="tile">
              <div>
                <h2 class="is-size-2">Reservations and Parking</h2>
                <p>Although we do not have a room block for the wedding, we recommend checking both traditional hotels and AirBNB options for your stay in Key West. Many hotels offer parking for guests, but you may also be able to find free parking on the residential streets in central Key West. If you’re staying downtown near the wedding events, you should be able to walk or take the local trolley to all the local hot spots.</p>
                <p>**Note – Key West is always a popular destination, so we encourage you to book your reservations as early as possible.</p>
              </div>
            </div>
            <div class="tile">
              <div>
                <h2 class="is-size-2">Honeymoon/House fund</h2>
                <p>As we begin our lives together, we are especially grateful for support from our loved ones. We recognize how lucky we are to be blessed with the necessities of everyday life, and have decided to instead plan an unforgettable honeymoon to ______ to celebrate the beginning of our married life together. If you’d like to help us along on our next adventure you can contribute to our honeymoon fund below.</p>
                <p>The biggest gift of all, however, is your presence on our Big Day. Thank you for your love, and we can’t wait to share our honeymoon adventures with you!</p>
              </div>
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

export default Details;
