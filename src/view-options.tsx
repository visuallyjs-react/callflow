import {EVENT_TAP, NodeEventCallbackPayload, type BrowserElement, DEFAULT, Node, OVERLAY_VISIBILITY_HOVER, PlainArrowOverlay} from "@visuallyjs/browser-ui";
import { JsxWrapperProps } from "@visuallyjs/browser-ui-react";
import {
    SELECTABLE,
    TYPE_CALL_FORWARD,
    TYPE_CONDITIONS,
    TYPE_KEYPAD_ENTRY,
    TYPE_REQUEST,
    TYPE_SET_VARIABLES
} from "./constants";
import BasicNodeComponent from "./components/BasicNodeComponent";
import SetVariablesComponent from "./components/SetVariablesComponent";
import RequestNodeComponent from "./components/RequestNodeComponent";
import KeypadEntryComponent from "./components/KeypadEntryComponent";
import ConditionsComponent from "./components/ConditionsComponent";
import CallForwardingComponent from "./components/CallForwardingComponent";

/**
 * View options map node/group types to the JSX used to render them and to various aspects of the given vertex type's
 * behaviour. They also allow you to map edge types to edge appearance and behaviour, although for simple config
 * you can use the `edges` render option in place of an edge mapping a view (see code above).
 */
const viewOptions = {
    nodes:{
        // abstract parent mapping with an event binding to the TAP event - user taps a node
        // and it is set as the Toolkit's current selection.
        [SELECTABLE]:{
            events:{
                [EVENT_TAP]:(p:NodeEventCallbackPayload<BrowserElement>) => {
                    p.model.setSelection(p.obj)
                }
            }
        },
        [DEFAULT]:{
            // The default mapping uses `BasicNodeComponent`, which shows a label and
            // optionally some text. If there is no other mapping found for a node this
            // one is used.
            parent:SELECTABLE,
            jsx:(ctx:JsxWrapperProps<Node>) => <BasicNodeComponent ctx={ctx}/>
        },
        // Some more complex nodes have their own components...
        [TYPE_SET_VARIABLES]:{
            parent:SELECTABLE,
            jsx:(ctx:JsxWrapperProps<Node>) => <SetVariablesComponent ctx={ctx}/>
        },
        [TYPE_REQUEST]:{
            parent:SELECTABLE,
            jsx:(ctx:JsxWrapperProps<Node>) => <RequestNodeComponent ctx={ctx}/>
        },
        [TYPE_KEYPAD_ENTRY]:{
            parent:SELECTABLE,
            jsx:(ctx:JsxWrapperProps<Node>) => <KeypadEntryComponent ctx={ctx}/>
        },
        [TYPE_CONDITIONS]:{
            parent:SELECTABLE,
            jsx:(ctx:JsxWrapperProps<Node>) => <ConditionsComponent ctx={ctx}/>
        },
        [TYPE_CALL_FORWARD]:{
            parent:SELECTABLE,
            jsx:(ctx:JsxWrapperProps<Node>) => <CallForwardingComponent ctx={ctx}/>
        }
    },
    edges:{
        [DEFAULT]:{
            // edges have a delete button that is visible on hover (although on
            // a touch device visuallyjs will ensure it is always visible)
            deleteButton:OVERLAY_VISIBILITY_HOVER,
            targetMarker:{
                // show a plain arrow at the end of each edge.
                type:PlainArrowOverlay.type,
                options:{
                    width:10,
                    length:10
                }
            }
        }
    }
}

export default viewOptions
