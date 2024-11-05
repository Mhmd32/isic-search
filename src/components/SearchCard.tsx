import React from 'react';
import { SearchResult } from '../types';

interface Props {
  result: SearchResult;
  onClick: () => void;
}

export const SearchCard: React.FC<Props> = ({ result, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
  >
    <div className="bg-[#8A1538] text-white p-4">
      <h3 className="text-xl font-bold text-center">{result.activity_ar}</h3>
    </div>
    <div className="p-4 space-y-3">
      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
        <span className="font-semibold text-[#8A1538]">القطاع:</span>
        <span className="text-gray-600">{result.chapter_ar}</span>
      </div>
      <div className="flex justify-between items-center border-b border-gray-100 pb-2">
        <span className="font-semibold text-[#8A1538]">القسم:</span>
        <span className="text-gray-600">{result.department_ar}</span>
      </div>
      <div className="flex justify-between items-center pt-2">
        <span className="font-semibold text-[#8A1538]">النتيجة:</span>
        <span className="text-[#8A1538] font-bold">{(result.score * 100).toFixed(2)}%</span>
      </div>
    </div>
  </div>
);