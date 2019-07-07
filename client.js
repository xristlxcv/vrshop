import { ReactInstance, Surface } from "react-360-web";
import { Location } from "react-360-web";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });
  const rightPanel = new Surface(300, 600, Surface.SurfaceShape.Flat);
  rightPanel.setAngle(1, 0);
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("LeftPanel", {
      /* initial props */
    }),
    r360.getDefaultSurface()
  );
  r360.renderToSurface(r360.createRoot("RightPanel"), rightPanel);
  r360.renderToLocation(
    r360.createRoot("ModelView"),
    r360.getDefaultLocation()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
