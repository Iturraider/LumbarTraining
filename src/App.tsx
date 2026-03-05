import React, { useState } from 'react';
import { Home, Calendar, BookOpen, Utensils, Activity } from 'lucide-react';
import Dashboard from './components/Dashboard';
import WeeklyPlanView from './components/WeeklyPlanView';
import ExerciseGuide from './components/ExerciseGuide';
import NutritionView from './components/NutritionView';
import ProgressView from './components/ProgressView';

export default function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'dashboard': return <Dashboard />;
      case 'plan': return <WeeklyPlanView />;
      case 'exercises': return <ExerciseGuide />;
      case 'nutrition': return <NutritionView />;
      case 'progress': return <ProgressView />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-neutral-50 text-neutral-900 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Activity className="text-emerald-600 w-6 h-6" />
          <h1 className="font-semibold text-lg tracking-tight">L5-S1 Tracker</h1>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24">
        {renderView()}
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-neutral-200 fixed bottom-0 w-full z-20 pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
          <NavItem 
            icon={<Home />} 
            label="Inicio" 
            isActive={currentView === 'dashboard'} 
            onClick={() => setCurrentView('dashboard')} 
          />
          <NavItem 
            icon={<Calendar />} 
            label="Plan" 
            isActive={currentView === 'plan'} 
            onClick={() => setCurrentView('plan')} 
          />
          <NavItem 
            icon={<Activity />} 
            label="Progreso" 
            isActive={currentView === 'progress'} 
            onClick={() => setCurrentView('progress')} 
          />
          <NavItem 
            icon={<Utensils />} 
            label="Dieta" 
            isActive={currentView === 'nutrition'} 
            onClick={() => setCurrentView('nutrition')} 
          />
          <NavItem 
            icon={<BookOpen />} 
            label="Guía" 
            isActive={currentView === 'exercises'} 
            onClick={() => setCurrentView('exercises')} 
          />
        </div>
      </nav>
    </div>
  );
}

function NavItem({ icon, label, isActive, onClick }: { icon: React.ReactNode, label: string, isActive: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${isActive ? 'text-emerald-600' : 'text-neutral-500 hover:text-neutral-800'}`}
    >
      <div className={`[&>svg]:w-5 [&>svg]:h-5 ${isActive ? 'stroke-[2.5px]' : 'stroke-2'}`}>
        {icon}
      </div>
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
