import React from 'react';

import { Section, Container } from '@components/global';

import FaqItem from '@common/FaqItem';
import ExternalLink from '@common/ExternalLink';

const FAQS = [
  {
    title: 'I am from out of town.  Where should I fly into?',
    content: () => (
      <>
        We recommend flying into Miami International Airport or Ft Lauderdale International Airport.  From there, Key West is just a few hours drive south.  Alternatively, it is possible to fly directly to Key West or Marathon, although these tickets are often times more expensive.
      </>
    ),
  },
  {
    title: 'Is this wedding handicap accessible?',
    content: () => (
      <>
        The ceremony, taking place on The Argo Navis, is completely wheelchair accessible.  The reception, taking place at First Flight Restaurant & Brewery, is <strong>not</strong> wheelchair accessible.
      </>
    ),
  },
  {
    title: 'Where is there to do down there?',
    content: () => (
      <>
        The Florida Keys are world-famous for sport fishing.  Miami is world-famous for its beaches.  Key West is world-famous for its drinking.
      </>
    ),
  },
  {
    title: 'Who built this bad ass website?',
    content: () => (
      <>
        Matt did.
      </>
    ),
  },
];

const Faq = () => (
  <Section id="faq">
    <Container>
      <h1 style={{ marginBottom: 40 }}>Frequently Asked Questions</h1>
      <div>
        {FAQS.map(({ title, content }) => (
          <FaqItem title={title} key={title}>
            {content()}
          </FaqItem>
        ))}
      </div>
    </Container>
  </Section>
);

export default Faq;
