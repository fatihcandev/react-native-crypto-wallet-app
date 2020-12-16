import { color, ColorProps, useRestyle } from '@shopify/restyle';
import React from 'react';
import { Theme } from 'theme';

import { IconName } from 'types';

import * as Icons from './assets/icons';

type IIconProps = ColorProps<Theme> & {
  name: string;
  width?: string;
  height?: string;
};

const Icon: React.FC<IIconProps> = ({ name, ...rest }) => {
  const props = useRestyle([color], rest);
  switch (name) {
    case IconName.afghanistan:
      return <Icons.Afghanistan {...props} />;
    case IconName.albania:
      return <Icons.Albania {...props} />;
    case IconName.alignRight:
      return <Icons.AlignRight {...props} />;
    case IconName.angola:
      return <Icons.Angola {...props} />;
    case IconName.argentine:
      return <Icons.Argentine {...props} />;
    case IconName.armenia:
      return <Icons.Armenia {...props} />;
    case IconName.arrowRight:
      return <Icons.ArrowRight {...props} />;
    case IconName.australia:
      return <Icons.Australia {...props} />;
    case IconName.azerbaijan:
      return <Icons.Azerbaijan {...props} />;
    case IconName.bitcoin:
      return <Icons.Bitcoin {...props} />;
    case IconName.bitcoinCash:
      return <Icons.BitcoinCash {...props} />;
    case IconName.box:
      return <Icons.Box {...props} />;
    case IconName.check:
      return <Icons.Check {...props} />;
    case IconName.chevronDown:
      return <Icons.ChevronDown {...props} />;
    case IconName.chevronLeft:
      return <Icons.ChevronLeft {...props} />;
    case IconName.copy:
      return <Icons.Copy {...props} />;
    case IconName.dash:
      return <Icons.Dash {...props} />;
    case IconName.delete:
      return <Icons.Delete {...props} />;
    case IconName.deposit:
      return <Icons.PlusCircle {...props} />;
    case IconName.deposited:
      return <Icons.Deposit {...props} />;
    case IconName.eos:
      return <Icons.Eos {...props} />;
    case IconName.ethereum:
      return <Icons.Ethereum {...props} />;
    case IconName.exchange:
      return <Icons.Exchange {...props} />;
    case IconName.externalLink:
      return <Icons.ExternalLink {...props} />;
    case IconName.eye:
      return <Icons.Eye {...props} />;
    case IconName.eyeOff:
      return <Icons.EyeOff {...props} />;
    case IconName.filter:
      return <Icons.Filter {...props} />;
    case IconName.home:
      return <Icons.Home {...props} />;
    case IconName.litecoin:
      return <Icons.Litecoin {...props} />;
    case IconName.logout:
      return <Icons.LogOut {...props} />;
    case IconName.minimize:
      return <Icons.Minimize {...props} />;
    case IconName.monero:
      return <Icons.Monero {...props} />;
    case IconName.neo:
      return <Icons.Neo {...props} />;
    case IconName.omisego:
      return <Icons.Omisego {...props} />;
    case IconName.plus:
      return <Icons.Plus {...props} />;
    case IconName.plusCircle:
      return <Icons.PlusCircle {...props} />;
    case IconName.reject:
      return <Icons.Reject {...props} />;
    case IconName.repeat:
      return <Icons.Repeat {...props} />;
    case IconName.ripple:
      return <Icons.Ripple {...props} />;
    case IconName.send:
      return <Icons.Send {...props} />;
    case IconName.sent:
      return <Icons.Send {...props} />;
    case IconName.share:
      return <Icons.Share {...props} />;
    case IconName.statusDeposited:
      return <Icons.StatusDeposited {...props} />;
    case IconName.statusExchanged:
      return <Icons.StatusExchanged {...props} />;
    case IconName.statusPending:
      return <Icons.StatusPending {...props} />;
    case IconName.statusRejected:
      return <Icons.StatusRejected {...props} />;
    case IconName.statusWithdrawn:
      return <Icons.StatusWithdrawn {...props} />;
    case IconName.stellar:
      return <Icons.Stellar {...props} />;
    case IconName.success:
      return <Icons.Success {...props} />;
    case IconName.swap:
      return <Icons.Swap {...props} />;
    case IconName.unitedStates:
      return <Icons.UnitedStates {...props} />;
    case IconName.user:
      return <Icons.User {...props} />;
    case IconName.withdraw || IconName.withdrawn:
      return <Icons.Withdrawal {...props} />;
    case IconName.withdrawalSolid:
      return <Icons.WithdrawalSolid {...props} />;
    case IconName.x:
      return <Icons.X {...props} />;
    default:
      return null;
  }
};

export default Icon;
