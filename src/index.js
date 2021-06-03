/** reg */
import { isIDCard, isMobile, isEmail } from './reg';

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

export {
  isIDCard,
  isMobile,
  isEmail,
  getParamFromURL,
  formatUrl,
  toThousands,
  formatNum,
  sleep,
  getDevice,
  saveBolbFile,
};
