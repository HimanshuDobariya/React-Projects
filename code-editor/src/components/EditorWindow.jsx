import React from "react";
import Editor from "@monaco-editor/react";

const EditorWindow = ({ code, language, theme, handleCodeChange }) => {
  return (
    <div className="border-2  rounded-md overflow-hidden w-full h-full shadow-4xl">
      <Editor
        height="80vh"
        value={code}
        language={language}
        theme={theme}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default EditorWindow;
