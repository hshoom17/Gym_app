import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from '@inertiajs/react';
import { Coach } from "@/types";
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
             toast.success('Task deleted successfully');
        }
    }; 
    return (
      <AuthenticatedLayout
                  header={
                      <h2 className="text-xl font-semibold leading-tight text-gray-800">Dashboard</h2>}>
                  <Head title="Dashboard" />
                  <div id="body">
                    <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>CV</TableHead>
                        <TableHead>Action</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coaches.map((coach) => (
                          <TableRow key={coach.id}>
                              <TableCell>{coach.user.en_name}</TableCell>
                              <TableCell>{coach.user.email}</TableCell>
                              <TableCell>{coach.user.phone}</TableCell>
                              <TableCell><img width="75" height="75" src={`${coach.CV}`} alt="" /> </TableCell>
                              <TableCell className="flex flex-row gap-x-2 text-right">
            <Button variant={'destructive'} className={'cursor-pointer'} onClick={() => deleteCoach(coach.id)}>
                Delete
            </Button>
        </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  </div>
      </AuthenticatedLayout>

    )
  }
