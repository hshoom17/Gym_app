import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from '@inertiajs/react';
import { type Customer,  type BreadcrumbItem } from "@/types";
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

export default function Index({ customers }: { customers: Customer[] }) {
  const deleteCustomer = (id: number) => { 
        if (confirm('Are you sure?')) {
            router.delete(route('customers.destroy', { id }));
             toast.success('Customer deleted successfully');
        }
    }; 
    const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Customers', href: '/Customers' },
];
    return (
      <AuthenticatedLayout
                  header={
                      <h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}>
                  <Head title="Dashboard" />
                  <div className={'mt-8'}>
                  <Link className={buttonVariants({ variant: 'outline' })} href="/customers/create">
                          Create Customer
                      </Link>
                      
                  <div id="body">
                    <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                          <TableRow key={customer.user.id}>
                              <TableCell>{customer.user.en_name}</TableCell>
                              <TableCell>{customer.user.email}</TableCell>
                              <TableCell>{customer.user.phone}</TableCell>
                              <TableCell>{customer.user.status}</TableCell>
                              <TableCell className="flex flex-row gap-x-2 text-right">
             <Link className={buttonVariants({ variant: 'default' })}
                  href={`/customers/${customer.id}/edit`}>
                Edit
            </Link>
 
            <Button variant={'destructive'} className={'cursor-pointer'}
                    onClick={() => deleteCustomer(customer.id)}>
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
