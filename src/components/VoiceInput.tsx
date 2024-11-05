import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';

interface Props {
  onTranscript: (transcript: string) => void;
}

export const VoiceInput: React.FC<Props> = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false);

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('عذراً، متصفحك لا يدعم خاصية التعرف على الصوت');
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'ar-QA';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      onTranscript(transcript);
    };

    recognition.start();
  };

  return (
    <button
      onClick={startListening}
      className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      title={isListening ? 'جارٍ الاستماع...' : 'انقر للتحدث'}
    >
      {isListening ? (
        <Mic className="w-6 h-6 text-red-500" />
      ) : (
        <MicOff className="w-6 h-6 text-gray-500" />
      )}
    </button>
  );
};