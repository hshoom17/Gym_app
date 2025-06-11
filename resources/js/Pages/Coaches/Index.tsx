import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from '@inertiajs/react';
import { type Coach,  type BreadcrumbItem } from "@/types";
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

export default function Index({ coaches }: { coaches: Coach[] }) {
  const deleteCoach = (id: number) => { 
        if (confirm('Are you sure?')) {
            router.delete(route('coaches.destroy', { id }));
             toast.success('Coach deleted successfully');
        }
    }; 
    const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
    { title: 'Coaches', href: '/coaches' },
];
    return (
      <AuthenticatedLayout
                  header={
                      <h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}>
                  <Head title="Dashboard" />
                  <div className={'mt-8'}>
                  <Link className={buttonVariants({ variant: 'outline' })} href={route('coaches.create')}>
                          Create Coach
                      </Link>
                      
                  <div id="body">
                    <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Branch</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>CV</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coaches.map((coach) => (
                          <TableRow key={coach.user.id}>
                              <TableCell>{coach.user.en_name}</TableCell>
                              <TableCell>{coach.user.email}</TableCell>
                              <TableCell>{coach.branch_id}</TableCell>
                              <TableCell>{coach.user.phone}</TableCell>
                              <TableCell>{ !coach.mediaFile
                ? ''
                : (
                    <a href={coach.mediaFile.original_url} target="_blank">
                        <img src={coach.mediaFile.original_url} className={'w-8 h-8'} />
                    </a>
                )
        }
        </TableCell> 
                              <TableCell className="flex flex-row gap-x-2 text-right">
             <Link className={buttonVariants({ variant: 'default' })}
                  href={`/coaches/${coach.id}/edit`}>
                Edit
            </Link>
 
            <Button variant={'destructive'} className={'cursor-pointer'}
                    onClick={() => deleteCoach(coach.id)}>
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
