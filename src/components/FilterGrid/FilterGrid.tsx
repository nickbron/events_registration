import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar, GridColDef } from '@mui/x-data-grid'
import { IRegistration } from '@/models'
import { differenceInYears, format } from 'date-fns'

function calculateAge(birthday: Date) {
    const age = differenceInYears(new Date(), birthday)
    return age
}

export default function QuickFilteringGrid({ data }: { data: Array<IRegistration> }) {
    const columns: GridColDef<(typeof data)[number]>[] = [
        {
            field: 'fullName',
            headerName: 'Full name',
            headerClassName: 'super-app-theme--header',
            width: 160,
            // flex: 1,
            valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
        },
        {
            field: 'email',
            headerName: 'Email',
            headerClassName: 'super-app-theme--header',
            type: 'string',
            width: 180,
            // flex: 1,
            // headerAlign: 'left',
            // align: 'left',
        },
        {
            field: 'birthday',
            headerName: 'Age',
            headerClassName: 'super-app-theme--header',
            type: 'number',
            width: 80,
            // flex: 1,
            valueGetter: (value, row) => calculateAge(row.birthday),
        },
        {
            field: 'whereKnow',
            headerName: 'Where Know',
            headerClassName: 'super-app-theme--header',
            type: 'string',
            width: 120,
            // flex: 1,
        },
        {
            field: 'created',
            headerName: 'Date registration',
            headerClassName: 'super-app-theme--header',
            type: 'string',
            width: 120,
            // flex: 1,
            valueGetter: (value, row) => format(row.created, 'dd/MM/yyyy'),
        },
    ]

    return (
        <Box
            sx={{
                height: 300,
                width: '100%',
                '& .super-app-theme--header': {
                    backgroundColor: 'grey',
                },
            }}
        >
            <DataGrid
                rows={data}
                columns={columns}
                disableColumnFilter
                disableColumnSelector
                disableDensitySelector
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                    },
                }}
            />
        </Box>
    )
}
