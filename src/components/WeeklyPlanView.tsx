import { useState } from 'react';
import { weeklyPlan, morningRoutine } from '../data';
import { ChevronDown, ChevronUp, Clock, Sun, Dumbbell } from 'lucide-react';

export default function WeeklyPlanView() {
  const [expandedDay, setExpandedDay] = useState<string | null>('Lunes');

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 shadow-sm border border-orange-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-orange-800">
          <Sun className="text-orange-500" />
          Rutina Matinal Diaria (15-20 min)
        </h2>
        <div className="space-y-4">
          {morningRoutine.map((section, idx) => (
            <div key={idx}>
              <h3 className="font-medium text-orange-900 mb-2">{section.title}</h3>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-orange-800 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <h2 className="text-xl font-semibold flex items-center gap-2 pt-4">
        <Dumbbell className="text-emerald-500" />
        Entrenamiento Principal
      </h2>

      <div className="space-y-3">
        {weeklyPlan.map((day) => {
          const isExpanded = expandedDay === day.day;
          return (
            <div key={day.day} className="bg-white rounded-2xl shadow-sm border border-neutral-100 overflow-hidden">
              <button 
                onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                className="w-full p-4 flex items-center justify-between text-left"
              >
                <div>
                  <h3 className="font-semibold text-lg">{day.day}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{day.title}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    day.type === 'Largo' ? 'bg-blue-100 text-blue-700' : 
                    day.type === 'Corto' ? 'bg-emerald-100 text-emerald-700' : 
                    'bg-neutral-100 text-neutral-700'
                  }`}>
                    {day.type}
                  </span>
                  {isExpanded ? <ChevronUp className="text-neutral-400" /> : <ChevronDown className="text-neutral-400" />}
                </div>
              </button>
              
              {isExpanded && (
                <div className="p-4 pt-0 border-t border-neutral-50 bg-neutral-50/50">
                  {day.warmup.length > 0 && (
                    <div className="mb-4 mt-4">
                      <h4 className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-1">
                        🔥 Calentamiento
                      </h4>
                      <ul className="space-y-1">
                        {day.warmup.map((item, i) => (
                          <li key={i} className="text-sm text-neutral-600 pl-4 border-l-2 border-orange-200">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-neutral-700 mb-2 flex items-center gap-1">
                      💪 Fuerza / Principal
                    </h4>
                    <ul className="space-y-2">
                      {day.workout.map((item, i) => (
                        <li key={i} className="text-sm text-neutral-800 bg-white p-3 rounded-lg border border-neutral-100 shadow-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
