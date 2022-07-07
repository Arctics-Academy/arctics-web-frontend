
import DateBlock from './DateBlock'

const DateRow = ({row}) => {
    return (
        <div className='std_schedule-calender-row'>
            {row.map((e) => {
                return DateBlock(e)
            })}
        </div>
    )
}

export default DateRow