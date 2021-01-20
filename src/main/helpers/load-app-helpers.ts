import { loadAppFonts } from '@/main/config/font'

const loading = async (
  loadingFont: () => Promise<void>
): Promise<void> => {
  try {
    await loadingFont()
  } catch (error) {
    throw new Error(error)
  }
}

export const helpersLoadingApp = async (): Promise<void> => loading(loadAppFonts)
