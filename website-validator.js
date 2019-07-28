const { check, validationResult } = require('express-validator')

module.exports = () => {
  return [
    check('website')
      .trim()
      .isURL()
      .withMessage('請輸入網址且勿空白')
  ]
}
