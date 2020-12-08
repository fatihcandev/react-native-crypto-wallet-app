import { Country } from 'types';

const getCountryName = (name: string) => {
  switch (name) {
    case Country.afghanistan:
      return 'Afghanistan';
    case Country.albania:
      return 'Albania';
    case Country.angola:
      return 'Angola';
    case Country.argentine:
      return 'Argentine';
    case Country.armenia:
      return 'Armenia';
    case Country.australia:
      return 'Australia';
    case Country.azerbaijan:
      return 'Azerbaijan';
    case Country.unitedStates:
      return 'United States';
    default:
      return null;
  }
};

export default getCountryName;
