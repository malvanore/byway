import { Button } from '@/shared/ui/Button'
import { Heading } from '@/shared/ui/Heading'
import { Input } from '@/shared/ui/Input'

import { SplitLayout } from '../ui/SplitLayout'

import styles from '../AuthPages.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'
import loginBanner from '@/shared/assets/img/loginPageBanner.jpg'

export const LoginPage = () => {
  return (
    <SplitLayout imageSrc={loginBanner}>
      <Heading level={1}>Log in to your account</Heading>
      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <Input type="email" name="email" placeholder="mail@example.com" />
      </label>
      <Button iconRight={<ChevronRightIcon />}>Sign in</Button>
    </SplitLayout>
  )
}
