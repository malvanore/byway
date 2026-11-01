import { Button } from '@/shared/ui/Button'
import { Heading } from '@/shared/ui/Heading'
import { Input } from '@/shared/ui/Input'

import { SplitLayout } from '../ui/SplitLayout'

import styles from '../AuthPages.module.scss'

import ChevronRightIcon from '@/shared/assets/icons/chevronRight.svg?react'
import signupBanner from '@/shared/assets/img/signupPageBanner.jpg'

export const SignupPage = () => {
  return (
    <SplitLayout imageSrc={signupBanner} imagePosition="left">
      <Heading level={1}>Create Your Account</Heading>
      <label className={styles.field}>
        <span className={styles.label}>Name</span>
        <Input name="name" placeholder="John" />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Email</span>
        <Input type="email" name="email" placeholder="mail@example.com" />
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Password</span>
        <Input type="password" name="password" placeholder="Password" />
      </label>
      <Button iconRight={<ChevronRightIcon />}>Create account</Button>
    </SplitLayout>
  )
}
