import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

import { func, bool, string } from 'prop-types';
import { IOS_APP_LINK, ANDROID_APP_LINK } from '../../constants/appLinks';
import { Links } from './styles';
import getMobileOperatingSystem from '../../helpers/getMobileOperatingSystem';

const NavigationLinks = ({ align, burger, closePanel, column, isFooter }) => {
  const isUserFrench =
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined' &&
    navigator.language &&
    navigator.language.split(/[-_]/)[0] === 'fr';
  const [legalNaming, setLegalNaming] = useState('CGU');

  useEffect(() => {
    setLegalNaming(isUserFrench ? 'CGU' : 'GTC');
  }, [isUserFrench]);

  const isIOs =
    typeof window !== 'undefined' &&
    typeof window.navigator !== 'undefined' &&
    getMobileOperatingSystem() === 'iOS';
  const appLink = isIOs ? IOS_APP_LINK : ANDROID_APP_LINK;

  return (
    <Links
      column={column}
      burger={burger}
      align={align}
      onClick={() => closePanel()}
    >
      <Link href={{ pathname: '/' }}>
        <span>Plastic Origins</span>
      </Link>
      {/* <Link href={{ pathname: '/', query: { target: 'project' } }}>
        <span>
          <FormattedMessage id="our_project" />
        </span>
      </Link> */}
      <Link href={{ pathname: '/', query: { target: 'getInvolved' } }}>
        <span>
          <FormattedMessage id="contribute" />
        </span>
      </Link>
      {/* <Link href="/data">
        <span>Data</span>
      </Link> */}
      <Link href="/solutions">
        <span>
          <FormattedMessage id="solutions" />
        </span>
      </Link>
      <Link href="/team">
        <span>
          <FormattedMessage id="team" />
        </span>
      </Link>
      {burger && (
        <a href={appLink} target="_blank" rel="noreferrer">
          <span>
            <FormattedMessage id="download_app" />
          </span>
        </a>
      )}
      {isFooter && (
        <Link href={{ pathname: `/${legalNaming}` }}>
          <span>{legalNaming}</span>
        </Link>
      )}
    </Links>
  );
};

NavigationLinks.propTypes = {
  align: string,
  burger: bool,
  closePanel: func,
  column: bool,
  isFooter: bool
};

NavigationLinks.defaultProps = {
  align: 'center',
  burger: false,
  closePanel: Function.prototype,
  column: false,
  isFooter: false
};

export default NavigationLinks;
