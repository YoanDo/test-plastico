import React from 'react';
import { useSelector } from 'react-redux';
import { Wrapper } from '../../hoc/layout/styles';
import { getUserLanguage } from '../../redux/selectors/ui';
import Cart from '../Cart';

const JoinActions = () => {
  const lang = useSelector((state) => getUserLanguage(state));
  const videoEN = 'https://www.youtube.com/embed/nUrq7J-fiz0';
  const videoFR = 'https://www.youtube.com/embed/hLCT34H7BnY';
  const videoSrc = lang === 'fr' ? videoFR : videoEN;
  const pdfEN =
    'https://plasticostorageprod.blob.core.windows.net/public/Training_PO.pdf';
  const pdfFR =
    'https://plasticostorageprod.blob.core.windows.net/public/Formation_PO.pdf';
  const pdfSrc = lang === 'fr' ? pdfFR : pdfEN;

  return (
    <Wrapper>
      <Cart
        label="get_involved_zoom"
        link="https://us02web.zoom.us/meeting/register/tZ0rc-utpzgqGdR0Kn3NDRgFuq4saddL9ugz"
        isNegative
      />
      <Cart label="get_involved_video" link={videoSrc} isNegative />
      <Cart label="get_involved_pdf" link={pdfSrc} isNegative />
    </Wrapper>
  );
};

JoinActions.propTypes = {};

export default JoinActions;
