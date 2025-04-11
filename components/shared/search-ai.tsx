"use client";

import { cn } from "@/lib/utils";
import { Paperclip, Search, Send, Sparkles, X } from "lucide-react";
import { useRef, useState } from "react";

interface SearchAiProps {
  className?: string;
}

export const SearchAi = ({ className }: SearchAiProps) => {
  const [changeMode, setChangeMode] = useState(false);
  const [hasFile, setHasFile] = useState(false);
  const [hasValue, setHasValue] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setHasFile(true);
      // Здесь можно добавить логику обработки файла
      console.log("Selected file:", file);
    } else {
      setHasFile(false);
    }
  };

  return (
    <>
      <div className={cn("mx-10 flex-1", className)}>
        <div className="flex rounded-2xl flex-1 justify-between h-11 z-30 relative">
          <div className="absolute top-1/2 translate-y-[-50%] left-2 flex items-center">
            <div className="flex items-center rounded-lg gap-1">
              <button
                onClick={() => setChangeMode((prev) => !prev)}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-500 ease-in-out",
                  !changeMode
                    ? "bg-white shadow-sm text-primary translate-x-8"
                    : "hover:bg-gray-200 translate-x-0"
                )}>
                <Search className="h-4 w-4" />
              </button>
              <button
                onClick={() => setChangeMode((prev) => !prev)}
                className={cn(
                  "p-1.5 rounded-md transition-all duration-500 ease-in-out",
                  changeMode
                    ? "bg-white shadow-sm text-primary translate-x-0"
                    : "hover:bg-gray-200 -translate-x-8"
                )}>
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
          </div>
          <input
            onChange={(event) => setHasValue(event.target.value)}
            className="rounded-2xl outline-none w-full bg-gray-100 pl-20 pr-19"
            type="text"
            placeholder={changeMode ? "Найти с помощью AI..." : "Поиск..."}
            defaultValue=""
          />

          {/* Правая часть */}
          <div className="absolute top-1/2 translate-y-[-50%] right-3 flex items-center">
            <div className="flex items-center">
              {!changeMode && (
                <button
                  className={cn(
                    "hidden p-1.5 mr-1 rounded-md text-foreground/50 hover:text-foreground",
                    hasValue || hasFile
                      ? "text-foreground block"
                      : "hidden"
                  )}
                  title="Прикрепить файл">
                  <X size={20} className="" />
                </button>
              )}

              {changeMode && (
                <button
                  onClick={handleFileClick}
                  className={cn(
                    "p-1.5 mr-1 rounded-md transition-all text-foreground/50 hover:text-foreground",
                    hasFile
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-gray-200 text-gray-500"
                  )}
                  title="Прикрепить файл">
                  <Paperclip size={18} className="" />
                </button>
              )}
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt"
              />

              <button
                className={cn(
                  "p-1.5 rounded-md transition-colors",
                  hasValue || hasFile
                    ? "bg-white/80 hover:bg-white text-primary"
                    : "bg-none text-foreground/50"
                )}
                title="Найти">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
