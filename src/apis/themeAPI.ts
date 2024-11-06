import { Theme } from '@interfaces';
import BaseAPI from './baseAPI';

const THEME_URL = '/themes';

class ThemeAPI extends BaseAPI {
  async getThemes() {
    return await this.get(THEME_URL);
  }

  async updateThemes(themes: Theme[]) {
    return await this.put(`${THEME_URL}`, themes);
  }
}

export default ThemeAPI;
