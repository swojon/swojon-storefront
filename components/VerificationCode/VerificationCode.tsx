import React, { useState, useRef } from "react";
import "./VerificationCode.css";

const VerificationCode = ({
  length,
  label,
  loading,
  onComplete,
}: {
  length: any;
  label: any;
  loading: any;
  onComplete: any;
}) => {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef<any>([]);
  // Typescript
  // useRef<(HTMLInputElement | null)[]>([])

  const processInput = (e: any, slot: any) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e: any, slot: any) => {
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  return (
    <div className="code-input">
      <div className="code-inputs mx-auto">
        {code.map((num, idx) => {
          return (
            <input
              key={idx}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={num}
              autoFocus={!code[0].length && idx === 0}
              readOnly={loading}
              onChange={(e) => processInput(e, idx)}
              onKeyUp={(e) => onKeyUp(e, idx)}
              ref={(ref) => inputs.current.push(ref)}
              className="text-primaryColor p-2"
            />
          );
        })}
      </div>
    </div>
  );
};

export default VerificationCode;
