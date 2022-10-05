import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  // {
  //   pid: 6,
  //   lpSymbol: 'BUSD-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.busd,
  //   quoteToken: serializedTokens.wbnb,
  // },
  {
    pid: 0,
    lpSymbol: 'GLAND-BNB LP',
    lpAddresses: {
      97: '0x3c3ee1BEA968D968324DF026b5b3582248d8aFe2',
      56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
    },
    token: serializedTokens.GLAND,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'GLAND-BNB LP',
    lpAddresses: {
      97: '0x3c3ee1BEA968D968324DF026b5b3582248d8aFe2',
      56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
    },
    token: serializedTokens.GLAND,
    quoteToken: serializedTokens.wbnb,
  },

  {
    pid: 2,
    lpSymbol: 'GLAND-BNB LP',
    lpAddresses: {
      97: '0x3c3ee1BEA968D968324DF026b5b3582248d8aFe2',
      56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
    },
    token: serializedTokens.GLAND,
    quoteToken: serializedTokens.wbnb,
  },

]

export default farms
