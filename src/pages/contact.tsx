import React from 'react';
import { Card, Summary, Wrapper } from '@components';

const ContactPage = () => {
  return (
    <Wrapper>
      <Card>
        <h1>About Me</h1>
        <h3>Hi There! Thanks for visiting my porfolio</h3>
        <p className="pb-2 italic">
          I am a software engineer with a passion for web development. I have
          experience with React, Node.js, and other web technologies. I am
          always eager to learn new things and improve my skills.
        </p>
        <p>
          In my free time, I enjoy reading, hiking, and playing video games.
        </p>

        <p className="pb-2 italic">
          Here is my resume for more details about my experience and skills:
          <a
            href={import.meta.env.VITE_PUBLIC_URL + '/resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
          >
            View my resume
          </a>
        </p>
      </Card>
      <Summary title="Contact" disabledReadMore>
        <ul>
          <li>
            <a aria-label="email" href="mailto:tranthilyly.khtnk15@gmail.com">
              Gmail
            </a>
          </li>
          <li>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/ly-ly-tran-9a17791ab/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a aria-label="github" href="https://github.com/LylyTranKHTN">
              Github
            </a>
          </li>
        </ul>
      </Summary>
    </Wrapper>
  );
};

export default ContactPage;
