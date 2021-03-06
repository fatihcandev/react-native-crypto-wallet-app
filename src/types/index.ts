import { ParamListBase, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
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

export type PreAuthScreens = {
  Welcome: undefined;
  Onboarding: undefined;
  Login: undefined;
  SignUp: undefined;
};

export type LoginScreens = {
  Login: undefined;
  SignUp: undefined;
  CreateVerifyPin: undefined;
  ForgotPassword: undefined;
  CheckYourEmail: undefined;
  NewPassword: undefined;
  CreateConfirmVerifyPin: undefined;
};

export type SignUpScreens = {
  SignUp: undefined;
  Login: undefined;
  CreateConfirmVerifyPin: undefined;
};

export type CCVPScreens = {
  CreateConfirmVerifyPin: undefined;
  Home: undefined;
};

export type BottomTabScreens = {
  Portfolio: undefined;
  Transactions: undefined;
  Overview: undefined;
};

export type KYCScreens = {
  PersonalInformation: undefined;
  DocumentVerification: undefined;
  ScanFrontSide: undefined;
  ScanBackSide: undefined;
  NationalIDScan: undefined;
  Done: undefined;
};

export type WalletScreens = {
  Overview: undefined;
  CoinDetails: undefined;
  AllAssets: undefined;
  AllTransactions: undefined;
  TransactionDetails: undefined;
};

export type WithdrawalScreens = {
  Amount: undefined;
  EnterAddress: undefined;
  ScanQRCode: undefined;
  Confirmation: undefined;
};

export type SMTYFScreens = {
  Amount: undefined;
  ChooseRecipient: undefined;
  AddMessage: undefined;
  Confirmation: undefined;
};

export type ProfileScreens = {
  Overview: undefined;
  PersonalInformation: undefined;
  ChooseCurrency: undefined;
  Security: undefined;
  PhoneNumberVerification: undefined;
};

export type SecurityScreens = {
  Security: undefined;
  ChangePassword: undefined;
  ChangePin: undefined;
  NewPin: undefined;
  TFA: undefined;
};

export type PNVScreens = {
  EnterPhoneNumber: undefined;
  ChooseDialingCode: undefined;
  VerifyCode: undefined;
  Done: undefined;
};

export type TFAScreens = {
  TFA: undefined;
  Confirmation: undefined;
};

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

export enum IllustrationName {
  astroKitten = 'astroKitten',
  desktop = 'desktop',
  email = 'email',
  grow = 'grow',
  idea = 'idea',
  login = 'login',
  logo = 'logo',
  mobile = 'mobile',
  office = 'office',
  privacy = 'privacy',
  running = 'running',
  scan = 'scan',
  security = 'security',
  social = 'social',
  success = 'success',
  wondering = 'wondering',
}
