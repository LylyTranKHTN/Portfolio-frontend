import DesignPage from './design';
import ThemeAPI from '@apis/themeAPI';
import { Loading, Wrapper } from '@components';
import React, { useEffect, useState } from 'react';
import { Theme } from '@interfaces';

const themeAPI = new ThemeAPI();

const DesignContainer = () => {
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

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Wrapper>
      {loading ? (
        <Loading />
      ) : (
        <DesignPage themes={themes} onThemeChange={onThemeChange} />
      )}
    </Wrapper>
  );
};

export default DesignContainer;
