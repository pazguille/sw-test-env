'use strict';

module.exports = class ExtendableEvent {
  /**
   * Constructor
   */
  constructor() {
    this.promise = null;
  }

  /**
   * Wait until 'promise' resolves
   * @param {Promise} promise
   * @returns {void}
   */
  waitUntil(promise) {
    this.promise = promise;
  }
};
