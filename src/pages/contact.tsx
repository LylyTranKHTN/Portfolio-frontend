import React from 'react';
import { Summary, Wrapper } from '@components';

const ContactPage = () => {
  return (
    <Wrapper>
      <Summary title="Contact">
        You can contact me at{' '}
        <strong>
          <a aria-label="email" href="mailto:tranthilyly.khtnk15@gmail.com">
            Gmail
          </a>
        </strong>
      </Summary>
    </Wrapper>
  );
};

export default ContactPage;
