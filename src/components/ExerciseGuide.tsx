import { useState } from 'react';
import { exercises } from '../data';
import { Search, BookOpen } from 'lucide-react';

export default function ExerciseGuide() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredExercises = exercises.filter(ex => 
    ex.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    ex.translation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="sticky top-0 bg-neutral-50 pt-2 pb-4 z-10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="text-blue-500" />
          Guía de Ejercicios
        </h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Buscar ejercicio..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white shadow-sm"
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredExercises.length > 0 ? (
          filteredExercises.map((ex, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-neutral-100">
              <h3 className="font-semibold text-lg text-neutral-900">{ex.name}</h3>
              <p className="text-sm font-medium text-emerald-600 mb-2">({ex.translation})</p>
              <p className="text-sm text-neutral-600 leading-relaxed">{ex.description}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-10 text-neutral-500">
            No se encontraron ejercicios con ese nombre.
          </div>
        )}
      </div>
    </div>
  );
}
