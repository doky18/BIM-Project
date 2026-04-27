import type { Question, QuestionOption } from '../types/test';

interface QuestionCardProps {
  question: Question;
  selectedOptionId?: QuestionOption['id'];
  onSelect: (option: QuestionOption) => void;
}

export function QuestionCard({
  question,
  selectedOptionId,
  onSelect,
}: QuestionCardProps) {
  return (
    <section className="mt-8">
      <p className="text-sm font-semibold text-saffron">Q{question.id}</p>
      <h1 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
        {question.question}
      </h1>
      <div className="mt-7 grid gap-3">
        {question.options.map((option) => {
          const isSelected = selectedOptionId === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onSelect(option)}
              className={`rounded-lg border px-4 py-4 text-left text-base transition ${
                isSelected
                  ? 'border-jade bg-jade text-white shadow-sm'
                  : 'border-stone-300 bg-white hover:border-jade'
              }`}
            >
              <span className="mr-2 font-bold">{option.id}.</span>
              {option.text}
            </button>
          );
        })}
      </div>
    </section>
  );
}
