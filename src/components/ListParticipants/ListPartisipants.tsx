import { IRegistration } from '@/models'
import { format } from 'date-fns'

export default function ListPartisipants({ data }: { data: Array<IRegistration> }) {
    console.log('PARTICIPANTS::', data)
    return (
        <>
            <section className="  grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 justify-items-center  gap-y-5 gap-x-14 m-5 ">
                {data.map(({ id, firstName, lastName, email, created }, i) => (
                    <div key={id} className=" dark:bg-slate-800  bg-white shadow-md rounded-md overflow-hidden w-full h-full ">
                        <ul className="divide-y divide-gray-200">
                            <li className="flex items-center py-4 px-6">
                                <span className="dark:text-slate-400 text-gray-700 text-lg font-medium mr-4">{i + 1}</span>

                                <div className="flex-1">
                                    <h3 className="text-lg font-medium dark:text-slate-400 text-gray-800">
                                        {firstName} {lastName}
                                    </h3>
                                    <p className="text-gray-600 text-base">{email}</p>
                                </div>
                                <span className="dark:text-slate-400 text-gray-700 text-lg font-medium mr-4">{format(created, 'dd/MM/yyyy')}</span>
                            </li>
                        </ul>
                    </div>
                ))}
            </section>
        </>
    )
}
