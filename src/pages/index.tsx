/**
 * 高清影像页面
 * author chinesejar
 */

import React, { useContext, useEffect } from 'react';
import * as Cesium from 'cesium/Cesium';
import { CesiumContext } from '@/components/CesiumContext';
import styles from './index.less';
import Tile3DLayer from '@/components/Tile3DLayer';

export default () => {
  const viewer = useContext(CesiumContext);

  useEffect(() => {
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(
        120.659925708521,
        30.5736604203611,
        200,
      ),
      orientation: {
        heading: Cesium.Math.toRadians(90.0),
        pitch: Cesium.Math.toRadians(-25.0),
      },
    });

    return () => {
      viewer.entites.removeAll();
    };
  }, []);

  return (
    <>
      <Tile3DLayer url="http://haining.timeroute.cn/imagery/tileset.json" />
    </>
  );
};
