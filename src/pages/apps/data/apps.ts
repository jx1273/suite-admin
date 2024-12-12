import type { IApp } from '../type'
import { faker } from '@faker-js/faker'

const apps: IApp[] = Array.from({ length: 20 }, (_, index) => {
  return {
    id: index + 1,
    name: faker.company.name(),
    logo: 'https://picsum.photos/48/48',
    connected: faker.datatype.boolean(),
    desc: 'Effortlessly sync Google Drive for seamless collaboration.',
  }
})

export default apps
