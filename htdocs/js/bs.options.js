var blockstrap_defaults = '{"v":"0.5.0.2","install":false,"skip_config":true,"app_id":"faucets","blockchains":{"btct":{"blockchain":"Bitcoin Testnet","lib":"bitcointestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/btct/"},"fee":0.0001,"op_return":true,"op_limit":80},"dasht":{"blockchain":"DashPay Testnet","lib":"dashpaytestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/dasht/"},"fee":0.0001,"op_return":true,"op_limit":80},"doget":{"blockchain":"Dogecoin Testnet","lib":"dogecointestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/dogt/"},"fee":1,"op_return":true,"op_limit":80},"ltct":{"blockchain":"Litecoin Testnet","lib":"litecointestnet","apis":{"blockstrap":"https://api.blockstrap.com/v0/ltct/"},"fee":0.001,"op_return":true,"op_limit":80},"multi":{"private":true,"apis":{"blockstrap":"https://api.blockstrap.com/v0/multi/"}},"btc":{"blockchain":"Bitcoin","lib":"bitcoin","apis":{"blockstrap":"https://api.blockstrap.com/v0/btc/"},"fee":0.0001,"op_return":true,"op_limit":80},"dash":{"blockchain":"DashPay","lib":"dashpay","apis":{"blockstrap":"https://api.blockstrap.com/v0/dash/"},"fee":0.0001,"op_return":true,"op_limit":80},"doge":{"blockchain":"Dogecoin","lib":"dogecoin","apis":{"blockstrap":"https://api.blockstrap.com/v0/doge/"},"fee":1,"op_return":true,"op_limit":80},"ltc":{"blockchain":"Litecoin","lib":"litecoin","apis":{"blockstrap":"https://api.blockstrap.com/v0/ltc/"},"fee":0.001,"op_return":true,"op_limit":80}},"apis":{"defaults":{"blockstrap":{"functions":{"to":{"address":"address/transactions/","addresses":"address/ids/","block":"block/height/","dnkey":"dnkey/","dnkeys":"dnkey/","market":"market/stats/","relay":"transaction/relay/","relay_param":"txn_hex","transaction":"transaction/id/","transactions":"address/transactions/$call?showtxnio=1","tx_pagination":"records, skip","unspents":"address/unspents/$call?showtxnio=1"},"from":{"address":{"key":"address","address":"address","hash":"address_hash160","tx_count":"transaction_count_total","received":"inputs_value_confirmed","balance":"balance"},"addresses":{"key":"addresses","delimiter":",","address":"address","hash":"address_hash160","tx_count":"transaction_count_total","received":"inputs_value_confirmed","balance":"balance"},"block":{"key":"blocks.0","height":"height","hash":"[id, lowercase]","prev":"[prev_block_id, lowercase]","next":"[next_block_id, lowercase]","tx_count":"tx_count","time":"time"},"dnkey":{"key":"","dnkeys":"dnkeys"},"dnkeys":{"key":"","dnkeys":"dnkeys"},"market":{"key":"market","price_usd_now":"fiat_usd_now","tx_count_24hr":"tx_count_24hr","sent_usd_24hr":"[output_value_24hr, *, fiat_usd_now, int]","sent_coins_24hr":"output_value_24hr","coins_discovered":"coinbase_value_todate","marketcap":"marketcap"},"relay":{"txid":"id","inner":""},"transaction":{"key":"transaction","txid":"[id, lowercase]","size":"size","block":"block_height","time":"time","input":"input_value","output":"output_value","value":"[output_value, -, fees, int]","fees":"fees"},"transactions":{"key":"address.transactions","txid":"[id, lowercase]","size":"size","block":"block_height","time":"time","input":"input_value","output":"output_value","value":"tx_address_ledger_value","fees":"fees"},"unspents":{"key":"address.transactions","reverse_array":true,"confirmations":"confirmations","txid":"[id, lowercase]","index":"tx_address_pos","value":"tx_address_value","script":"[tx_address_script_pub_key, lowercase]"}}}}}}}';