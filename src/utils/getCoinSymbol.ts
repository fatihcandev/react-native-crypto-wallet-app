import { Coin } from 'types';

const getCoinSymbol = (coin: string) => {
  switch (coin) {
    case Coin.bitcoin:
      return 'BTC';
    case Coin.litecoin:
      return 'LTC';
    case Coin.ethereum:
      return 'ETH';
    case Coin.neo:
      return 'NEO';
    case Coin.stellar:
      return 'XLM';
    case Coin.monero:
      return 'XMR';
    case Coin.ripple:
      return 'XRP';
    case Coin.dash:
      return 'DASH';
    case Coin.omisego:
      return 'OMG';
    case Coin.eos:
      return 'EOS';
    default:
      return '';
  }
};

export default getCoinSymbol;
