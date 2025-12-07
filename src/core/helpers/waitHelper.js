class helper {


    /**
     * @param {WebdriverIO.Element} element 
     * @param {number} [timeout=7000]
     * @param {boolean} [reverse=false] 
     * @param {string} [timeoutMsg] 
     */
    async waitForDisplayed(element, { timeout = 7000, reverse = false, timeoutMsg } = {}) {
        const options = { timeout, reverse };
        if (timeoutMsg) {
            options.timeoutMsg = timeoutMsg;
        }
        await element.waitForDisplayed(options);
    }
}

export default new helper();