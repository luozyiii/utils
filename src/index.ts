/** reg */
import { isIDCard, isMobile, isEmail } from './reg';

/** detect */
import { isObject } from './detect';

/** params */
import { getParamFromURL, formatUrl } from './params';

/** number */
import { toThousands, formatNum } from './number';

/** time */
import { sleep } from './time';

/** device */
import { getDevice } from './device';

/** file */
import { saveBolbFile } from './file';

/** best */
import { debounce, throttle } from './best';

export {
  isIDCard,
  isMobile,
  isEmail,
  isObject,
  getParamFromURL,
  formatUrl,
  toThousands,
  formatNum,
  sleep,
  getDevice,
  saveBolbFile,
  debounce,
  throttle,
};
