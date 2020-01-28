const colors = {
  yellow: '#FFDA2B',
  yellow_light: '#FCE782',
  text_primary: '#707070',
  text_secondary: '#7B713F',
  white: '#FFFFFF',
};

const breakPoints = [1300, 950, 768, 576];
const mediaQueries = breakPoints.map(bp => `@media (max-width: ${bp}px)`);

export { mediaQueries };
export default colors;
