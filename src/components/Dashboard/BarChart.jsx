"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A stacked bar chart with a legend"

const chartData = [
    { type: "Cleanliness", high: 200, low: 90 },
    { type: "Delays", high: 150, low: 70 },
    { type: "Ticket Issues", high: 120, low: 60 },
    { type: "Staff Behavior", high: 110, low: 40 },
    { type: "Food Quality", high: 95, low: 30 },
    { type: "Safety Concerns", high: 130, low: 50 },
    // { type: "Overcrowding", high: 180, low: 85 },
    // { type: "Technical Failures", high: 140, low: 55 },
    // { type: "Luggage Problems", high: 100, low: 45 },
    // { type: "Platform Cleanliness", high: 190, low: 80 }
  ];
  

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} 

export function BarChartComponent() {
  return (
    <Card className="shadow-lg border dark:border-gray-800 dark:shadow-lg">
      <CardHeader>
        <CardTitle>Complaints categorized by Departments</CardTitle>
        <CardDescription>August 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
            className="dark:text-white"
              dataKey="type"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 100)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel className = "bg-red-400" />}  />
            <ChartLegend content={<ChartLegendContent   />} />
            <Bar
              dataKey="high"
              stackId="a"
              fill="rgb(220,20,60)"
              radius={[0, 0, 4, 4]}
              
            />
            <Bar
              dataKey="low"
              stackId="a"
              fill="rgb(240,128,128)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-red-600">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4 text-red-600" />
        </div>
        <div className="leading-none text-muted-foreground ">
          Showing total complaints for last month
        </div>
      </CardFooter>
    </Card>
  )
}
