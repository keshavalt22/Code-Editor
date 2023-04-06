import React from "react";
import Editor from "./Editor";
import { useState, useEffect } from "react";

function App() {

  const [html, setHtml] = useState(`<center>
  <img src="https://images.unsplash.com/photo-1594669778020-9116ec3fb745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
  <h1>Rise-Up</h1>
  <h2>People</h2>
</center>`)
  const [css, setCss] = useState(`h1 {
    color: blue
}
h2 {
    color: red
}
img {
    width: 200px;
    height: auto;
    border-radius: 20px;
}`)
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      </html>
    `)
    }, 1000)
    return () => clearTimeout(timeout)
  }, [html, css])


  return (
    <>
      <h1>Code Editor</h1>
      <div className="flex container">
        <div className="flex-40">
          <Editor
            language="xml"
            displayName="HTML"
            value={html}
            onChange={setHtml}
          />
          <Editor
            language="css"
            displayName="CSS"
            value={css}
            onChange={setCss}
          />
        </div>
        <div className="flex-40">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </>
  )

}

export default App;
