"use client"
import Link from "next/link"

import {
    Activity,
    ArrowUpRight,
    CircleUser,
    CreditCard,
    NotebookPen,
    Menu,
    Package2,
    Search,
    Users,
    CircleCheck,
    CircleDashed,
    ShieldAlert,
} from "lucide-react"

import { BarChartComponent } from "@/components/Dashboard/BarChart"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';




// export const description =
//     "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image. The main content area is divided into two rows. The first row has a grid of cards with statistics. The second row has a grid of cards with a table of recent transactions and a list of recent sales."
function Dashboard() {
    const [recentComplaints, setRecentComplaints] = useState([])
    const router = useRouter();
    
    useEffect(() => {
        const fetchComplaints = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/v1/complaint/get-all-complaints', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const result = await res.json();
                console.log(result);

                if (!res.ok)
                    throw new Error("Error while fetching complaints")

                setRecentComplaints(result.complants);
            } catch (error) {
                console.log(error);

            }
        }

        fetchComplaints();


    }, [recentComplaints])

    const handleViewDetails = (complaint) => {
        const complaint_id= complaint.complaint_id;
        localStorage.setItem("complaint" , JSON.stringify(complaint))
        router.push(`/admin/complaints/${complaint_id}`);
    };
    


    return (
        <div className="flex min-h-screen w-full flex-col">
            <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <Package2 className="h-6 w-6" />
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Orders
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Analytics
                    </Link>
                </nav>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            variant="outline"
                            size="icon"
                            className="shrink-0 md:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                href="#"
                                className="flex items-center gap-2 text-lg font-semibold"
                            >
                                <Package2 className="h-6 w-6" />
                                <span className="sr-only">Acme Inc</span>
                            </Link>
                            <Link href="#" className="hover:text-foreground">
                                Dashboard
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Orders
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Products
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Customers
                            </Link>
                            <Link
                                href="#"
                                className="text-muted-foreground hover:text-foreground"
                            >
                                Analytics
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <form className="ml-auto flex-1 sm:flex-initial">
                        <div className="relative">
                            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search products..."
                                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            />
                        </div>
                    </form>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="secondary" size="icon" className="rounded-full">
                                <CircleUser className="h-5 w-5" />
                                <span className="sr-only">Toggle user menu</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Support</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <Card x-chunk="dashboard-01-chunk-0" className="shadow-md dark:border-gray-800 bg-blend-darken">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Complaints
                            </CardTitle>
                            <NotebookPen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">4523</div>
                            <p className="text-xs text-red-500">
                                +20.1% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-0" className="shadow-md dark:border-gray-800 bg-blend-darken">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Total Complaints Resolved
                            </CardTitle>
                            <CircleCheck className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1050</div>
                            <p className="text-xs  text-green-500">
                                +10% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-0" className="shadow-md dark:border-gray-800 bg-blend-darken">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                Pending Complaints
                            </CardTitle>
                            <CircleDashed className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3473</div>
                            <p className="text-xs text-red-500">
                                +15% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-0" className="shadow-md dark:border-gray-800 bg-blend-darken">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                High Priorty Complaints
                            </CardTitle>
                            <ShieldAlert className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">680</div>
                            <p className="text-xs text-muted-foreground text-red-500">
                                +5.1% from last month
                            </p>
                        </CardContent>
                    </Card>

                </div>
                <div className="grid gap-4 md:gap-8 lg:grid-cols-2 ">
                    <BarChartComponent />
                    <Card x-chunk="dashboard-01-chunk-5 " className="dark:border-gray-800 dark:shadow-lg">
                        <CardHeader>
                            <CardTitle>Recent Complaints</CardTitle>
                        </CardHeader>
                        <CardContent className="grid gap-8">
                            {recentComplaints.map((complaint) =>
                               
                                    <div className="flex items-center gap-4 hover:shadow-lg hover:scale-95 hover:cursor-pointer"
                                    onClick={() => {
                                        handleViewDetails(complaint)
                                    }}>
                                        <Avatar className="hidden h-9 w-9 sm:flex">
                                            <AvatarImage src="https://ui.shadcn.com/avatars/01.png" alt="Avatar" />
                                            <AvatarFallback>OM</AvatarFallback>
                                        </Avatar>
                                        <div className={`grid gap-1 ${complaint.status === "pending" ? "text-red-500" : "text-green-500"
                                            }`}>
                                            <p className="text-sm font-medium leading-none">
                                                {complaint.title.toUpperCase()}
                                            </p>
                                            <p className="text-sm text-muted-foreground">
                                                {complaint.AI_analysis.category}
                                            </p>
                                        </div>
                                        <div className={`ml-auto font-semibold text-sm text-white rounded-full px-2 py-1 ${complaint.AI_analysis.priority === "high" ? "bg-red-500" : complaint.AI_analysis.priority === "medium" ? "bg-orange-500" : "bg-green-500"
                                            }`}>{complaint.AI_analysis.priority.toUpperCase()}</div>
                                    </div>
                              
                            )}



                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}

export default Dashboard
