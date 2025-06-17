import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from '@inertiajs/react';
import { type WorkoutSession,  type BreadcrumbItem } from "@/types";
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
import { format } from 'date-fns'; 

export default function Index({ workoutSessions }: { workoutSessions: WorkoutSession[] }) {
  const deleteWorkoutSession = (id: number) => { 
        if (confirm('Are you sure?')) {
            router.delete(route('workoutSessions.destroy', { id }));
             toast.success('WorkoutSession deleted successfully');
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
                  <Link className={buttonVariants({ variant: 'outline' })} href="/workoutSessions/create">
                          Create WorkoutSession
                      </Link>
                      
                  <div id="body">
                    <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[200px]">start_date</TableHead>
                        <TableHead>end_date</TableHead>
                        <TableHead>type</TableHead>
                        <TableHead>Coach Name</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {workoutSessions.map((workoutSession) => (
                          <TableRow key={workoutSession.id}>
                             <TableCell>{workoutSession.start_date ? format(workoutSession.start_date, 'PPP') : ''}</TableCell> 
                             <TableCell>{workoutSession.end_date ? format(workoutSession.end_date, 'PPP') : ''}</TableCell> 
                              <TableCell>{workoutSession.type}</TableCell>
                              <TableCell>{workoutSession.coach.user.en_name}</TableCell>
                              <TableCell className="flex flex-row gap-x-2 text-right">
             <Link className={buttonVariants({ variant: 'default' })}
                  href={`/workoutSessions/${workoutSession.id}/edit`}>
                Edit
            </Link>
 
            <Button variant={'destructive'} className={'cursor-pointer'}
                    onClick={() => deleteWorkoutSession(workoutSession.id)}>
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
