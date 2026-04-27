import { Link, useParams } from 'react-router-dom';
import { ResultCard } from '../components/ResultCard';
import { ShareButtons } from '../components/ShareButtons';
import { resultProfiles } from '../data/results';
import { Layout } from '../components/Layout';
import type { CalculatedResult, GuardianType } from '../types/test';

function getStoredResult(): CalculatedResult | null {
  const rawResult = sessionStorage.getItem('hobeopsinjang:lastResult');

  if (!rawResult) {
    return null;
  }

  try {
    return JSON.parse(rawResult) as CalculatedResult;
  } catch {
    return null;
  }
}

export function ResultPage() {
  const { type } = useParams();
  const storedResult = getStoredResult();
  const profile = resultProfiles[type as GuardianType] ?? resultProfiles.wit;
  const subProfile = storedResult ? resultProfiles[storedResult.subType] : undefined;

  return (
    <Layout>
      <div className="py-8">
        <ResultCard profile={profile} subProfile={subProfile} />
        <div className="mt-6 flex flex-wrap gap-3">
          <ShareButtons
            title="호법신장 심리테스트"
            text={`나의 호법신장은 ${profile.name}입니다.`}
          />
          <Link
            to="/"
            className="rounded-lg border border-stone-300 px-5 py-3 font-semibold"
          >
            다시 테스트하기
          </Link>
        </div>
      </div>
    </Layout>
  );
}
