import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { ProgressBar } from '../components/ProgressBar';
import { QuestionCard } from '../components/QuestionCard';
import { questions } from '../data/questions';
import type { QuestionOption } from '../types/test';
import { calculateResult } from '../utils/calculateResult';

export function TestPage() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, QuestionOption>>({});

  const currentQuestion = questions[currentIndex];
  const currentAnswer = selectedOptions[currentQuestion.id];
  const isLastQuestion = currentIndex === questions.length - 1;
  const answeredCount = useMemo(() => Object.keys(selectedOptions).length, [selectedOptions]);

  function handleSelect(option: QuestionOption) {
    setSelectedOptions((answers) => ({
      ...answers,
      [currentQuestion.id]: option,
    }));
  }

  function handlePrevious() {
    setCurrentIndex((index) => Math.max(index - 1, 0));
  }

  function handleNext() {
    if (!currentAnswer) {
      return;
    }

    if (!isLastQuestion) {
      setCurrentIndex((index) => index + 1);
      return;
    }

    const orderedAnswers = questions.map((question) => selectedOptions[question.id]);
    const result = calculateResult(orderedAnswers);

    sessionStorage.setItem('hobeopsinjang:lastResult', JSON.stringify(result));
    navigate(`/result/${result.mainType}`);
  }

  return (
    <Layout>
      <div className="py-8">
        <ProgressBar current={answeredCount} total={questions.length} />
        <QuestionCard
          question={currentQuestion}
          selectedOptionId={currentAnswer?.id}
          onSelect={handleSelect}
        />
        <div className="mt-8 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className="rounded-lg border border-stone-300 px-5 py-3 font-semibold text-stone-700 disabled:cursor-not-allowed disabled:opacity-40"
          >
            이전
          </button>
          <button
            type="button"
            onClick={handleNext}
            disabled={!currentAnswer}
            className="rounded-lg bg-cinnabar px-5 py-3 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isLastQuestion ? '결과 보기' : '다음'}
          </button>
        </div>
      </div>
    </Layout>
  );
}
