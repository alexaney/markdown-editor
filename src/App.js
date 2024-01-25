import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import updateMarkdown from './updateMarkdown';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

function App() {
  
  const markdown = useSelector((state) => state.input);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(updateMarkdown(event.target.value));
  }

  const formattedMarkdown = markdown.replace(/(\r\n|\n|\r)(?!\n)/g, "$1\n");



  return (
    <div className="App">
        <div id="heading">
          <h1>Markdown Editor</h1>
          <h3>by Alex Aney</h3>
        </div>
        <div id="body">
          <div id="input">
            <textarea id="editor" value={markdown} onChange={handleChange}></textarea>
          </div>
          <div id="output">
            <div id="preview">
              <ReactMarkdown>{formattedMarkdown}</ReactMarkdown>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
