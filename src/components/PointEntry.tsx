import React, { useContext, useEffect } from 'react';
import * as Cesium from 'cesium/Cesium';
import { CesiumContext } from './CesiumContext';
import { generatePin } from '@/utils/pointUtil';

export default ({ point }) => {
  const viewer = useContext(CesiumContext);

  useEffect(() => {
    const canvas = generatePin(point.name);
    viewer.entities.add({
      name: point.name,
      position: Cesium.Cartesian3.fromDegrees(...point.position),
      billboard: {
        image: canvas.toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });
  }, []);

  return null;
};
