export type MainContents = {
  src: string;
  alt: string;
  priority: boolean;
  chip: {
    label: string;
    color: string;
  };
  text: {
    title: string;
    detail: string;
  };
};
export const mainContentsSample: Array<MainContents> = [
  {
    src: "https://cdn.kyungsu.com/samples/panel/pc/panel-sample01.webp",
    alt: "main1",
    priority: true,
    chip: {
      label: "신작",
      color: "purple",
    },
    text: {
      title: "500만 뷰로 증명했다|이제 당신 차례다",
      detail: "내 아공간 속 던전 2,000,000 개",
    },
  },
  {
    src: "https://cdn.kyungsu.com/samples/panel/pc/panel-sample02.webp",
    alt: "main2",
    priority: false,
    chip: {
      label: "신작",
      color: "purple",
    },
    text: {
      title: "난 돈만 받으면 돼|살고 싶다면 결제해라",
      detail: "전귀무적",
    },
  },
  {
    src: "https://cdn.kyungsu.com/samples/panel/pc/panel-sample03.webp",
    alt: "main3",
    priority: false,
    chip: {
      label: "Notice",
      color: "purple",
    },
    text: {
      title: "클로즈베타 서비스 중",
      detail:
        "11/27 ~ 12/06|일부 회원만 로그인 가능|12월 중순에 다시 돌아옵니다!",
    },
  },
  {
    src: "https://cdn.kyungsu.com/samples/panel/pc/panel-sample01.webp",
    alt: "main1",
    priority: false,
    chip: {
      label: "신작",
      color: "purple",
    },
    text: {
      title: "500만 뷰로 증명했다|이제 당신 차례다",
      detail: "내 아공간 속 던전 2,000,000 개",
    },
  },
  {
    src: "https://cdn.kyungsu.com/samples/panel/pc/panel-sample02.webp",
    alt: "main2",
    priority: false,
    chip: {
      label: "신작",
      color: "purple",
    },
    text: {
      title: "난 돈만 받으면 돼|살고 싶다면 결제해라",
      detail: "전귀무적",
    },
  },
  {
    src: "https://cdn.kyungsu.com/samples/panel/pc/panel-sample03.webp",
    alt: "main3",
    priority: false,
    chip: {
      label: "Notice",
      color: "purple",
    },
    text: {
      title: "클로즈베타 서비스 중",
      detail:
        "11/27 ~ 12/06|일부 회원만 로그인 가능|12월 중순에 다시 돌아옵니다!",
    },
  },
];
