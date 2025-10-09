const menuConfig = {
  home: {
    title: 'Home',
    menus: [
      {
        name: '대시보드',
        sub: ['요약', '통계'],
      },
    ],
  },
  board: {
    title: 'Board',
    menus: [
      {
        name: '게시판 관리',
        sub: ['공지사항', '자유게시판'],
      },
    ],
  },
  minigame: {
    title: 'Minigame',
    menus: [
      {
        name: '게임 목록',
        sub: ['불쌍한 사람 찾기'],
      },
    ],
  },
  partner: {
    title: 'Partner',
    menus: [
      {
        name: '파트너관리',
        sub: ['파트너관리'],
      },
    ],
  },
};

export default menuConfig;