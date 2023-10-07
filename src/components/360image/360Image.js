// import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
// import { EquirectangularAdapter } from '@photo-sphere-viewer/core';
// import { CubemapAdapter } from 'react-photo-sphere-viewer';

import {
  AutorotatePlugin,
  EquirectangularTilesAdapter,
  EquirectangularTilesAdapterConfig,
} from 'react-photo-sphere-viewer';
// import image from '../../assets/images/360.jpg';
const baseUrl = 'https://photo-sphere-viewer-data.netlify.app/assets/';
const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then((mod) => mod.ReactPhotoSphereViewer),
  {
    ssr: false,
  },
);
const Image360Deg = () => {
  return (
    <div>
      <ReactPhotoSphereViewer
        src={`/360.jpg`}
        height={'93rem'}
        width={'100%'}
        loadingImg={baseUrl + 'loader.gif'}
        defaultZoomLvl={1}
        mousewheel={false}
        plugins={[AutorotatePlugin]}
      ></ReactPhotoSphereViewer>
    </div>
  );
};

export default Image360Deg;
