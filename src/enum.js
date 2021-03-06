exports.ContractMode = Object.freeze({
  JS_RAW: 0,
  JS_DECORATED: 1,
  WASM: 100
})

exports.TxOp = Object.freeze({
  DEPLOY_CONTRACT: 0,
  CALL_CONTRACT: 1
})

exports.AccountType = Object.freeze({
  REGULAR_ACCOUNT: '0',
  BANK_ACCOUNT: '1'
})
