
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { LightbulbIcon, Zap, ClipboardCopy, Cog } from "lucide-react";
import { toast } from "sonner";
import { generatePoem } from '@/lib/poemGenerationService';

const PoemStyles = [
  { value: "haiku", label: "Haiku (5-7-5 syllables)" },
  { value: "sonnet", label: "Sonnet (14 lines)" },
  { value: "freeVerse", label: "Free Verse" },
];

const PoemGenerator = () => {
  const [topic, setTopic] = useState('');
  const [poemStyle, setPoemStyle] = useState(PoemStyles[0].value);
  const [poem, setPoem] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast.error("Please enter an engineering topic");
      return;
    }

    setIsGenerating(true);
    try {
      const generatedPoem = await generatePoem(topic, poemStyle);
      setPoem(generatedPoem);
    } catch (error) {
      toast.error("Failed to generate poem. Please try again.");
      console.error("Error generating poem:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = () => {
    if (!poem) return;
    
    navigator.clipboard.writeText(poem)
      .then(() => toast.success("Poem copied to clipboard!"))
      .catch(() => toast.error("Failed to copy poem"));
  };

  return (
    <div className="poem-card max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <LightbulbIcon className="text-volt-yellow animate-flicker" size={24} />
          <h2 className="text-lg md:text-xl font-bold">Engineering Poetry Generator</h2>
        </div>
        <Cog className="text-volt-navy/50 animate-rotate-slow" size={20} />
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="topic" className="block text-sm font-medium mb-1">
            Engineering Topic
          </label>
          <input
            id="topic"
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., robotics, quantum computing, hydraulics..."
            className="volt-input"
          />
        </div>

        <div>
          <label htmlFor="poemStyle" className="block text-sm font-medium mb-1">
            Poem Style
          </label>
          <div className="select-wrapper">
            <select
              id="poemStyle"
              value={poemStyle}
              onChange={(e) => setPoemStyle(e.target.value)}
              className="volt-select"
            >
              {PoemStyles.map((style) => (
                <option key={style.value} value={style.value}>
                  {style.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <Button 
          className="volt-button w-full flex items-center justify-center gap-2"
          onClick={handleGenerate}
          disabled={isGenerating || !topic.trim()}
        >
          <Zap size={16} className="text-volt-navy" />
          {isGenerating ? "Crafting Poetry..." : "⚡ Generate My Poem"}
        </Button>
      </div>

      {poem && (
        <div className="space-y-4 animate-fade-in">
          <div className="poem-display">
            {poem}
          </div>
          
          <Button
            className="flex items-center gap-2 ml-auto bg-volt-yellow hover:bg-volt-yellow/80 text-volt-navy rounded-xl px-4 py-2 text-sm shadow-sm hover:shadow transition-all"
            onClick={copyToClipboard}
          >
            <ClipboardCopy size={14} />
            Copy Poem
          </Button>
        </div>
      )}
    </div>
  );
};

export default PoemGenerator;
