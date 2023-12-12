import { FC, useEffect, useRef, useState } from 'react';

import './_overlay.scss';

type PortalProps = {
  children: React.ReactNode;
  isShow?: boolean;
  onClose: () => void;
}

const Overlay = ({ children, isShow, onClose }:PortalProps) => {

  const [overlayEl, setOverlayEl] = useState(true);
  const bodyEl = document.querySelector('body');

  useEffect(() => {
    if (isShow) {
      setOverlayEl(true);
      bodyEl?.classList.add('lock');
    }
  }, [isShow]);

  const closeHandler = (event: any) => {
    event.stopPropagation();
    const target = event.target;
    if (target === event.currentTarget && target.classList.contains('overlay')) {
      setOverlayEl(false);
      bodyEl?.classList.remove('lock');
      onClose();
    }
  }

  if (isShow && overlayEl) {
    return (
      <>
        <div className='overlay' onClick={(e) => closeHandler(e)}>
          {children}
        </div>
      </>
    );
  }

  return null;

};

export default Overlay;