export const addBrAfterSentences = (text: string) => {
  return text.trim().split(/(?<=[.!?])\s+(?=[A-ZА-ЯЁԱ-Ֆא-ת])/u)
}
