export default {
  fetchImage(fileName: string): string {
    return require('../assets/' + fileName)
  },
}
