import React from 'react';

import { IconName } from 'types';

import * as Icons from './assets/icons';

interface IIconProps {
  name: string;
  color?: string;
  width?: string;
  height?: string;
}

const Icon: React.FC<IIconProps> = ({ name, ...rest }) => {
  switch (name) {
    case IconName.afganistan:
      return <Icons.Afganistan {...rest} />;
    case IconName.afganistanSm:
      return <Icons.AfganistanSm {...rest} />;
    case IconName.albania:
      return <Icons.Albania {...rest} />;
    case IconName.albaniaSm:
      return <Icons.AlbaniaSm {...rest} />;
    case IconName.alighRight:
      return <Icons.AlignRight {...rest} />;
    case IconName.angola:
      return <Icons.Angola {...rest} />;
    case IconName.angolaSm:
      return <Icons.AngolaSm {...rest} />;
    case IconName.argentine:
      return <Icons.Argentine {...rest} />;
    case IconName.argentineSm:
      return <Icons.ArgentineSm {...rest} />;
    case IconName.armenia:
      return <Icons.Armenia {...rest} />;
    case IconName.armeniaSm:
      return <Icons.ArmeniaSm {...rest} />;
    case IconName.arrowRight:
      return <Icons.ArrowRight {...rest} />;
    case IconName.withdrawn:
      return <Icons.ArrowUpLeftCircle {...rest} />;
    case IconName.sent:
      return <Icons.ArrowUpRightCircle {...rest} />;
    case IconName.deposited:
      return <Icons.ArrowDownRightCircle {...rest} />;
    case IconName.australia:
      return <Icons.Australia {...rest} />;
    case IconName.australiaSm:
      return <Icons.AustraliaSm {...rest} />;
    case IconName.azerbaijan:
      return <Icons.Azerbaijan {...rest} />;
    case IconName.azerbaijanSm:
      return <Icons.AzerbaijanSm {...rest} />;
    case IconName.bitcoin:
      return <Icons.Bitcoin {...rest} />;
    case IconName.bitcoinCash:
      return <Icons.BitcoinCash {...rest} />;
    case IconName.box:
      return <Icons.Box {...rest} />;
    case IconName.check:
      return <Icons.Check {...rest} />;
    case IconName.chevronDown:
      return <Icons.ChevronDown {...rest} />;
    case IconName.chevronLeft:
      return <Icons.ChevronLeft {...rest} />;
    case IconName.copy:
      return <Icons.Copy {...rest} />;
    case IconName.dash:
      return <Icons.Dash {...rest} />;
    case IconName.delete:
      return <Icons.Delete {...rest} />;
    case IconName.eos:
      return <Icons.Eos {...rest} />;
    case IconName.ethereum:
      return <Icons.Ethereum {...rest} />;
    case IconName.externalLink:
      return <Icons.ExternalLink {...rest} />;
    case IconName.eye:
      return <Icons.Eye {...rest} />;
    case IconName.eyeOff:
      return <Icons.EyeOff {...rest} />;
    case IconName.filter:
      return <Icons.Filter {...rest} />;
    case IconName.home:
      return <Icons.Home {...rest} />;
    case IconName.litecoin:
      return <Icons.Litecoin {...rest} />;
    case IconName.logout:
      return <Icons.LogOut {...rest} />;
    case IconName.minimize:
      return <Icons.Minimize {...rest} />;
    case IconName.monero:
      return <Icons.Monero {...rest} />;
    case IconName.neo:
      return <Icons.Neo {...rest} />;
    case IconName.omisego:
      return <Icons.Omisego {...rest} />;
    case IconName.plus:
      return <Icons.Plus {...rest} />;
    case IconName.plusCircle:
      return <Icons.PlusCircle {...rest} />;
    case IconName.reject:
      return <Icons.Reject {...rest} />;
    case IconName.repeat:
      return <Icons.Repeat {...rest} />;
    case IconName.ripple:
      return <Icons.Ripple {...rest} />;
    case IconName.share:
      return <Icons.Share {...rest} />;
    case IconName.shuffle:
      return <Icons.Shuffle {...rest} />;
    case IconName.statusDeposited:
      return <Icons.StatusDeposited {...rest} />;
    case IconName.statusExchanged:
      return <Icons.StatusExchanged {...rest} />;
    case IconName.statusPending:
      return <Icons.StatusPending {...rest} />;
    case IconName.statusRejected:
      return <Icons.StatusRejected {...rest} />;
    case IconName.statusWithdrawn:
      return <Icons.StatusWithdrawn {...rest} />;
    case IconName.stellar:
      return <Icons.Stellar {...rest} />;
    case IconName.success:
      return <Icons.Success {...rest} />;
    case IconName.swap:
      return <Icons.Swap {...rest} />;
    case IconName.unitedStates:
      return <Icons.UnitedStatesSm {...rest} />;
    case IconName.user:
      return <Icons.User {...rest} />;
    case IconName.withdrawal:
      return <Icons.Withdrawal {...rest} />;
    case IconName.x:
      return <Icons.X {...rest} />;
    default:
      return null;
  }
};

export default Icon;
