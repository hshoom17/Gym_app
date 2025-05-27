import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from '@inertiajs/react';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import { Coach } from "@/types";
export default function Index({ coaches }: { coaches: Coach[] }) {
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
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                        {coaches.map((coach) => (
                          <TableRow key={coach.id}>
                              <TableCell>{coach.user.en_name}</TableCell>
                              <TableCell>{coach.user.email}</TableCell>
                              <TableCell>{coach.user.phone}</TableCell>
                              <TableCell><img width="75" height="75" src={`${coach.CV}`} alt="" /> </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  </div>
      </AuthenticatedLayout>

    )
  }
