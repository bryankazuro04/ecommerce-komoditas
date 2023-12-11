import Grid from "@mui/material/Grid";
import TaskCard from "@/app/ui/dashboard/task-card";
import SlackCard from "@/app/ui/dashboard/slack-card";
import SalesCard from "@/app/ui/dashboard/sales-card";
import FinanceCard from "@/app/ui/dashboard/finance-card";
import PeopleCard from "@/app/ui/dashboard/people-card";
import PaymentCard from "@/app/ui/dashboard/payment-card";
import ActivityCard from "@/app/ui/dashboard/activity-card";
import BitcoinCard from "@/app/ui/dashboard/bitcoin-card";
import MessageCard from "@/app/ui/dashboard/message-card";
import Calendar from "@/app/ui/dashboard/calendar";
import Users from "@/app/ui/dashboard/users";

export default function DashboardItem() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <TaskCard />
        </Grid>
        <Grid item md={3}>
          <SlackCard />
        </Grid>
        <Grid item md={2} className="flex gap-2 flex-wrap">
          <FinanceCard />
          <SalesCard />
        </Grid>
        <Grid item md={3}>
          <Calendar />
        </Grid>
        <Grid item md={4} className="flex flex-wrap gap-2">
          <PeopleCard />
          <BitcoinCard />
        </Grid>
        <Grid item md={4}>
          <MessageCard />
        </Grid>
        <Grid item md={4}>
          <PaymentCard />
        </Grid>
        <Grid item md={4}>
          <ActivityCard />
        </Grid>
        <Grid item md={8}>
          <Users />
        </Grid>
      </Grid>
    </>
  );
}
