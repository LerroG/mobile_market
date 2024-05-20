export const useFilterStore = defineStore('filterStore', () => {

  const search = useDebouncedRef('')

  return {
    search
  }
})