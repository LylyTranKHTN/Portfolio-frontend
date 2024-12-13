import ThemeAPI from '@apis/themeAPI';
import { Button, Card } from '@components';
import React, { useState } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { Theme } from '@interfaces';
import { useAlert } from '../../contexts/alertContext';

const themeAPI = new ThemeAPI();

interface DesignPageProps {
  themes: Theme[];
  onThemeChange: (theme: Theme) => void;
}

const DesignPage = ({ themes, onThemeChange }: DesignPageProps) => {
  const [isSaving, setIsSaving] = useState(false);

  const alert = useAlert();

  const saveColor = () => {
    setIsSaving(true);
    themeAPI
      .updateThemes(themes)
      .then(() => {
        alert.showAlert(
          'success',
          'Theme updated successully! Reload the page if you with to change theme'
        );
        setIsSaving(false);
      })
      .catch(() => {
        alert.showAlert('error', 'Failed to update theme');
        setIsSaving(false);
      });
  };

  return (
    <div>
      <Card>
        <h1>Design My Portfolio</h1>
        <p>
          Hei! If you don't like the design of my portfolio, you can adjust it
          here.
        </p>
      </Card>

      <Card>
        <div className="grid justify-center gap-y-5 md:grid-cols-2 md:justify-between">
          {themes.map((theme) => (
            <div className="w-fit" key={theme.id}>
              <h3 className="text-primary">{theme.title}</h3>
              <i className="pr-4">{theme.description}</i>
              <div className="grid justify-items-center">
                <HexColorPicker
                  color={theme.value}
                  onChange={(value) => onThemeChange({ ...theme, value })}
                />
                <HexColorInput
                  style={{ width: '100px' }}
                  color={theme.value}
                  onChange={(value) => onThemeChange({ ...theme, value })}
                  prefixed
                />
              </div>
            </div>
          ))}
        </div>
        <br />
        <Button disabled={isSaving} onClick={saveColor}>
          Save
        </Button>
      </Card>
    </div>
  );
};

export default DesignPage;
