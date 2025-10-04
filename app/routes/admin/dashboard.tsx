import { Header, StatsCard, TripCard } from "components"
import { allTrips, user, dashboardStats } from "~/constants"


const Dashboard = () => {

    const { totalUsers, usersJoined, totalTrips, tripsCreated, userRole } = dashboardStats

    return (
        <main className="dashboard wrapper">
            <Header 
                title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description="Track activity, trends and popular destinations in real time"
            />

            <section className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                    <StatsCard 
                        headerTitle="Total Users"
                        total={totalUsers}
                        currentMonthCount={usersJoined.currentMonth}
                        lastMonthCount={usersJoined.lastMonth}
                    />
                    <StatsCard 
                        headerTitle="Total Trips"
                        total={totalTrips}
                        currentMonthCount={tripsCreated.currentMonth}
                        lastMonthCount={tripsCreated.lastMonth}
                    />
                    <StatsCard 
                        headerTitle="Active Users Today"
                        total={userRole.total}
                        currentMonthCount={userRole.currentMonth}
                        lastMonthCount={userRole.lastMonth}
                    />
                </div>
            </section>
            <TripCard />
        </main>
    )
}

export default Dashboard