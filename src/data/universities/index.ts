import { UniversityProgram } from '@/types/yks'
import { sayisalPrograms } from './sayisal'
import { esitAgirlikPrograms } from './esitAgirlik'
import { sozelPrograms } from './sozel'
import { dilPrograms } from './dil'

export { sayisalPrograms } from './sayisal'
export { esitAgirlikPrograms } from './esitAgirlik'
export { sozelPrograms } from './sozel'
export { dilPrograms } from './dil'

// 2025 YKS Tüm Alanlar Taban Puanları ve Başarı Sıraları (YÖK Atlas)
export const universityPrograms: UniversityProgram[] = [
  ...sayisalPrograms,
  ...esitAgirlikPrograms,
  ...sozelPrograms,
  ...dilPrograms
]
