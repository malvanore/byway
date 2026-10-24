import { Button } from '@/shared/ui/Button'
import { Heading } from '@/shared/ui/Heading'

import styles from './SectionHeading.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'

interface SectionHeadingProps {
  title: string
  textButton: string
}

export const SectionHeading = ({ title, textButton }: SectionHeadingProps) => {
  return (
    <div className={styles.topHeader}>
      <Heading level={1}>{title}</Heading>
      <Button iconRight={<ChevronRightIcon />} onClick={() => alert('переход на стр с менторами')}>
        {textButton}
      </Button>
    </div>
  )
}
