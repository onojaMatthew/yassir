/**
 * Middleware factory function to encapsulate error handling
 * @param {Function} handler
 * @param args
 */
export const async = (handler, ...args) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next, ...args);
    } catch (ex) {
      next(ex);
    }
  }
}