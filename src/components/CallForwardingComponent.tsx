import { Node } from "@visuallyjs/browser-ui"
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"

export default function CallForwardingComponent(props:{ctx:JsxWrapperProps<Node>}) {

    const {data, model, obj} = props.ctx

    return <div className="vjs-callflow-node" data-vjs-target="true">
        <div className="vjs-callflow-delete" onClick={() => model.removeNode(obj)}></div>
        <div className="vjs-callflow-label">
            <div className="vjs-callflow-node-icon"/>
            Forward to Phone
        </div>
        {data.number != null && <div className="vjs-callflow-node-text">
            {data.number}
        </div>}
        <div className="vjs-callflow-condition" data-vjs-port="success">
            Success
            <div className="vjs-callflow-connect" data-vjs-source="true"/>
        </div>
        <div className="vjs-callflow-condition" data-vjs-port="no-answer">
            No Answer
            <div className="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"/>
        </div>
        <div className="vjs-callflow-condition" data-vjs-port="busy">
            Busy
            <div className="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"/>
        </div>
        <div className="vjs-callflow-condition" data-vjs-port="decline">
            Decline
            <div className="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"/>
        </div>
        <div className="vjs-callflow-condition" data-vjs-port="error">
            Error
            <div className="vjs-callflow-connect vjs-callflow-fail-path" data-vjs-source="true"/>
        </div>
    </div>

}
