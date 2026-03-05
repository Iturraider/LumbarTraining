import { AlertTriangle, Target, TrendingDown, ShieldCheck } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Target className="text-emerald-500" />
          Objetivo Realista
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-neutral-50 p-4 rounded-xl">
            <p className="text-sm text-neutral-500 mb-1">Peso Actual</p>
            <p className="text-2xl font-bold">82 kg</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl">
            <p className="text-sm text-emerald-600 mb-1">Objetivo</p>
            <p className="text-2xl font-bold text-emerald-700">68 kg</p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 text-sm text-neutral-600">
          <TrendingDown className="w-4 h-4" />
          <p>Pérdida necesaria: <strong>14 kg</strong> (~0.5 kg/semana en 5-7 meses)</p>
        </div>
      </section>

      <section className="bg-amber-50 rounded-2xl p-6 shadow-sm border border-amber-100">
        <h2 className="text-lg font-semibold text-amber-900 mb-3 flex items-center gap-2">
          <AlertTriangle className="text-amber-500" />
          Protección L5-S1
        </h2>
        <ul className="space-y-3 text-amber-800 text-sm">
          <li className="flex items-start gap-2">
            <span className="font-bold mt-0.5">Evita:</span>
            <span>Hiperextensión lumbar repetida, Ab wheel con fatiga, Saltos, HIIT agresivo.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-0.5">Prioriza:</span>
            <span>Glúteos fuertes, Anti-rotación, Control abdominal.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold mt-0.5">Flexiones:</span>
            <span>No hagas 100 seguidas. Usa formato acumulativo (ej. 10x10) para evitar sobrecarga de hombro y hundimiento lumbar.</span>
          </li>
        </ul>
      </section>

      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <ShieldCheck className="text-blue-500" />
          Estructura Semanal
        </h2>
        <div className="space-y-3">
          <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
            <span className="font-medium">Días Largos (1h)</span>
            <span className="text-sm text-neutral-500">Lunes, Miércoles, Viernes</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
            <span className="font-medium">Días Cortos (30m)</span>
            <span className="text-sm text-neutral-500">Martes, Jueves</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-neutral-50 rounded-lg">
            <span className="font-medium">Fin de Semana</span>
            <span className="text-sm text-neutral-500">Movilidad o Caminata</span>
          </div>
        </div>
      </section>
    </div>
  );
}
