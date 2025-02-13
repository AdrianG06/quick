import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 border rounded-lg shadow-lg bg-gray-100">
      <div className="mb-4 p-2 bg-white border rounded text-right text-xl font-mono">
        {input || "0"}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+"].map((char) => (
          <Button
            key={char}
            onClick={() => (char === "=" ? handleCalculate() : handleClick(char))}
            className="p-4 text-xl"
          >
            {char}
          </Button>
        ))}
        <Button onClick={handleClear} className="col-span-4 p-4 text-xl bg-red-500 text-white">
          Clear
        </Button>
      </div>
    </div>
  );
}