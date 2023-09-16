import './App.css'
import { HeaderWithOptions } from './components/HeaderWithOptions.tsx'
import { NodeSelectionBar } from './components/NodeSelectionBar.tsx'
import { Editor } from './components/Editor.tsx'

function App() {
  return (
    <>
      {/* <HeaderWithOptions></HeaderWithOptions>
      <NodeSelectionBar></NodeSelectionBar> */}
      <Editor></Editor>

      <a target="_blank" href="https://icons8.com/icon/87255/code">Code</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </>
  )
}


export default App
