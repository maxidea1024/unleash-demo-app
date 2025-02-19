import { Icon } from '@iconify/react'
import { useFlag, useVariant } from '@unleash/proxy-client-react'
import { getColor } from '../util/color'
import { ExpensesChart } from '../components/ExpensesChart'
import { ExpensesTable } from '../components/ExpensesTable'

export const Expenses = () => {
  const showChart = useFlag('demoApp.showChart')
  const titleColor = useVariant('demoApp.titleColor')

  const color = titleColor.enabled ? getColor(titleColor.payload?.value) : getColor()

  return (
    <>
      <div className='flex flex-row gap-4 items-center justify-between mb-6'>
        <div
          className='w-10 h-10 rounded-xl inline-flex items-center justify-center text-2xl flex-shrink-0'
          style={{ backgroundColor: color.light, color: color.dark }}
        >
          <Icon icon='ic:round-credit-card' />
        </div>
        <p className='flex-1 text-2xl sm:text-3xl tracking-wider font-semibold'>
          Expenses
        </p>
        <div
          className='text-white w-12 h-12 rounded-xl inline-flex items-center justify-center text-2xl cursor-pointer flex-shrink-0'
          style={{ backgroundColor: color.dark }}
        >
          <Icon icon='ic:baseline-plus' />
        </div>
      </div>
      {showChart && <ExpensesChart color={color} />}
      <ExpensesTable color={color} />
    </>
  )
}
