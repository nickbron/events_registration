export type whereKnowType = 'SocialMedia' | 'Friends' | 'FoundMySelf'

export interface IEvents {
    id: string
    title: string
    description: string | null
    organizer: string
    eventDate: Date
    image: string
    userId?: Array<IRegistration>
}

export interface IRegistration {
    id: string
    firstName: string
    lastName: string
    email: string
    birthday: Date
    whereKnow: whereKnowType
    created: Date
}

export interface IstatResult {
    dateRegistration: string
    quantity: number
}
