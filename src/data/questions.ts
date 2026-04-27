import type { Question } from '../types/test';

export const questions: Question[] = [
  {
    id: 1,
    question: '예상치 못한 문제가 터졌을 때, 나는 먼저',
    options: [
      {
        id: 'A',
        text: '일단 내가 나서서 빠르게 수습한다',
        scores: { wit: 2, jeung: 1 },
      },
      {
        id: 'B',
        text: '사람들 입장부터 정리해 분위기를 가라앉힌다',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '왜 이런 일이 생겼는지 흐름과 징후를 살핀다',
        scores: { gwangmok: 2 },
      },
      {
        id: 'D',
        text: '관련 정보와 맥락부터 차분히 모은다',
        scores: { damun: 2 },
      },
    ],
  },
  {
    id: 2,
    question: '내가 더 중요하게 생각하는 것은',
    options: [
      {
        id: 'A',
        text: '결정적인 순간의 실행력',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '함께 갈 수 있는 균형',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '더 나아질 가능성',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '깊이 있는 이해와 축적',
        scores: { damun: 2, gwangmok: 1 },
      },
    ],
  },
  {
    id: 3,
    question: '사람들에게 나는 보통',
    options: [
      {
        id: 'A',
        text: '든든하고 행동이 빠른 사람',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '편안하고 조율을 잘하는 사람',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '에너지를 불어넣는 사람',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '말은 적지만 통찰 있는 사람',
        scores: { gwangmok: 2, damun: 1 },
      },
    ],
  },
  {
    id: 4,
    question: '갈등 상황에서 내가 가장 먼저 보는 것은',
    options: [
      {
        id: 'A',
        text: '지금 당장 끊어야 할 문제',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '누가 얼마나 상처받았는지',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '이 갈등이 더 커질 가능성',
        scores: { gwangmok: 2 },
      },
      {
        id: 'D',
        text: '이 일이 생긴 구조적 원인',
        scores: { damun: 2, jeung: 1 },
      },
    ],
  },
  {
    id: 5,
    question: '내가 가장 답답해하는 상황은',
    options: [
      {
        id: 'A',
        text: '아무도 책임지고 움직이지 않을 때',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '서로 이해하려 하지 않을 때',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '가능성이 있는데도 안주할 때',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '겉만 보고 본질을 놓칠 때',
        scores: { gwangmok: 2, damun: 1 },
      },
    ],
  },
  {
    id: 6,
    question: '내가 맡으면 잘하는 역할은',
    options: [
      {
        id: 'A',
        text: '위기 대응 담당',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '팀 분위기 조율자',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '새 판을 벌이는 추진자',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '자료와 기준을 쌓는 관리자',
        scores: { damun: 2 },
      },
    ],
  },
  {
    id: 7,
    question: '휴식이 필요할 때 나는',
    options: [
      {
        id: 'A',
        text: '몸을 움직이며 기운을 푼다',
        scores: { wit: 2, jeung: 1 },
      },
      {
        id: 'B',
        text: '편한 사람과 마음을 나눈다',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '새로운 자극이나 계획을 찾는다',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '혼자 조용히 정리할 시간을 갖는다',
        scores: { damun: 2, gwangmok: 1 },
      },
    ],
  },
  {
    id: 8,
    question: '누군가 나에게 기대는 순간, 나는',
    options: [
      {
        id: 'A',
        text: '실질적으로 바로 도와줄 방법부터 찾는다',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '우선 마음부터 안정시켜준다',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '다시 힘낼 수 있게 북돋아준다',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '충분히 듣고 필요한 걸 정리해준다',
        scores: { damun: 2, gwangmok: 1 },
      },
    ],
  },
  {
    id: 9,
    question: '내가 강해지는 순간은',
    options: [
      {
        id: 'A',
        text: '내가 앞에 서야 할 이유가 분명할 때',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '누군가를 지켜줘야 할 때',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '더 좋은 방향이 보일 때',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '아무도 못 본 핵심을 발견했을 때',
        scores: { gwangmok: 2 },
      },
    ],
  },
  {
    id: 10,
    question: '내 선택 방식에 더 가까운 것은',
    options: [
      {
        id: 'A',
        text: '빠르게 판단하고 움직이는 편',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '전체 분위기를 보고 맞추는 편',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '기회를 보면 밀어붙이는 편',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '충분히 파악한 뒤 확실히 움직이는 편',
        scores: { damun: 2, gwangmok: 1 },
      },
    ],
  },
  {
    id: 11,
    question: '내가 놓치고 싶지 않은 가치는',
    options: [
      {
        id: 'A',
        text: '책임',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '조화',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '성장',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '진짜를 보는 눈',
        scores: { gwangmok: 2 },
      },
    ],
  },
  {
    id: 12,
    question: '내가 오래 남기는 힘은',
    options: [
      {
        id: 'A',
        text: '위기 때 버텨주는 힘',
        scores: { wit: 2 },
      },
      {
        id: 'B',
        text: '사람 사이를 이어주는 힘',
        scores: { jiguk: 2 },
      },
      {
        id: 'C',
        text: '멈춘 걸 다시 움직이는 힘',
        scores: { jeung: 2 },
      },
      {
        id: 'D',
        text: '조용히 받쳐주는 깊이 있는 힘',
        scores: { damun: 2, gwangmok: 1 },
      },
    ],
  },
];
