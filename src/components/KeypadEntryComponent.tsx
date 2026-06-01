import { Node } from "@visuallyjs/browser-ui"
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"
import {ALL_KEYS} from "../constants"

export default function KeypadEntryComponent(props:{ctx:JsxWrapperProps<Node>, keys?:Array<string>}) {

    const keys = props.keys || ALL_KEYS

    const {obj, model} = props.ctx

    return <div className="vjs-callflow-node" data-vjs-target="true">
        <div className="vjs-callflow-delete" onClick={() => model.removeNode(obj)}></div>
        <div className="vjs-callflow-label">
            <div className="vjs-callflow-node-icon"/>
            Keypad Entry
        </div>
        <div className="vjs-callflow-keypad">
            {keys.map(key =>
                <div className="vjs-callflow-keypad-key" data-vjs-port={key} key={key}>
                    <span>{key}</span>
                    <div className="vjs-callflow-connect" data-vjs-source="true"/>
                </div>
            )}
        </div>
    </div>
}
