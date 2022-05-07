export const symbolPutter = (value: string, symbol: string): string => {
    const newValue = String(value).replace(/\B(?=(\d{3})+(?!\d))/g, symbol)
    
    return newValue
}