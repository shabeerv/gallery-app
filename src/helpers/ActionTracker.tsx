import { actionTypes as imageActions } from '../actions/imageAction'
import { actionTypes as userActions } from '../actions/userAction'

const ActionTracker = [imageActions.IMAGE, userActions.LOGIN]

export const loadingList = ActionTracker

export default ActionTracker
