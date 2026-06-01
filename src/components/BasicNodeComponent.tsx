import { Node } from "@visuallyjs/browser-ui"
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"
import {getNodeLabel} from "../node-types"

/**
 * Default component to use for nodes. Node types that do not have custom UI use this one.
 * @param props
 * @constructor
 */
export default function BasicNodeComponent(props:{ctx:JsxWrapperProps<Node>}) {

    const vertex = props.ctx.obj
    const label = getNodeLabel(vertex.type)
    const data = props.ctx.data
    const model = props.ctx.model

    return <div className="vjs-callflow-node" data-vjs-target="true">
        <div className="vjs-callflow-delete" onClick={() => model.removeNode(vertex)}></div>
                <div className="vjs-callflow-label">
                    <div className="vjs-callflow-node-icon"/>
                    {label}
                </div>
                {data.text && <div className="vjs-callflow-node-text">{data.text}</div>}
                <div className="vjs-callflow-connect" data-vjs-source="true"/>
            </div>
}
