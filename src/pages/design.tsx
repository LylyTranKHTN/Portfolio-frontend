import { Card, Wrapper } from '@components';
import React, { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';

const DesignPage = () => {
  const [primaryColor, setPrimaryColor] = useState('#aabbcc');
  const [primaryLightColor, setPrimaryLightColor] = useState('#ddeeff');

  return (
    <Wrapper>
      <Card>
        <h1>Design My Porfolio</h1>

        <p>
          Hei! If you don't like the design of my portfolio, you can adjust it
          here.
        </p>
      </Card>

      <Card>
        <p>Choose your favorite color:</p>
        <HexColorPicker color={primaryColor} onChange={setPrimaryColor} />
        <HexColorInput
          color={primaryColor}
          onChange={setPrimaryColor}
          placeholder="Type a color"
          prefixed
          alpha
        />
      </Card>

      <Card>
        <p>Choose your secondary color:</p>
        <HexColorPicker
          color={primaryLightColor}
          onChange={setPrimaryLightColor}
        />
        <HexColorInput
          color={primaryLightColor}
          onChange={setPrimaryLightColor}
          placeholder="Type a color"
          prefixed
          alpha
        />
      </Card>
    </Wrapper>
  );
};

export default DesignPage;
