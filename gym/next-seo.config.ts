import { DefaultSeoProps } from 'next-seo';

const defaultSeo:DefaultSeoProps = {
  title: "국내 짐웨어 모음 사이트",
  description: "짐웨어 사이트들을 모아 놓았습니다. 짐인웨어에서 짐웨어 브랜들을 확인하고, 홈페이지로 이동하여 다양한 짐웨어를 확인해보세요!",
  canonical: "http://www.gyminwear.com",
  openGraph: {
    title:"국내 짐웨어 모음 사이트",
    description: "짐웨어 사이트들을 모아 놓았습니다.",
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