import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from '@inertiajs/react';
import { type Subscription,  type BreadcrumbItem } from "@/types";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Button, buttonVariants } from "@/Components/ui/button";
import { toast } from 'sonner';

export default function Index({ subscriptions }: { subscriptions: Subscription[] }) {
  const deleteSubscription = (id: number) => { 
        if (confirm('Are you sure?')) {
            router.delete(route('subscriptions.destroy', { id }));
             toast.success('Subscription deleted successfully');
        }
    }; 
//     const breadcrumbs: BreadcrumbItem[] = [
//     { title: 'Dashboard', href: '/dashboard' },
//     { title: 'Customers', href: '/Customers' },
// ];
    return (
      <AuthenticatedLayout
                  header={
                      <h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}>
                  <Head title="Dashboard" />
                  <div className={'mt-8'}>
                  <Link className={buttonVariants({ variant: 'outline' })} href="/subscriptions/create">
                          Create Subscription
                      </Link>
                      
                  <div id="body">
                    <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">start_date</TableHead>
                        <TableHead>end_date</TableHead>
                        <TableHead>price</TableHead>
                        <TableHead>status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {subscriptions.map((subscription) => (
                          <TableRow key={subscription.id}>
                            <TableCell>{subscription.start_date}</TableCell>
                              <TableCell>{subscription.end_date}</TableCell>
                              <TableCell>{subscription.price}</TableCell>
                              <TableCell>{subscription.status}</TableCell>
                              <TableCell className="flex flex-row gap-x-2 text-right">
             <Link className={buttonVariants({ variant: 'default' })}
                  href={`/subscriptions/${subscription.id}/edit`}>
                Edit
            </Link>
 
            <Button variant={'destructive'} className={'cursor-pointer'}
                    onClick={() => deleteSubscription(subscription.id)}>
                Delete
            </Button>
        </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  </div>
                  </div>
      </AuthenticatedLayout>

    )
  }
