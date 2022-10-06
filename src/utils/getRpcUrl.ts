import sample from 'lodash/sample'

if (
  process.env.NODE_ENV !== 'production' &&
  (!process.env.REACT_APP_NODE_1 || !process.env.REACT_APP_NODE_2 || !process.env.REACT_APP_NODE_3)
) {
  throw Error('One base RPC URL is undefined')
}

// Array of available nodes to connect to
export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]

const getNodeUrl = () => {
  const chainId = process.env.REACT_APP_CHAIN_ID
  const rpcUrls = {
    "56" : "https://bsc‑dataseed2.defibit.io",
    "97": "https://data-seed-prebsc-1-s1.binance.org:8545/"
  }
  return rpcUrls[chainId]
}

export default getNodeUrl
