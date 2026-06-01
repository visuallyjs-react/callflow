# Call Flow Editor Implementation

This document describes how the Call Flow Editor is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application uses the following core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context for the VisuallyJS surface.
- **`SurfaceComponent`**: The main canvas area where the call flow is rendered.
- **`ControlsComponent`**: Provides standard zoom and pan controls.
- **`MiniviewComponent`**: Provides a navigation map of the call flow.

### Custom Components
- **`CallFlowPalette`**: A custom implementation of a palette for call flow elements.
- **`CallflowInspector`**: A custom inspector for editing properties of call flow nodes and edges.

## Configuration Options

The `SurfaceComponent` is configured using several options objects:

- **`renderOptions`**: Defines how elements are rendered on the surface, including node and edge styles.
- **`viewOptions`**: Configures the view behavior, such as zoom levels and interaction settings.
- **`modelOptions`**: Defines data model constraints and behaviors.

The editor uses specific node types defined in `node-types.ts` to represent various telephony and call routing actions.

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the call flow editor layout are imported from `callflow.css`.
