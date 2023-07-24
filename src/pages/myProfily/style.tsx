import { styled } from "@/styles/stitches.config";
import { Flex } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { colors } from '@/styles/Global'

import backgroundImg from "@/public/static/img/background/header-bg.svg";


const headingsDefaultConfig = {
    fontFamily: "$titles"
}

const bodyDefaultConfig = {
    fontFamily: "$texts"
}

export const Header = styled("header", {
  backgroundColor: "$grey1",
  padding: "12rem 0 8rem 0",
  backgroundImage: `url(${backgroundImg})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right",
  backgroundAttachment: "fixed",
  borderBottom: "2px solid $grey5",
  "@tablet": {
    backgroundPosition: "right -10% center",
  },
  "@mobile": {
    padding: "9rem 0 6rem 0",
    backgroundImage: `none`,
  },
  "@mobileLittle": {
    padding: "9rem 0 0 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
  "@tablet": {
    width: "36rem",
  },
  "@mobile": {
    width: "100%",
  },
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",

  [`& ${Button}`]: {
    marginRight: "$2",
    overflow: "hidden",
  },

  "@mobile": {
    [`& ${Button}`]: {
      marginRight: "$2",
      overflow: "hidden",
      width: "100%",
    },

    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    gridGap: "$2",
    marginBottom: "$2",
  },
});

export const H2Title = styled("h2", {
    color: "White",
    marginTop: "$6",
    marginBottom:"$7",
    padding: "0px 3rem",
})
export const TextProfile = styled("p", {
  color: "$grey2",
  fontSize: "$text1",
  fontWeight: 400,
  padding: "0px 3rem",
  variants: {
    type: {
      heading1: {
        fontSize: "$title1",
        lineHeight: "$title1",
        fontWeight: 700,
        ...headingsDefaultConfig,
        "@mobile": {
          fontSize: "$title1Mobile",
          lineHeight: "$title1Mobile",
        },
      },
      heading2: {
        fontSize: "$title2",
        lineHeight: "$title2",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },
      heading3: {
        fontSize: "$title3",
        lineHeight: "$title3",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },
      heading4: {
        fontSize: "$title4",
        lineHeight: "$title4",
        fontWeight: 700,
        ...headingsDefaultConfig,
      },
      body1: {
        fontSize: "$text1",
        lineHeight: "$text1",
        ...bodyDefaultConfig,
      },
      body2: {
        fontSize: "$text2",
        lineHeight: "$text2",
        ...bodyDefaultConfig,
      },
    },
    ...colors,
  },
});
