import {useRef} from "react"
import {InspectorComponent} from "@visuallyjs/browser-ui-react"

import {Base, isNode, isPort, Vertex} from "@visuallyjs/browser-ui"
import {PROPERTY_TEXT, PROPERTY_URL, TYPE_CONDITIONS, PROPERTY_NUMBER, TYPE_CALL_FORWARD, TYPE_PLAY_AUDIO, TYPE_REQUEST, TYPE_SET_VARIABLES} from "./constants"

import SetValuesInspectorComponent from "./SetValuesInspectorComponent"
import {BrowserUIReactModel, useVisuallyJsModel} from "@visuallyjs/browser-ui-react";

const portTypeMap:Record<string, string> = {
    [TYPE_CONDITIONS]:"condition"
}

export default function CallflowInspector() {

    const model = useRef<BrowserUIReactModel>(null)
    useVisuallyJsModel().then(m => model.current = m)

    function getType(obj:Base) {
        if (isNode(obj)) {
            return obj.type
        } else if (isPort(obj)) {
            return portTypeMap[obj.getParent().type]
        }
    }

    function updateVariables(obj:Vertex, variables:Array<any>) {
        model.current!.updateNode(obj, {variables})
        model.current!.clearSelection()
    }

    function cancel() {
        model.current!.clearSelection()
    }

    return <InspectorComponent className="vjs-callflow-inspector">

        {(current:Base) => <>
            {getType(current) === TYPE_PLAY_AUDIO && <>
                <span>Text:</span>
                <textarea rows={10} cols={10} vjs-att={PROPERTY_TEXT} vjs-focus="true" placeholder="enter text to speak..."/>
            </>}

            {getType(current) === TYPE_REQUEST && <>
                <span>URL:</span>
                <input type="text" vjs-att={PROPERTY_URL} vjs-focus="true" placeholder="enter request URL..."/>
            </>}

            {getType(current) === TYPE_CALL_FORWARD && <>
                <span>Phone Number:</span>
                <input type="text" vjs-att={PROPERTY_NUMBER} vjs-focus="true" placeholder="enter phone number..."/>
            </>}

            {getType(current) === TYPE_SET_VARIABLES && <>
                <SetValuesInspectorComponent obj={current as Vertex} save={updateVariables} cancel={cancel}/>
            </>}

            {getType(current) === "condition" && <>
                <span>Condition:</span>
                <input vjs-att="value" placeholder="enter condition..." vjs-focus="true"/>
            </>}

        </>}


    </InspectorComponent>


}
