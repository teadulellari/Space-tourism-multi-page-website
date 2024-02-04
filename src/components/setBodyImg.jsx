export default function setBodyImg({ img}) {
    document.documentElement.style.setProperty('--body-background', `url("${img}")`);
  }