import { initFirebase } from './firebase'
import injectTapEventPlugin from 'react-tap-event-plugin';

export function init() {
  initFirebase()
  injectTapEventPlugin()

}