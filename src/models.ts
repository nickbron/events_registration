export type whereKnowType = 'SocialMedia' | 'Friends' | 'FoundMySelf'

export interface IEvents {
    id: string
    title: string
    description: string | null
    organizer: string
    eventDate: Date
    image?: string
    userId?: Array<IRegistartion>
}

export interface IRegistartion {
    id: string
    firstName: string
    lastname: string
    email: string
    birthday: Date
    whereKnow: whereKnowType
}
