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

export enum IconName {
  afganistan = 'afganistan',
  afganistanSm = 'afganistanSm',
  albania = 'albania',
  albaniaSm = 'albaniaSm',
  alighRight = 'alighRight',
  angola = 'angola',
  angolaSm = 'angolaSm',
  argentine = 'argentine',
  argentineSm = 'argentineSm',
  armenia = 'armenia',
  armeniaSm = 'armeniaSm',
  arrowRight = 'arrowRight',
  arrowUpLeftCircle = 'arrowUpLeftCircle',
  arrowUpRightCircle = 'arrowUpRightCircle',
  australia = 'australia',
  australiaSm = 'australiaSm',
  azerbaijan = 'azerbaijan',
  azerbaijanSm = 'azerbaijanSm',
  bitcoin = 'bitcoin',
  bitcoinCash = 'bitcoinCash',
  box = 'box',
  check = 'check',
  chevronDown = 'chevronDown',
  chevronLeft = 'chevronLeft',
  copy = 'copy',
  dash = 'dash',
  delete = 'delete',
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
  share = 'share',
  shuffle = 'shuffle',
  statusDeposited = 'statusDeposited',
  statusExchanged = 'statusExchanged',
  statusPending = 'statusPending',
  statusRejected = 'statusRejected',
  statusWithdrawn = 'statusWithdrawn',
  stellar = 'stellar',
  success = 'success',
  swap = 'swap',
  unitedStates = 'unitedStates',
  unitedStatesSm = 'unitedStatesSm',
  user = 'user',
  withdrawal = 'withdrawal',
  x = 'user',
}
