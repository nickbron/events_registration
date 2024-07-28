import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { IRegistration } from '@/models'
import { differenceInYears, format } from 'date-fns'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

function calculateAge(birthday: Date) {
    const age = differenceInYears(new Date(), birthday)
    return age
}

export default function TableParticipants({ data }: { data: Array<IRegistration> }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>List of registered participants</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow className=" font-bold text-xl">
                            <TableHead className="w-[100px]">Full name</TableHead>
                            <TableHead className="w-[130px]">Email</TableHead>
                            <TableHead className="w-[20px]">Age</TableHead>
                            <TableHead className="w-[100px]">Where Know</TableHead>
                            <TableHead className="text-right w-[100px]">Date registration</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map(({ id, firstName, lastName, email, birthday, created, whereKnow }) => (
                            <TableRow key={id}>
                                <TableCell className="font-medium">
                                    {firstName} {lastName}
                                </TableCell>
                                <TableCell>{email}</TableCell>
                                <TableCell>{calculateAge(birthday)}</TableCell>
                                <TableCell>{whereKnow}</TableCell>
                                <TableCell className="text-right">{format(created, 'dd/MM/yyyy')}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    )
}
