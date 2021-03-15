export const lightTheme = {
  backgroundColor: 'white',
  // fontColor: '#181819',
  fontColor(opacity: number): string {
    return `rgba(24,24,25,${opacity})`;
  },
};
export const blackTheme: typeof lightTheme = {
  backgroundColor: '#1a1d24',
  fontColor(opacity: number): string {
    return `rgba(0,0,0,${opacity})`;
  },
};

export const theme = {
  color: lightTheme,
  // toogleTheme() {
  //   this.color = blackTheme;
  // },
};

export type Theme = typeof theme;
