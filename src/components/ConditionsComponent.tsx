import { Node } from "@visuallyjs/browser-ui"
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react"
import {CallFlowCondition} from "../definitions.ts";

export default function ConditionsComponent(props:{ctx:JsxWrapperProps<Node>}) {

    const {obj, model} = props.ctx

    function editCondition(id:string) {
        const port = obj.getPort(id)
        if (port != null) {
            model.setSelection(port)
        }
    }

    function removeCondition(id:string) {
        const port = obj.getPort(id)
        model.removePort(port)
    }

    function addCondition() {
        const order = obj.data.conditions.length,
            id = `${order}`

        model.addNewPort(obj, "condition", {
            id,
            order,
            value:"New Condition"
        })

            setTimeout(() => model.setSelection(obj.getPort(id)) )
    }

    return <div className="vjs-callflow-node" data-vjs-target="true">
        <div className="vjs-callflow-delete" onClick={() => model.removeNode(obj)}></div>
        <div className="vjs-callflow-label">
            <div className="vjs-callflow-node-icon"/>
            Conditions
            <div className="vjs-callflow-add-condition" onClick={() => addCondition()}>+</div>
        </div>
        {obj.data.conditions.map((condition:CallFlowCondition) =>  <div key={condition.id} className="vjs-callflow-condition" data-vjs-port={condition.id}>
                <span onClick={() => editCondition(condition.id)} title={condition.value}>{condition.value}</span>
                <div className=" vjs-callflow-connect" data-vjs-source="true"/>
                {condition.value !== "Else" && <div className="vjs-edge-delete" onClick={() => removeCondition(condition.id)}/>}
            </div>
        )}


  </div>
}
