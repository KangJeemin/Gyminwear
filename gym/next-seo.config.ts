import { DefaultSeoProps } from 'next-seo';

const defaultSeo:DefaultSeoProps = {
  canonical: "http://www.gyminwear.com",
  openGraph: {
    title:"헬스 짐웨어 | 운동복 모음 사이트",
    description: "헬스 짐웨어 | 운동복 모음 사이트들을 모아 놓았습니다.",
    type: "website",
    locale: "ko_KR",
    url: "http://www.gyminwear.com",
    site_name: "짐인웨어",
    images: [
      {
        url: "http://www.gyminwear.com/image/gyminwearLogo.png",
        width: 285,
        height: 167,
        alt: "이미지"
      }
    ]
  },
  twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
  },
};

export default defaultSeo