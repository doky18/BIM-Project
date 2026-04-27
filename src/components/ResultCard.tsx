import type { ResultProfile } from '../types/test';

interface ResultCardProps {
  profile: ResultProfile;
  subProfile?: ResultProfile;
}

export function ResultCard({ profile, subProfile }: ResultCardProps) {
  return (
    <section className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm sm:p-8">
      <p className="text-sm font-semibold text-saffron">당신의 호법신장</p>
      <h1 className="mt-2 text-3xl font-bold leading-tight">{profile.name}</h1>
      <p className="mt-3 text-lg font-semibold text-jade">{profile.title}</p>
      <p className="mt-4 leading-7 text-stone-700">{profile.summary}</p>

      <div className="mt-6 space-y-2 leading-7 text-stone-700">
        {profile.description.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        <div>
          <h2 className="text-sm font-bold text-stone-500">강점</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.strengths.map((strength) => (
              <span
                key={strength}
                className="rounded-full bg-jade/10 px-3 py-1 text-sm font-semibold text-jade"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold text-stone-500">그림자</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {profile.shadows.map((shadow) => (
              <span
                key={shadow}
                className="rounded-full bg-cinnabar/10 px-3 py-1 text-sm font-semibold text-cinnabar"
              >
                {shadow}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-7 grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm font-semibold text-stone-500">상징 아이템</p>
          <p className="mt-1 font-bold">{profile.item}</p>
        </div>
        <div className="rounded-lg bg-paper p-4">
          <p className="text-sm font-semibold text-stone-500">상징 동물</p>
          <p className="mt-1 font-bold">{profile.animal}</p>
        </div>
      </div>

      {subProfile ? (
        <div className="mt-6 rounded-lg bg-paper p-4">
          <p className="text-sm font-semibold text-stone-500">서브 유형</p>
          <p className="mt-1 font-bold">{subProfile.name}</p>
        </div>
      ) : null}
    </section>
  );
}
