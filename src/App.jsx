import {
    SurfaceProvider,
    SurfaceComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-react"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'

import CallFlowPalette from "./CallFlowPalette.tsx";
import CallflowInspector from "./Inspector.tsx";

function App({url}) {

  return <div className="vjs-callflow">
      <SurfaceProvider>
          <SurfaceComponent className="vjs-callflow-canvas"
                                renderOptions={renderOptions}
                            viewOptions={viewOptions}
                            modelOptions={modelOptions}
                                url={url}>

              <ControlsComponent/>
              <MiniviewComponent/>
          </SurfaceComponent>
          <div className="vjs-callflow-rhs">
              <CallFlowPalette/>
              <CallflowInspector/>
          </div>

      </SurfaceProvider>
  </div>
}

export default App
