import React from 'react';
import { Wrapper } from '../components';
import Card from '../components/Card';

const MotivationPage = () => {
  return (
    <Wrapper>
      <Card>
        <h1 className="text-4xl font-bold">Motivation</h1>
        <p className="text-lg">
          I am a software engineer with a passion for web development. I have
          experience with React, Node.js, and other web technologies. I am
          always eager to learn new things and improve my skills. In my free
          time, I enjoy reading, hiking, and playing video games.
        </p>
      </Card>
    </Wrapper>
  );
};

export default MotivationPage;
