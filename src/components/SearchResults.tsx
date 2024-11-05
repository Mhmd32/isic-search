import React, { useState, useEffect } from 'react';
import { SearchResult } from '../types';
import { SearchCard } from './SearchCard';
import { ResultModal } from './ResultModal';
import { fetchSearchResults } from '../services/api';

interface Props {
  searchQuery: string;
}

export const SearchResults: React.FC<Props> = ({ searchQuery }) => {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getResults = async () => {
      if (!searchQuery) return;
      
      setLoading(true);
      setError(null);
      try {
        const data = await fetchSearchResults(searchQuery);
        setResults(data);
      } catch (err) {
        setError('حدث خطأ أثناء جلب النتائج. يرجى المحاولة مرة أخرى.');
      } finally {
        setLoading(false);
      }
    };

    getResults();
  }, [searchQuery]);

  if (loading) {
    return (
      <div className="mt-8 text-center text-gray-600">
        جاري تحميل النتائج...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-8 text-center text-red-600">
        {error}
      </div>
    );
  }

  if (!results.length) {
    return null;
  }

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((result, index) => (
          <SearchCard
            key={index}
            result={result}
            onClick={() => setSelectedResult(result)}
          />
        ))}
      </div>

      {selectedResult && (
        <ResultModal
          result={selectedResult}
          onClose={() => setSelectedResult(null)}
        />
      )}
    </div>
  );
};