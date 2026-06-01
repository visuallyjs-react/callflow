import {PaletteComponent} from '@visuallyjs/browser-ui-react';
import {NODE_TYPES} from "./node-types"
import {BrowserElement} from "@visuallyjs/browser-ui";

/**
 * Component supporting dragging new elements onto the canvas.
 */
export default function CallFlowPalette() {

    function dataGenerator (el:BrowserElement) {
        const type = el.getAttribute("data-vjs-type")
        const nodeType = NODE_TYPES.find(nt => nt.type === type)
        const base:any = Object.assign({ type }, Object.assign({}, nodeType?.payload || {}) )
        return base
    }

    return <PaletteComponent className="vjs-callflow-palette" dataGenerator={dataGenerator}>
        {NODE_TYPES.map(nt => <div data-vjs-type={nt.type} title="Drag to add new" className="vjs-callflow-palette-item" key={nt.type}>
            <div className="vjs-callflow-node-icon"/>
            {nt.label}
        </div>)}
    </PaletteComponent>
}

