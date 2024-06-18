import * as React from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
type appProps = {
    arrX: string[]
    arrY: number[]
}

export default function SimpleCharts({ arrX, arrY }: appProps) {
    return (
        <BarChart
            xAxis={[
                {
                    id: 'barCategories',
                    data: arrX,
                    scaleType: 'band',
                },
            ]}
            series={[
                {
                    data: arrY,
                },
            ]}
            width={500}
            height={300}
        />
    )
}
