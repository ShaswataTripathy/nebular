import { NbJSThemeOptions } from './theme.options';
import { NbColorHelper } from '../color.helper';

const palette = {
  primary: '#8a7fff',
  success: '#40dc7e',
  info: '#4ca6ff',
  warning: '#ffa100',
  danger: '#ff4c6a',
};

export const DEFAULT_THEME: NbJSThemeOptions = {
  name: 'default',
  variables: {
    fontMain: 'Open Sans',
    fontSecondary: 'Exo',

    bg: '#ffffff',
    fg: '#a4abb3',
    fgHeading: '#282828',
    fgText: '#484848',
    fgHighlight: '#40dc7e',
    layoutBg: '#ebeff5',
    separator: '#ebeef2',

    primary: palette.primary,
    success: palette.success,
    info: palette.info,
    warning: palette.warning,
    danger: palette.danger,

    primaryLight: NbColorHelper.tint(palette.primary, 15),
    successLight: NbColorHelper.tint(palette.success, 15),
    infoLight: NbColorHelper.tint(palette.info, 15),
    warningLight: NbColorHelper.tint(palette.warning, 15),
    dangerLight: NbColorHelper.tint(palette.danger, 15),
  },
};
