import React, { useEffect, useState } from "react";
import { languageOptions } from "../constant/languageoptions";
import LanguagesDropdown from "./LanguagesDropdown";
import ThemeDropdown from "./ThemeDropdown";
import EditorWindow from "./EditorWindow";
import CustomInput from "./CustomInput";
import Output from "./Output";
import axios from "axios";
import { useMonaco } from "@monaco-editor/react";

const Layout = () => {
  const [language, setLanguage] = useState(languageOptions[0]?.name);
  const [theme, setTheme] = useState("Oceanic Next");
  const [code, setCode] = useState(languageOptions[0]?.snippet);
  const [languageId, setLanguageId] = useState(languageOptions[0]?.id);
  const [customInput, setCustomInput] = useState("");
  const [processing, setProcessing] = useState(null);
  const [outputDetails, setOutputDetails] = useState(null);
  const monaco = useMonaco();
  const themeFiles = import.meta.glob(
    "/node_modules/monaco-themes/themes/*.json"
  );
  const sanitizeThemeName = (name) => name.replace(/\s+/g, "");

  const onSelectChange = (e) => {
    const [selectedLanguage] = languageOptions.filter(
      (option) => option.name == e.target.value
    );
    setLanguage(selectedLanguage.name);
    setCode(selectedLanguage.snippet);
    setLanguageId(selectedLanguage.id);
  };

  const handleThemeChange = async (e) => {
    setTheme(e.target.value);
  };

  useEffect(() => {
    const loadTheme = async () => {
      const sanitizedThemeName = sanitizeThemeName(theme);
      const themePath =
        themeFiles[`/node_modules/monaco-themes/themes/${theme}.json`];
      const themeData = await themePath();
      if (monaco) {
        monaco.editor.defineTheme(sanitizedThemeName, themeData);
        monaco.editor.setTheme(sanitizedThemeName);
      }
    };

    loadTheme();
  }, [theme, monaco]);

  const handleCodeChange = (value, event) => {
    setCode(value);
  };

  const handleCompile = async () => {
    setProcessing(true);
    try {
      const submissionResponse = await axios.post(
        "https://judge0-ce.p.rapidapi.com/submissions",
        { language_id: languageId, source_code: code, stdin: customInput },
        {
          params: { fields: "*" },
          headers: {
            "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
            "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
            "Content-Type": "application/json",
          },
        }
      );

      const { token } = submissionResponse.data;

      checkStatus(token);
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  const checkStatus = async (token) => {
    const options = {
      method: "GET",
      url: `https://judge0-ce.p.rapidapi.com/submissions/${token}`,
      params: {
        base64_encoded: "true",
        fields: "*",
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
      },
    };

    let response = await axios.request(options);
    let statusId = response.data.status?.id;
    if (statusId === 1 || statusId === 2) {
      setTimeout(() => {
        checkStatus(token);
      }, 2000);
      return;
    } else {
      setOutputDetails(response.data);
      setProcessing(false);
    }
  };

  return (
    <div className="px-4 py-4">
      <div className="flex gap-8">
        <LanguagesDropdown
          language={language}
          onSelectChange={onSelectChange}
        />
        <ThemeDropdown theme={theme} handleThemeChange={handleThemeChange} />
      </div>

      <div className="flex gap-10">
        <EditorWindow
          code={code}
          language={language}
          theme={theme}
          handleCodeChange={handleCodeChange}
        />

        <div className="w-[600px]">
          <CustomInput
            customInput={customInput}
            setCustomInput={setCustomInput}
          />
          <Output
            outputDetails={outputDetails}
            handleCompile={handleCompile}
            processing={processing}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
