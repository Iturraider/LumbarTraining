import React, { useState, useEffect } from 'react';
import { phases } from '../data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, Plus, TrendingDown } from 'lucide-react';

// Mock initial data
const initialData = [
  { week: 'Semana 1', weight: 82 },
  { week: 'Semana 2', weight: 81.5 },
  { week: 'Semana 3', weight: 81.1 },
  { week: 'Semana 4', weight: 80.6 },
];

export default function ProgressView() {
  const [data, setData] = useState(initialData);
  const [newWeight, setNewWeight] = useState('');

  const handleAddWeight = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newWeight || isNaN(Number(newWeight))) return;
    
    const nextWeek = `Semana ${data.length + 1}`;
    setData([...data, { week: nextWeek, weight: Number(newWeight) }]);
    setNewWeight('');
  };

  const currentWeight = data[data.length - 1]?.weight || 82;
  const lost = (82 - currentWeight).toFixed(1);

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      
      {/* Weight Tracker */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <TrendingDown className="text-emerald-500" />
            Progreso de Peso
          </h2>
          <div className="text-right">
            <p className="text-sm text-neutral-500">Perdido</p>
            <p className="text-xl font-bold text-emerald-600">-{lost} kg</p>
          </div>
        </div>

        <div className="h-64 w-full mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e5e5" />
              <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#737373'}} />
              <YAxis domain={['dataMin - 1', 'dataMax + 1']} axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#737373'}} />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`${value} kg`, 'Peso']}
              />
              <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <form onSubmit={handleAddWeight} className="flex gap-3">
          <input 
            type="number" 
            step="0.1"
            placeholder="Nuevo peso (kg)" 
            value={newWeight}
            onChange={(e) => setNewWeight(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-neutral-50"
          />
          <button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-medium transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Añadir
          </button>
        </form>
      </section>

      {/* 12-Week Phases */}
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Activity className="text-blue-500" />
          Progresión (12 Semanas)
        </h2>
        
        <div className="space-y-6">
          {phases.map((phase, idx) => {
            const currentWeek = data.length;
            let isActive = false;
            if (idx === 0 && currentWeek <= 4) isActive = true;
            if (idx === 1 && currentWeek > 4 && currentWeek <= 8) isActive = true;
            if (idx === 2 && currentWeek > 8) isActive = true;

            return (
              <div key={idx} className={`p-5 rounded-xl border-2 transition-colors ${isActive ? 'border-emerald-500 bg-emerald-50/30' : 'border-neutral-100 bg-neutral-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`font-bold ${isActive ? 'text-emerald-800' : 'text-neutral-800'}`}>
                    {phase.phase}
                  </h3>
                  {isActive && <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full uppercase tracking-wider">Actual</span>}
                </div>
                <p className="text-sm text-neutral-600 mb-3">{phase.description}</p>
                <div className="bg-white p-3 rounded-lg border border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">Progresión</p>
                  <p className="text-sm text-neutral-800">{phase.progression}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
