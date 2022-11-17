import React from 'react'

function SourceCode() {
  return (
    <div className="source-code">
        <div className="source-code__header">
        <h1>Source Code</h1>
        <div className="source-code__header-options">
            <div className="option-button copy"> copy</div>
            <div className="option-button delete"> delete</div>
        </div>
        </div>
        <div className="source-code__body">

        {/* Final Code */}
        <pre>
            <code>
            {`import React from 'react';`}
            </code>
        </pre>
        </div>
    </div>
  )
}

export default SourceCode