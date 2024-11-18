import ThemeAPI from '@apis/themeAPI';
import { Button, Card, Wrapper } from '@components';
import React, { useEffect, useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { Theme } from '@interfaces';

const themeAPI = new ThemeAPI();

const DesignPage = () => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    themeAPI
      .getThemes()
      .then((themes) => {
        setThemes(themes);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load themes');
        setLoading(false);
      });
  }, []);

  const onThemeChange = (theme: Theme) => {
    setThemes((prevThemes) =>
      prevThemes.map((t) => (t.id === theme.id ? theme : t))
    );
  };

  const saveColor = () => {
    themeAPI
      .updateThemes(themes)
      .then(() => {
        alert('Theme updated');
      })
      .catch(() => {
        alert('Failed to update theme');
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrapper>
      <Card>
        <h1>Design My Portfolio</h1>
        <p>
          Hei! If you don't like the design of my portfolio, you can adjust it
          here.
        </p>
      </Card>

      <Card>
        <div className="flex">
          {themes.map((theme) => (
            <div className="pr-6" key={theme.id}>
              <h3 className="text-primary">{theme.title}</h3>
              <i>{theme.description}</i>
              <div className="">
                <HexColorPicker
                  color={theme.value}
                  onChange={(value) => onThemeChange({ ...theme, value })}
                />
                <HexColorInput
                  color={theme.value}
                  onChange={(value) => onThemeChange({ ...theme, value })}
                  prefixed
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <Button onClick={saveColor}>Save</Button>
      </Card>
    </Wrapper>
  );
};

export default DesignPage;
