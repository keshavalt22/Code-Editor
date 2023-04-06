import React from "react";
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

export default function Editor(props) {
    let { displayName,
        language,
        value,
        onChange
    } = props



    function handleChange(editor, data, value) {
        onChange(value)
    }

    return (
        <div>
            <div>
                <h3>{displayName}</h3>
            </div>
            <ControlledEditor
                onBeforeChange={handleChange}
                value={value}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'
                }}
            />
        </div>
    )
}