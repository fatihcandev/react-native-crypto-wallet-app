import React from 'react';

import { IllustrationName } from 'types';
import * as Illustrations from './assets/illustrations';

interface IIllustrationProps {
  name: string;
  width?: string;
  height?: string;
}

const Illustration: React.FC<IIllustrationProps> = ({ name, ...rest }) => {
  switch (name) {
    case IllustrationName.astroKitten:
      return <Illustrations.AstroKitten {...rest} />;
    case IllustrationName.desktop:
      return <Illustrations.Desktop {...rest} />;
    case IllustrationName.email:
      return <Illustrations.Email {...rest} />;
    case IllustrationName.grow:
      return <Illustrations.Grow {...rest} />;
    case IllustrationName.idea:
      return <Illustrations.Idea {...rest} />;
    case IllustrationName.login:
      return <Illustrations.Login {...rest} />;
    case IllustrationName.logo:
      return <Illustrations.Logo {...rest} />;
    case IllustrationName.mobile:
      return <Illustrations.Mobile {...rest} />;
    case IllustrationName.office:
      return <Illustrations.Office {...rest} />;
    case IllustrationName.privacy:
      return <Illustrations.Privacy {...rest} />;
    case IllustrationName.running:
      return <Illustrations.Running {...rest} />;
    case IllustrationName.scan:
      return <Illustrations.Scan {...rest} />;
    case IllustrationName.security:
      return <Illustrations.Security {...rest} />;
    case IllustrationName.social:
      return <Illustrations.Social {...rest} />;
    case IllustrationName.success:
      return <Illustrations.Success {...rest} />;
    case IllustrationName.wondering:
      return <Illustrations.Wondering {...rest} />;
    default:
      return null;
  }
};

export default Illustration;
