const rand = (): string => {
    const string_length = 8
  
    return [...Array(string_length)]
      .map(() => (~~(Math.random() * 36)).toString(36))
      .join("")
  
  }
  
  export const tokenGenerator = (): string => {
    return `${rand()}.${rand()}.${rand()}` 
  }