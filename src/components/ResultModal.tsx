import React from 'react';
import { X, Plus } from 'lucide-react';
import { SearchResult } from '../types';

interface Props {
  result: SearchResult;
  onClose: () => void;
}

export const ResultModal: React.FC<Props> = ({ result, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl transform transition-all duration-300 animate-modal-show">
      <div className="bg-[#8A1538] text-white p-4 flex justify-between items-center">
        <h3 className="text-xl font-bold">{result.activity_ar}</h3>
        <button
          onClick={onClose}
          className="text-white hover:text-gray-200 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-6 mb-6">
          {[
            { label: 'القطاع', value: result.chapter_ar },
            { label: 'القسم', value: result.department_ar },
            { label: 'المجموعة', value: result.group_ar },
            { label: 'الفئة', value: result.category_ar },
            { label: 'الفرع', value: result.branch_ar },
            { label: 'النتيجة', value: `${(result.score * 100).toFixed(2)}%`, isScore: true },
          ].map(({ label, value, isScore }) => (
            <div key={label} className="border-b border-gray-100 pb-2">
              <p className="font-semibold mb-1 text-[#8A1538]">{label}</p>
              <p className={isScore ? 'text-[#8A1538] font-bold' : 'text-gray-600'}>{value}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            إلغاء
          </button>
          <button className="px-6 py-2 bg-[#8A1538] text-white rounded-lg hover:bg-[#6A102B] transition-colors flex items-center gap-2">
            <Plus className="w-5 h-5" />
            إضافة
          </button>
        </div>
      </div>
    </div>
  </div>
);