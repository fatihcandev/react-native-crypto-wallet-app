import { ParamListBase, RouteProp } from '@react-navigation/native';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProps<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export interface ISingleNumberInputValue {
  [digit: string]: string;
}

export interface INotification {
  type?: 'success' | 'reject' | 'withdrawal';
  message?: string;
}

export interface ICountry {
  name: string;
  dialingCode: string;
}

export enum Coin {
  bitcoin = 'bitcoin',
  litecoin = 'litecoin',
  ethereum = 'ethereum',
  neo = 'neo',
  stellar = 'stellar',
  monero = 'monero',
  ripple = 'ripple',
  dash = 'dash',
  omisego = 'omisego',
  eos = 'eos',
}

export enum TransactionStatus {
  withdrawn = 'withdrawn',
  sent = 'sent',
  deposited = 'deposited',
}

export enum Country {
  afghanistan = 'afghanistan',
  albania = 'albania',
  angola = 'angola',
  argentine = 'argentine',
  armenia = 'armenia',
  australia = 'australia',
  azerbaijan = 'azerbaijan',
  unitedStates = 'unitedStates',
}

export enum IconName {
  afghanistan = 'afghanistan',
  albania = 'albania',
  alighRight = 'alighRight',
  angola = 'angola',
  argentine = 'argentine',
  armenia = 'armenia',
  arrowRight = 'arrowRight',
  australia = 'australia',
  azerbaijan = 'azerbaijan',
  bitcoin = 'bitcoin',
  bitcoinCash = 'bitcoinCash',
  box = 'box',
  check = 'check',
  chevronDown = 'chevronDown',
  chevronLeft = 'chevronLeft',
  copy = 'copy',
  dash = 'dash',
  delete = 'delete',
  deposit = 'deposit',
  deposited = 'deposited',
  eos = 'eos',
  ethereum = 'ethereum',
  externalLink = 'externalLink',
  eye = 'eye',
  eyeOff = 'eyeOff',
  filter = 'filter',
  home = 'home',
  litecoin = 'litecoin',
  logout = 'logout',
  minimize = 'minimize',
  monero = 'monero',
  neo = 'neo',
  omisego = 'omisego',
  plus = 'plus',
  plusCircle = 'plusCircle',
  reject = 'reject',
  repeat = 'repeat',
  ripple = 'ripple',
  send = 'send',
  sent = 'sent',
  share = 'share',
  exchange = 'exchange',
  statusDeposited = 'statusDeposited',
  statusExchanged = 'statusExchanged',
  statusPending = 'statusPending',
  statusRejected = 'statusRejected',
  statusWithdrawn = 'statusWithdrawn',
  stellar = 'stellar',
  success = 'success',
  swap = 'swap',
  unitedStates = 'unitedStates',
  user = 'user',
  withdraw = 'withdraw',
  withdrawn = 'withdrawn',
  withdrawalSolid = 'withdrawalSolid',
  x = 'x',
}
