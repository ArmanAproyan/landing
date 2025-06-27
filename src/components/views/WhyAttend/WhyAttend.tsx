import { useClassNames } from '@/hooks'
import { WHY_ATTEND_DATA } from './WhyAttend.const'
import { Heading, WhyAttendItem } from '@/components/shared'

import styles from './WhyAttend.module.scss'

export const WhyAttend = () => {
  const { cn } = useClassNames('why_attend', styles)
  return (
    <div className={cn()}>
      <Heading
        title="WHY ATTEND?"
        description="Discover why Next-Gen AI Summit is the must-attend event for AI professionals, innovators, and industry leaders."
      />
      <div className={cn('__items')}>
        {WHY_ATTEND_DATA.map(({ title, description, id, number }, index) => {
          return (
            <WhyAttendItem
              key={id}
              title={title}
              description={description}
              number={number}
              index={index}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WhyAttend
