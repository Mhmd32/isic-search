import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { VoiceInput } from './components/VoiceInput';
import { SearchResults } from './components/SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSearch = () => {
    setSubmitted(true);
  };

  const handleVoiceInput = (transcript: string) => {
    setSearchQuery(transcript);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <img
            src="https://www.moci.gov.qa/wp-content/uploads/2021/10/moci-logo.png"
            alt="وزارة التجارة والصناعة"
            className="mx-auto h-24 mb-4"
          />
          <h1 className="text-3xl font-bold text-[#8A1538] mb-2">البحث المتقدم</h1>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-2 border rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#8A1538]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="أدخل استعلام البحث..."
                className="flex-1 p-3 outline-none text-right"
              />
              <VoiceInput onTranscript={handleVoiceInput} />
              <button
                onClick={handleSearch}
                className="p-3 bg-[#8A1538] text-white hover:bg-[#6A102B] transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {submitted && <SearchResults searchQuery={searchQuery} />}
        </div>
      </div>
    </div>
  );
}

export default App;