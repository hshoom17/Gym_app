import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { type Customer } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler, useRef } from 'react';
 
type EditCustomerForm = {
    en_name?: string;
    
    
};
 
export default function Edit({ customer }: { customer: Customer }) {
    const customerName = useRef<HTMLInputElement>(null);
 
    const { data, setData, errors, put, reset, processing } = useForm<Required<EditCustomerForm>>({
        en_name: customer.user.en_name,
        
    });
 
    const editCustomer: FormEventHandler = (e) => {
        e.preventDefault();
 
        put(route('customers.update', customer.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.name) {
                    reset('en_name');
                    customerName.current?.focus();
                }
            },
        });
    };
    return (
        <AuthenticatedLayout>
            <Head title="Edit Customer" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={editCustomer} className="space-y-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Customer English Name</Label>
 
                        <Input
                            id="name"
                            ref={customerName}
                            value={data.en_name}
                            onChange={(e) => setData('en_name', e.target.value)}
                            className="mt-1 block w-full"
                        />
 
                        <InputError message={errors.en_name} />
                    </div>
                    
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Update Customer</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}