'use client'
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from 'recharts'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { IstatResult } from '@/models'

const chartConfig = {
    participants: {
        color: 'hsl(var(--chart-1))',
    },
} satisfies ChartConfig

export default function CahrtOfParticipants({ statisticData }: { statisticData: Array<IstatResult> }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Bar chart of registered participants</CardTitle>
                <CardDescription></CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={statisticData}
                        layout="vertical"
                        margin={{
                            right: 16,
                        }}
                    >
                        <CartesianGrid horizontal={false} />
                        <YAxis
                            dataKey="dateRegistration"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value}
                            hide
                        />
                        <XAxis dataKey="quantity" type="number" hide />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="line" />} />
                        <Bar dataKey="quantity" layout="vertical" fill="var(--color-participants)" radius={4}>
                            <LabelList dataKey="dateRegistration" position="insideLeft" offset={8} className="fill-[--color-label]" fontSize={12} />
                            <LabelList dataKey="quantity" position="right" offset={8} className="fill-foreground" fontSize={12} />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="leading-none text-muted-foreground">Shows the number of participants on the specified date </div>
            </CardFooter>
        </Card>
    )
}
