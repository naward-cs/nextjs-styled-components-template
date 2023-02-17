'use client'

import styled, { keyframes } from 'styled-components'
import { media } from 'styled-bootstrap-grid'

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  min-height: 100vh;
  ${media.desktop`
    padding: 6rem;
  `}
`

export const Description = styled.div`
  display: inherit;
  justify-content: inherit;
  align-items: inherit;
  font-size: 0.8rem;

  max-width: var(--max-width);
  width: 100%;
  z-index: 2;
  font-family: var(--font-mono);
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem;
  }
  p {
    align-items: center;
    inset: 0 0 auto;
    padding: 2rem 1rem 1.4rem;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);
    background: linear-gradient(
      to bottom,
      rgba(var(--background-start-rgb), 1),
      rgba(var(--callout-rgb), 0.5)
    );
    background-clip: padding-box;
    backdrop-filter: blur(24px);
  }
  p,
  div {
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
  }
  div {
    align-items: flex-end;
    pointer-events: none;
    inset: auto 0 0;
    padding: 2rem;
    height: 200px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgb(var(--background-end-rgb)) 40%
    );
    z-index: 1;
  }
  ${media.desktop`
    font-size: 0.85rem;
    a {
      padding: inherit;
    }
    p,div{
      width: auto;
      display: block;  
    }
    p {
      position: relative;
      margin: 0;
      padding: 1rem;
      background-color: rgba(var(--callout-rgb), 0.5);
      border: 1px solid rgba(var(--callout-border-rgb), 0.3);
      border-radius: var(--border-radius);
    } 
    div {
      position: relative;
      pointer-events: inherit;
      height: auto;
      z-index: 0;
      background: none;
      padding: inherit;
      inset: auto;
    }
  `}
`

export const Code = styled.code`
  font-weight: 700;
  font-family: var(--font-mono);
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 8rem 0 6rem;
  &:before {
    background: var(--secondary-glow);
    border-radius: 50%;
    width: 480px;
    height: 300px;
    margin-left: -400px;
  }
  &:after {
    background: var(--primary-glow);
    width: 240px;
    height: 180px;
    z-index: -1;
  }
  &:before,
  &:after {
    content: '';
    left: 50%;
    position: absolute;
    filter: blur(45px);
    transform: none;
  }
  img.logo {
    position: 'relative';
  }
  @media (prefers-color-scheme: dark) {
    img.vercelLogo {
      filter: invert(1);
    }
    img.logo {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }
  ${media.desktop`
    padding: 4rem 0;
    &:before, &:after{
      transform: translateZ(0);
    }
    &:before {
      height: 360px;
    }
  `}
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: var(--max-width);
  max-width: 320px;
  text-align: center;
  margin-bottom: 120px;
  ${media.desktop`
    grid-template-columns: repeat(3, minmax(33%, auto));
    max-width: 100%;
    text-align: inherit;
    margin-bottom: inherit;
  `}
`

export const Card = styled.a`
  padding: 1rem 2.5rem;
  border-radius: var(--border-radius);
  background: rgba(var(--card-rgb), 0);
  border: 1px solid rgba(var(--card-border-rgb), 0);
  transition: background 200ms, border 200ms;
  span {
    display: inline-block;
    transition: transform 200ms;
  }
  h2 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0;
    opacity: 0.6;
    font-size: 0.9rem;
    line-height: 1.5;
    max-width: 34ch;
  }
  /* Enable hover only on non-touch devices */
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(var(--card-rgb), 0.1);
      border: 1px solid rgba(var(--card-border-rgb), 0.15);
    }

    &:hover span {
      transform: translateX(4px);
    }
  }
  @media (prefers-reduced-motion) {
    &:hover span {
      transform: none;
    }
  }
  ${media.desktop`
    padding: 1rem 1.2rem;
    h2 {
      margin-bottom: 0.7rem;
    }
  `}
`

export const Thirteen = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
  padding: 25px 10px;
  margin-left: 16px;
  transform: translateZ(0);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0px 2px 8px -1px #0000001a;
  &:before,
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
  }
  /* Conic Gradient Animation */
  &:before {
    animation: 6s ${rotate} linear infinite;
    width: 200%;
    height: 200%;
    background: var(--tile-border);
  }
  /* Inner Square */
  &:after {
    inset: 0;
    padding: 1px;
    border-radius: var(--border-radius);
    background: linear-gradient(
      to bottom right,
      rgba(var(--tile-start-rgb), 1),
      rgba(var(--tile-end-rgb), 1)
    );
    background-clip: content-box;
  }
  @media (prefers-color-scheme: dark) {
    img {
      filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);
    }
  }
  @media (prefers-reduced-motion) {
    &:before {
      animation: none;
    }
  }
`
//Logo is using Next/Image which can take a JS-CSS
