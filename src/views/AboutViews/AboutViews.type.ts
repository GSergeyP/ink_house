interface IAbout {
  img: string;
  heading: string;
  h: string;
  p: string;
}

interface IImg {
  img: string;
}

interface IData {
  about: IAbout;
  team: IImg[];
}

export type { IData };
