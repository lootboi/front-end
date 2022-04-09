import {Configuration} from './grape-finance/config';
import {BankInfo} from './grape-finance';
import { PoolSharp } from '@material-ui/icons';

const configurations: {[env: string]: Configuration} = {

  development: {
    chainId: 1313161555,
    networkName: 'Aurora Testnet',
    ftmscanUrl: 'https://testnet.aurorascan.dev/',
    defaultProvider: 'https://testnet.aurora.dev/',
    deployments: require('./grape-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      MNEAR: ['0x946190A15fd83c79e87bab84b30Faf5978b921A7', 18],
      MTRI: ['0x0Fd1366c25531aC23f43F711cFF8380Ee0364a45', 18],
      HSHARE: ['0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2', 18],
      MUSDC: ['0x4A44c474069c8bF327F1f68EA3ed0B54d39757Be', 18], //mUSDC 
      'GRAPE': ['0x5541D83EFaD1f281571B343977648B75d95cdAC2', 18],
      'WAMP': ['0xd7Fdf42510566b9aEfD3F1841a1503B6678cD780', 18],
      'VOLT': ['0xf5ee578505f4D876FeF288DfD9fD5e15e9EA1318', 18],
      'DAI': ['0xd586e7f844cea2f87f50152665bcbc2c279d8d70', 18],
      'MTRI-YEET-LP': ['0x90F1395401E3898A2dc12787C09Df94Fb538736b', 18],
      'GRAPE-WINE-LP': ['0xd3d477Df7f63A2623464Ff5Be6746981FdeD026F', 18],
      'WINE-MIM-LP': ['0x00cB5b42684DA62909665d8151fF80D1567722c3', 18],
      'MIM-WAVAX-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18],
      'HSHARE-WINE-LP': ['0x9E8abB3A78cF9Ae9D6eA3282566e36B91C92db5b', 18]
    },
    baseLaunchDate: new Date('2022-1-13 17:00:00Z'),
    bondLaunchesAt: new Date('2020-01-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2022-1-18T00:00:00Z'),
    refreshInterval: 10000,
  },
  production: {
    chainId: 1313161555,
    networkName: 'Avalanche',
    ftmscanUrl: 'https://snowtrace.io/',
    defaultProvider: 'https://api.avax.network/ext/bc/C/rpc',
    deployments: require('./grape-finance/deployments/deployments.mainnet.json'),
    externalTokens: {
      MNEAR: ['0x946190A15fd83c79e87bab84b30Faf5978b921A7', 18], //Not needed
      MIM: ['0x130966628846bfd36ff31a822705796e8cb8c18d', 18],
      HSHARE: ['0xfa4B6db72A650601E7Bd50a0A9f537c9E98311B2', 18], //Not needed
      MUSDC: ['0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664', 6],
      'YEET': ['0x70513247A9d3186aAfF9fFeB799EBF044e49424A', 18],
      'WAMP': ['0xd7Fdf42510566b9aEfD3F1841a1503B6678cD780', 18], //Not needed
      'VOLT': ['0xf5ee578505f4D876FeF288DfD9fD5e15e9EA1318', 18], //Not needed
      'DAI': ['0xd586e7f844cea2f87f50152665bcbc2c279d8d70', 18], //Not needed 
      'MTRI-YEET-LP': ['0xb382247667fe8ca5327ca1fa4835ae77a9907bc8', 18],
      'WINE-MIM-LP': ['0x00cB5b42684DA62909665d8151fF80D1567722c3', 18], //Not needed 
      'GRAPE-WINE-LP': ['0xd3d477Df7f63A2623464Ff5Be6746981FdeD026F', 18], //Not needed
      'MIM-WAVAX-LP': ['0x781655d802670bba3c89aebaaea59d3182fd755d', 18], //Not needed 
      'HSHARE-WINE-LP': ['0x9E8abB3A78cF9Ae9D6eA3282566e36B91C92db5b', 18] //Not needed
    },
    baseLaunchDate: new Date('2021-12-30 1:00:00Z'),
    bondLaunchesAt: new Date('2020-12-03T15:00:00Z'),
    boardroomLaunchesAt: new Date('2021-12-30T00:00:00Z'),
    refreshInterval: 10000,
  },
};

export const bankDefinitions: {[contractName: string]: BankInfo} = {
  /*
  Explanation:
  name: description of the card
  poolId: the poolId assigned in the contract
  sectionInUI: way to distinguish in which of the 3 pool groups it should be listed
        - 0 = Single asset stake pools
        - 1 = LP asset staking rewarding GRAPE
        - 2 = LP asset staking rewarding WINE
  contract: the contract name which will be loaded from the deployment.environmnet.json
  depositTokenName : the name of the token to be deposited
  earnTokenName: the rewarded token
  finished: will disable the pool on the UI if set to true
  sort: the order of the pool
  */
  // ------------- Genesis Pools (Not including Token B deposits for Token A) -------------
  YeetForMTRI: {
    name: 'Earn YEET with mNEAR',
    poolId: 0,
    sectionInUI: 0,
    contract: 'GenesisRewardPools',
    depositTokenName: 'MNEAR',
    earnTokenName: 'YEET',
    finished: false,
    sort: 1,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },
  YEEtforMUSDC: {
    name: 'Earn YEET with USDC',
    poolId: 1,
    sectionInUI: 0,
    contract: 'GenesisRewardPools',
    depositTokenName: 'MTRI',
    earnTokenName: 'YEET',
    finished: false,
    sort: 2,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },
  GrapeMimLPRewardPool: {
    name: 'Earn YEET with YEET-TRI LP',
    poolId: 2,
    sectionInUI: 1,
    contract: 'GenesisRewardPools',
    depositTokenName: 'MTRI-YEET-LP',
    earnTokenName: 'YEET',
    finished: false,
    sort: 1,
    closedForStaking: false,
    multi: '0',
    buyLink: null,
  },


  // ------------- LP for GLXY -------------
  YshareRewardPool: {
    name: 'Earn YEET with mUSDC',
    poolId: 0,
    sectionInUI: 2,
    contract: 'YShareRewardPool',
    depositTokenName: 'MTRI-YEET-LP',
    earnTokenName: 'YSHARE',
    finished: false,
    sort: 0,
    closedForStaking: false,
    multi: '56.75',
    buyLink: 'https://traderjoexyz.com/trade?inputCurrency=0x130966628846bfd36ff31a822705796e8cb8c18d&outputCurrency=0x5541d83efad1f281571b343977648b75d95cdac2#/',
  },
};

export default configurations[process.env.NODE_ENV || 'production'];
