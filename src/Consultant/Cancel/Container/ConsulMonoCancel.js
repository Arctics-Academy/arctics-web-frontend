import '../clt_cancel.css'
import { useParams } from 'react-router-dom'

const ConsulMonoCancel = () => {
    const { cancelId } = useParams()
    /* Remark: Handle exception => id not belong to current user */

    return (
        <div className='clt_cancel-mono-main'>

        </div>
    )
}

export default ConsulMonoCancel