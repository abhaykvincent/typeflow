import React, { useEffect } from 'react'
import  './Playground.scss'
import Prism from "prismjs";
function Playground() {
    const [outputHistory, setOutputHistory] = React.useState(
        [
            {
                command: 'Welcome to the playground!',
                output: 'let hello = "Hello World!"\nertyui;'
            },
            {
                command: 'function to add two numbers',
                output: 'function add(a, b) { return a + b; }'
            },
            {
                command: 'function to subtract two numbers',
                output: 'function subtract(a, b) { return a - b; }'
            },
            {
                command: 'function to multiply two numbers',
                output: 'function multiply(a, b) { return a * b; }'
            }
        ]
    )
    useEffect(() => {
        Prism.highlightAll();
      });
  return (
    <div className="playground">
        <div className="playground__header">
        <h1>Playground</h1>
        </div>
        <div className="playground__body">

        <div className="code-snippets">
            {/*  Code Snippets */}
            {
                outputHistory.map((history, index) => {
                    return (
                    <pre>
                        <code key={index} children={history.output} className='language-javascript'/>
                    </pre>
                    )
                })
            }
        </div>
        </div>
    </div>
  )
}

export default Playground