import { ElementArray } from 'webdriverio';

class helper {
  // eslint-disable-next-line jsdoc/require-param
  /**
   * @param {WebdriverIO.Element<'async'>} element
   * @param {number} [timeout]
   */
  async waitForDisplayed<T extends ElementArray>(
    element: T[number],
    {
      timeout = 8000,
      reverse = false,
      timeoutMsg,
    }: { timeout?: number; reverse?: boolean; timeoutMsg?: string } = {}
  ): Promise<void> {
    const options = { timeout, reverse, timeoutMsg };
    if (timeoutMsg) {
      options.timeoutMsg = timeoutMsg;
    }
    await element.waitForDisplayed(options);
  }
}

export default new helper();
