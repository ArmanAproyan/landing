import { v4 as uuidv4 } from 'uuid'
import { User1, User2, User3, User4 } from '@/assets'
import { TUserList } from './FeaturesCars.types'

export const USERS_LIST: TUserList[] = [
  { id: uuidv4(), User: User1 },
  { id: uuidv4(), User: User2 },
  { id: uuidv4(), User: User3 },
  { id: uuidv4(), User: User4 }
]
