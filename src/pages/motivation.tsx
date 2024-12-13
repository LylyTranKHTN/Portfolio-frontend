import React from 'react';
import { LinkButton, Wrapper } from '../components';
import Card from '../components/Card';

const MotivationPage = () => {
  return (
    <Wrapper>
      <Card>
        <h1 className="text-4xl font-bold">Motivation</h1>
        <h3 className="text-lg">
          This is not a beautiful kind of porfolio I created this portfolio not
          only to showcase my skills and experience.
        </h3>

        <h3 className="text-lg">
          I also wanted to applied what I have learned and what I am studying
          into this project.
        </h3>

        <ul>
          <li>1. I wanted to develop my skill on BE development and DevOps</li>
          <li>
            2. I will add more features day by day, so it not the last version
            that you are seeing.
          </li>
          <li>
            3. You can change the theme of this portfolio by clicking go to{' '}
            <LinkButton href="/design">Design</LinkButton> tab.
          </li>
          <li>
            4. You can give me some advise or ideal in{' '}
            <LinkButton href="/contact">Contact</LinkButton> tab
          </li>{' '}
        </ul>
      </Card>
    </Wrapper>
  );
};

export default MotivationPage;
