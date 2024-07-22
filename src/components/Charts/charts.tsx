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
                    data: arrX,
                    scaleType: 'band',
                    label: 'dates of registered participants',
                },
            ]}
            series={[
                {
                    data: arrY,
                    label: 'number of registered participants',
                },
            ]}
            yAxis={[{ tickMinStep: 1 }]}
            height={300}
            barLabel="value"
        />
    )
}
