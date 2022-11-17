import React,{useEffect} from 'react'
import Prism from "prismjs";
import './SourceCode.scss'
function SourceCode() {
  const [output, setOutput] = React.useState(
  [
      {
          command: 'Welcome to the playground!',
          output: 'let hello = "Hello World!"\nertyui;'
      },
      {
          command: 'function to add two numbers',
          output: 'function add(a, b) { return a + b; }'
      }
  ]
)
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div className="source-code">
        <div className="source-code__header">
        <h1>Source Code</h1>
        <div className="source-code__header-options">
            <div className="option-button copy"></div>
            <div className="option-button delete"></div>
        </div>
        </div>
        <div className="source-code__body">

        {/* Final Code */}
        {
                output.map((history, index) => {
                    return (
                    <pre>
                        <code key={index} children={history.output} className='language-javascript'/>
                    </pre>
                    )
                })
            }
        </div>
    </div>
  )
}

export default SourceCode