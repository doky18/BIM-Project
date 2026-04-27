import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export function HomePage() {
  return (
    <Layout>
      <section className="flex min-h-[calc(100vh-3rem)] flex-col justify-center py-12">
        <p className="text-sm font-semibold text-saffron">상징형 심리테스트</p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
          나의 호법신장은?
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-stone-700">
          나는 어떤 방식으로 세상과 사람을 지키는 사람인지 가볍게 살펴보는
          테스트입니다.
        </p>
        <Link
          to="/test"
          className="mt-9 inline-flex w-fit rounded-lg bg-cinnabar px-6 py-4 font-bold text-white shadow-sm transition hover:bg-red-800"
        >
          시작하기
        </Link>
      </section>
    </Layout>
  );
}
