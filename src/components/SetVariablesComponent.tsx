import {Node} from "@visuallyjs/browser-ui"
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"
import {CallFlowVariable} from "../definitions.ts";

export default function SetVariablesComponent(props:{ctx:JsxWrapperProps<Node>}) {

    const {obj, model} = props.ctx

    return <div className="vjs-callflow-node" data-vjs-target="true">
        <div className="vjs-callflow-delete" onClick={() => model.removeNode(obj)}></div>
        <div className="vjs-callflow-label">
            <div className="vjs-callflow-node-icon"/>
            Set Variables
        </div>

        {obj.data.variables.map((variable:CallFlowVariable) => <div className="vjs-callflow-variable" key={variable.id}>
            <span className="vjs-callflow-variable-name">{variable.name}</span>
            =
            <span className="vjs-callflow-variable-value">{variable.value}</span>
        </div>)}


        <div className="vjs-callflow-connect" data-vjs-source="true"/>


</div>
}
