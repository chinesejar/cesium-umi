import React, { useEffect, useState } from 'react';
import * as Cesium from 'cesium/Cesium';
import 'cesium/Widgets/widgets.css';
import { CesiumProvider } from '@/components/CesiumContext';
import styles from './public.less';

export default ({ children }) => {
  const [viewer, setViewer] = useState(null);

  useEffect(() => {
    var imageryProvider = new Cesium.UrlTemplateImageryProvider({
      url:
        // 'http://t0.tianditu.com/img_w/wmts?tk=e90d56e5a09d1767899ad45846b0cefd&SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&FORMAT=tiles',
        'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?sku=101VLu3sFAe7u&access_token=pk.eyJ1IjoiZXhhbXBsZXMiLCJhIjoiY2p1dHRybDR5MGJuZjQzcGhrZ2doeGgwNyJ9.a-vxW4UaxOoUMWUTGnEArw',
      attribution: false,
    });
    const viewer = new Cesium.Viewer('cesiumContainer', {
      animation: false,
      fullscreenButton: false,
      homeButton: false,
      sceneModePicker: false,
      timeline: false,
      navigationHelpButton: false,
      imageryProvider,
      infoBox: false,
      geocoder: false,
      baseLayerPicker: false,
      selectionIndicator: false,
      shadow: true,
      shouldAnimate: true,
    });
    setViewer(viewer);
  }, []);

  return (
    <div className={styles.container}>
      <CesiumProvider viewer={viewer}>{children}</CesiumProvider>
      <div className={styles.cesium} id="cesiumContainer" />
    </div>
  );
};
