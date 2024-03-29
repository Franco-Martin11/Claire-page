export type dataArray = Array<{ imgUrl: string; imgAlt: string }>;

export type DataCarrer = Array<{
  id?: number;
  imgUrl: string;
  imgAlt: string;
  route: string;
  heading: string;
  paragraph: string;
}>;

export type footerLinks = { route: string; title: string };
export type FooterData = Array<{ heading: string; links: Array<footerLinks> }>;

export type HandleScrollTop = () => void;

export type dataSlices = {
  action: string;
  data: dataArray;
  setter: React.Dispatch<React.SetStateAction<slices>>;
};
export type slices = { init: number; last: number };

export interface Player {
  title: string;
  desc: string;
  image: string;
}

export interface SlideItem {
  styles: React.CSSProperties;
  player: Player | undefined;}

 export interface CarouselSlideItemProps {
    pos: number;
    idx: number;
    activeIdx: number;
  }