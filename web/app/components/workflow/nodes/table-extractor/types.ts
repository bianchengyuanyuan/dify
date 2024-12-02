import type { CommonNodeType, ValueSelector } from '@/app/components/workflow/types'

export type TableExtractorNodeType = CommonNodeType & {
  variable_selector: ValueSelector
  is_array_file: boolean
}
