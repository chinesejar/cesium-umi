import React, { useContext, useEffect } from 'react';
import * as Cesium from 'cesium/Cesium';
import { CesiumContext } from './CesiumContext';

export default ({ url }) => {
  const viewer = useContext(CesiumContext);

  useEffect(() => {
    // 添加 3DTiles
    viewer.scene.primitives.add(
      new Cesium.Cesium3DTileset({
        url,
      }),
    );
  }, []);

  return null;
};
