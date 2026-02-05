import { exerciseCategories } from "@/data/exercises";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";

interface ExerciseCategoryViewProps {
  categoryId: string;
  onBack: () => void;
}

export function ExerciseCategoryView({ categoryId, onBack }: ExerciseCategoryViewProps) {
  const category = exerciseCategories.find((c) => c.id === categoryId);

  if (!category) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Categoria non trovata</p>
        <button
          onClick={onBack}
          className="mt-4 text-primary hover:underline"
        >
          Torna indietro
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        Torna agli esercizi
      </button>

      {/* Header */}
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card via-card/95 to-card/90 p-8">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl animate-pulse"
            style={{ backgroundColor: `hsl(var(${category.colorVar}) / 0.1)` }}
          />
          <div
            className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full blur-3xl"
            style={{ backgroundColor: `hsl(var(${category.colorVar}) / 0.05)` }}
          />
        </div>

        <div className="relative">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg"
              style={{
                backgroundColor: `hsl(var(${category.colorVar}) / 0.15)`,
                boxShadow: `0 0 30px hsl(var(${category.colorVar}) / 0.2)`,
              }}
            >
              <span className="text-4xl">{category.emoji}</span>
            </div>
            <div>
              <h1
                className="text-3xl font-bold"
                style={{ color: `hsl(var(${category.colorVar}))` }}
              >
                {category.name}
              </h1>
              <p className="text-muted-foreground">
                {category.exercises.length} esercizi pratici
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Exercise List */}
      <div className="space-y-3">
        {category.exercises.map((exercise, index) => (
          <div
            key={exercise.id}
            className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/80 p-5 transition-all duration-300 hover:border-border hover:bg-card"
            style={{
              animationDelay: `${index * 30}ms`,
            }}
          >
            <div className="flex items-start gap-4">
              {/* Number */}
              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: `hsl(var(${category.colorVar}) / 0.1)`,
                }}
              >
                <span
                  className="text-sm font-bold"
                  style={{ color: `hsl(var(${category.colorVar}))` }}
                >
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground">
                  {exercise.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {exercise.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
