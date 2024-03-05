enum NavigateMain {
  HERO = 'hero',
  NEW = 'new',
  ABOUT = 'about'
}

enum NavigateMainTitle {
  HERO = 'Репродукции',
  NEW = 'Новинки',
  ABOUT = 'О нас'
}

const NavigateMainData = [
  {
    link: '#' + NavigateMain.HERO,
    title: NavigateMainTitle.HERO
  },
  {
    link: '#' + NavigateMain.NEW,
    title: NavigateMainTitle.NEW
  },
  {
    link: '#' + NavigateMain.ABOUT,
    title: NavigateMainTitle.ABOUT
  }
];

enum NavigateState {
  FRANCE = 'france',
  GERMANY = 'germany',
  ENGLAND = 'england'
}

enum NavigateStateTitle {
  FRANCE = 'Франция',
  GERMANY = 'Германия',
  ENGLAND = 'Англия'
}

const NavigateStateData = [
  {
    link: NavigateState.FRANCE,
    title: NavigateStateTitle.FRANCE
  },
  {
    link: NavigateState.GERMANY,
    title: NavigateStateTitle.GERMANY
  },
  {
    link: NavigateState.ENGLAND,
    title: NavigateStateTitle.ENGLAND
  }
];

enum NavigateYear {
  _2021 = '2021',
  _2022 = '2022'
}

enum NavigateYearTitle {
  _2021 = '2021',
  _2022 = '2022'
}

const NavigateYearData = [
  {
    link: NavigateYear._2021,
    title: NavigateYearTitle._2021
  },
  {
    link: NavigateYear._2022,
    title: NavigateYearTitle._2022
  }
];
enum NavigateAbout {
  PAINTER = 'painter',
  MANAGER = 'manager'
}

enum NavigateAboutTitle {
  PAINTER = 'Художники',
  MANAGER = 'Менеджеры'
}

const NavigateAboutsData = [
  {
    link: NavigateAbout.PAINTER,
    title: NavigateAboutTitle.PAINTER
  },
  {
    link: NavigateAbout.MANAGER,
    title: NavigateAboutTitle.MANAGER
  }
];

export {
  NavigateMain,
  NavigateMainTitle,
  NavigateMainData,
  NavigateState,
  NavigateStateTitle,
  NavigateStateData,
  NavigateYear,
  NavigateYearTitle,
  NavigateYearData,
  NavigateAbout,
  NavigateAboutTitle,
  NavigateAboutsData
};
