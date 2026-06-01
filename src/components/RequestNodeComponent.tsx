
import { Node } from "@visuallyjs/browser-ui"
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"

export default function RequestNodeComponent(props:{ctx:JsxWrapperProps<Node>}) {

    const {obj, model} = props.ctx

    return <div className="vjs-callflow-node" data-vjs-target="true">
        <div className="vjs-callflow-delete" onClick={() => model.removeNode(obj)}></div>
        <div className="vjs-callflow-label">
            <div className="vjs-callflow-node-icon"/>
            Request
        </div>
        <div className="vjs-callflow-request-url">
            {props.ctx.data.url}
        </div>
        <div className="vjs-callflow-request-port" data-vjs-port="condition">
            <span>condition</span>
            <div className="vjs-callflow-connect" data-vjs-source="true"/>
        </div>
        <div className="vjs-callflow-request-port" data-vjs-port="else">
            <span>Else</span>
            <div className="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"/>
        </div>
        <div className="vjs-callflow-request-port" data-vjs-port="failure">
            <span>Failure</span>
            <div className="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"/>
        </div>
    </div>
}
