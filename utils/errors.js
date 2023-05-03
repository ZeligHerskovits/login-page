class ErrorResponse extends Error {
  constructor(message, statusCode, cookie) {
    super(message);
    this.statusCode = statusCode;
    this.cookie = cookie;
  }
}

class MissingRequiredError extends ErrorResponse {
  constructor(field) {
    const message = { field: field, message: 'Is required' };
    super(JSON.stringify(message), 400);
  }
}

class NotFoundError extends ErrorResponse {
  constructor(notFoundResource, status) {
    super(`${notFoundResource} not found`, status ?? 404);
    // const message = notFoundResource + " " + "not found"
    // super(JSON.stringify(message), status ?? 404); 
  }
}

exports.ErrorResponse = ErrorResponse;
exports.NotFoundError = NotFoundError;
exports.MissingRequiredError = MissingRequiredError;
