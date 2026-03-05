import { Utensils, Flame, Droplet, Apple, Egg, Fish, Coffee } from 'lucide-react';

export default function NutritionView() {
  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Flame className="text-orange-500" />
          Objetivos Diarios
        </h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-orange-50 p-4 rounded-xl">
            <p className="text-sm text-orange-600 mb-1">Gasto Estimado</p>
            <p className="text-xl font-bold text-orange-900">2400-2600 kcal</p>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl">
            <p className="text-sm text-emerald-600 mb-1">Meta Pérdida</p>
            <p className="text-xl font-bold text-emerald-900">1900-2100 kcal</p>
          </div>
        </div>

        <h3 className="font-semibold text-neutral-800 mb-3">Macros Recomendados</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Egg className="text-amber-500 w-5 h-5" />
              <span className="font-medium">Proteína</span>
            </div>
            <span className="font-bold">140 g</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Droplet className="text-blue-500 w-5 h-5" />
              <span className="font-medium">Grasas</span>
            </div>
            <span className="font-bold">60-70 g</span>
          </div>
          <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
            <div className="flex items-center gap-2">
              <Apple className="text-red-500 w-5 h-5" />
              <span className="font-medium">Carbohidratos</span>
            </div>
            <span className="font-bold">~180-220 g</span>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl p-6 shadow-sm border border-neutral-100">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Utensils className="text-emerald-500" />
          Ejemplo de Día (~2000 kcal)
        </h2>
        
        <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-amber-100 text-amber-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Coffee className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <h4 className="font-bold text-neutral-800 mb-1">Desayuno</h4>
              <ul className="text-sm text-neutral-600 space-y-1 list-disc pl-4">
                <li>3 huevos + 2 claras</li>
                <li>Avena 50 g</li>
                <li>Fruta</li>
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-emerald-100 text-emerald-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Utensils className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <h4 className="font-bold text-neutral-800 mb-1">Comida</h4>
              <ul className="text-sm text-neutral-600 space-y-1 list-disc pl-4">
                <li>150 g pollo</li>
                <li>150 g arroz cocido</li>
                <li>Verdura</li>
                <li>1 cucharada AOVE</li>
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-100 text-blue-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Fish className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <h4 className="font-bold text-neutral-800 mb-1">Cena</h4>
              <ul className="text-sm text-neutral-600 space-y-1 list-disc pl-4">
                <li>200 g pescado</li>
                <li>Verdura abundante</li>
                <li>100 g patata</li>
              </ul>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-purple-100 text-purple-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
              <Apple className="w-5 h-5" />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl shadow-sm border border-neutral-100">
              <h4 className="font-bold text-neutral-800 mb-1">Snack</h4>
              <ul className="text-sm text-neutral-600 space-y-1 list-disc pl-4">
                <li>Yogur griego</li>
                <li>Frutos rojos</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
