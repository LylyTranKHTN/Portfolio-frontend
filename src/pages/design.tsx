import ThemeAPI from '@apis/themeAPI';
import { Button, Card, Wrapper } from '@components';
import React, { useEffect, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { Theme } from '@interfaces';

const themeAPI = new ThemeAPI();

const DesignPage = () => {
  const [themes, setThemes] = useState<Map<string, Theme>>();

  useEffect(() => {
    themeAPI.getThemes().then((themes) => {
      // save as a Map for easier access
      setThemes(new Map(themes.map((t: Theme) => [t.id, t])));
    });
  }, []);

  // update theme state when user changes the color
  const onThemeChange = (theme: Theme) => {
    setThemes(themes?.set(theme.id, theme));
  };

  const saveColor = () => {
    themeAPI.updateThemes(Array.from(themes?.values() || [])).then(() => {
      alert('Theme updated');
    });
  };

  const themeUpdateCards = themes?.entries().map(([id, theme]) => (
    <Card key={id}>
      <h2>{theme.name}</h2>
      <div className="flex items-center">
        <HexColorPicker
          color={theme.value}
          onChange={(value) => onThemeChange({ ...theme, value })}
        />
        <HexColorInput
          color={theme.value}
          onChange={(value) => onThemeChange({ ...theme, value })}
        />
      </div>
    </Card>
  ));

  console.log(themeUpdateCards);

  return (
    <Wrapper>
      <Card>
        <h1>Design My Porfolio</h1>

        <p>
          Hei! If you don't like the design of my portfolio, you can adjust it
          here.
        </p>
      </Card>

      {themeUpdateCards}

      <Card>
        <Button onClick={saveColor}>Save</Button>
      </Card>
    </Wrapper>
  );
};

export default DesignPage;
