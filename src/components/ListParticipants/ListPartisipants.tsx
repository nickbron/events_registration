import { IRegistration } from '@/models'
import { differenceInYears, format, parse } from 'date-fns'

function calculateAge(birthday: Date) {
    const age = differenceInYears(new Date(), birthday)
    return age
}
export default function ListPartisipants({ data }: { data: Array<IRegistration> }) {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h2 className="text-2xl font-bold mb-4">List of registered participants:</h2>
                <table className="table-auto w-full">
                    <thead>
                        <tr>
                            <th className="px-4 py-2"></th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Age</th>
                            <th className="px-4 py-2">Where Know</th>
                            <th className="px-4 py-2">Date registration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({ id, firstName, lastName, email, birthday, created, whereKnow }, i) => (
                            <tr>
                                <td className="border px-4 py-2">{i + 1}</td>
                                <td className="border px-4 py-2">
                                    {firstName} {lastName}
                                </td>
                                <td className="border px-4 py-2">{email}</td>
                                <td className="border px-4 py-2">{calculateAge(birthday)}</td>
                                <td className="border px-4 py-2">{whereKnow}</td>
                                <td className="border px-4 py-2">{format(created, 'dd/MM/yyyy')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
