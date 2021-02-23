import { loadAppFonts } from '@/presentation/config/font'
import { loadAppIcons } from '@/presentation/config/icon'

const loading = async (
  loadingFont: () => Promise<void>,
  loadingIcon: () => Promise<void>
): Promise<void> => {
  try {
    await loadingFont()
    await loadingIcon()
  } catch (error) {
    throw new Error(error)
  }
}

export const helpersLoadingApp = async (): Promise<void> => loading(loadAppFonts, loadAppIcons)
