import _ from 'lodash';
import {SunburstCtrl} from './sunburst_ctrl';
import {loadPluginCss} from 'app/plugins/sdk';

loadPluginCss({
  dark:  'plugins/sraoss-sunburst-panel/css/sunburst.dark.css',
  light: 'plugins/sraoss-sunburst-panel/css/sunburst.light.css'
});

export {
  SunburstCtrl as PanelCtrl
};

