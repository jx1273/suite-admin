import type { IUser } from '../types'
import { faker } from '@faker-js/faker'

const users: IUser[] = Array.from({ length: 20 }, (_, i) => ({
  id: faker.string.uuid(),
  name: faker.person.firstName(),
  avatar: `https://i.pravatar.cc/150?u=${i}`,
  role: faker.helpers.arrayElement(['admin', 'user', 'guest']),
}))

export { users }
