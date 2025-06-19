import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { useRef, FormEventHandler } from 'react';
import { type Status } from "@/types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import { format } from 'date-fns'; 

type CreateSubscriptionForm = {
    start_date ?: string;
    end_date   ?: string;
    type    ?: string;
    price   ?: string;
    status  ?: string;
    
}
 
export default function Create({ status }: { status: Status[] }) {
    
    const subscriptionName = useRef<HTMLInputElement>(null);
    const { data, setData, errors, post, reset, processing, progress } = useForm<Required<CreateSubscriptionForm>>({ 
    start_date: '',
    end_date:   '',
    type:    '',
    price:   '',
    status:  '',
        
    }); 
     const createSubscription: FormEventHandler = (e) => {
        e.preventDefault();
 
        post(route('subscriptions.store'), {
            forceFormData: true,
            preserveScroll: true,
            onSuccess: () => {
                reset();
            },
            onError: (errors) => {
                if (errors.start_date) {
                    reset('start_date');
                    subscriptionName.current?.focus();
                }
            },
        });
    };
    

    return (
       <AuthenticatedLayout>
        
             <Head title="Create Subscription" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <form onSubmit={createSubscription} className="space-y-6">

                    <div className="grid gap-2">
                        <Label htmlFor="start_date">Subscription start_date </Label>
 
                      <Input
                id="start_date"
                value={data.start_date}
                onChange={(e) => setData('start_date', format(new Date(e.target.value), 'yyyy-MM-dd'))}
                className="mt-1 block w-full"
                type="date"
        />
                        <InputError message={errors.start_date} />
                    </div>

                    
                    <div className="grid gap-2">
                        <Label htmlFor="end_date">Subscription end_date </Label>
 
                       <Input
                        id="end_date"
                        value={data.end_date}
                        onChange={(e) => setData('end_date', format(new Date(e.target.value), 'yyyy-MM-dd'))}
                        className="mt-1 block w-full"
                        type="date"
             />
                        <InputError message={errors.end_date} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="price">Subscription price *</Label>
 
                        <Input
                            id="price"
                            ref={subscriptionName}
                            value={data.price}
                            onChange={(e) => setData('price', e.target.value)}
                            className="mt-1 block w-full"
                            name='price'
                            
                        />
                        <InputError message={errors.price} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="status">Subscription status *</Label>

                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a fruit" />
                            </SelectTrigger>
                            <SelectContent>
                                {status.map((status)=>(

                                    <SelectItem value="apple">{status.name}</SelectItem>
                                ))}
                                
                            </SelectContent>
                        </Select>
 
                        {/* <Input
                            id="status"
                            ref={subscriptionName}
                            value={data.status}
                            onChange={(e) => setData('status', e.target.value)}
                            className="mt-1 block w-full"
                            name='status'
                            required
                        /> */}
                        <InputError message={errors.status} />
                    </div> 

                    {/* <div className="grid gap-2">
                     <Label htmlFor="CV">CV</Label>
 
                            <Input
                                id="CV"
                                onChange={(e) => setData('CV', e.target.files[0])}
                                className="mt-1 block w-full"
                                type="file"
                            />
                        
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}
                        
                            <InputError message={errors.CV} />
                        </div> */}

                        {/* <div className="grid gap-2">
                        <Label htmlFor="branch">Customer branch *</Label>
 
                        <Input
                            id="branch"
                            ref={customerName}
                            value={data.branch}
                            onChange={(e) => setData('branch', e.target.value)}
                            className="mt-1 block w-full"
                            name='branch'
                            required
                        />
                        <InputError message={errors.branch} />
                    </div> */}
 
                        

                  
 
                    <div className="flex items-center gap-4">
                        <Button disabled={processing}>Create Subscription</Button>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}